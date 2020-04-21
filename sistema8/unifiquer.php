<?php
function ftype($f) {
                    curl_setopt_array(($c = @curl_init((!preg_match("/[a-z]+:\/{2}(?:www\.)?/i",$f)?sprintf("%s://%s/%s","http",$_SERVER['HTTP_HOST'],$f):$f))), array(CURLOPT_RETURNTRANSFER => 1, CURLOPT_HEADER => 1));
                        return(preg_match("/Type:\s*(?<mime_type>[^\n]+)/i",@curl_exec($c),$m) && curl_getinfo($c,CURLINFO_HTTP_CODE) != 404)?($m["mime_type"]):0;

         }


function compress($buffer,$ext) {
	
	if($ext=="js"){

		/* remove comments */
		//$buffer = preg_replace("/((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/", "", $buffer);
		
		/* remove tabs, spaces, newlines, etc. */
		//$buffer = str_replace(array("\r\n","\r","\t","\n",'  ','    ','     '), '', $buffer);
		
		/* remove other spaces before/after ) */
		//$buffer = preg_replace(array('(( )+\))','(\)( )+)'), ')', $buffer);
		
	}elseif($ext=="css"){

//        /* remove comments */
//         $buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
		
//         /* remove tabs, spaces, newlines, etc. */
//         $buffer = str_replace(array("\r\n","\r","\n","\t",'  ','    ','     '), '', $buffer);
		
//         /* remove other spaces before/after ; */
//         $buffer = preg_replace(array('(( )+{)','({( )+)'), '{', $buffer);
//         $buffer = preg_replace(array('(( )+})','(}( )+)','(;( )*})'), '}', $buffer);
//         $buffer = preg_replace(array('(;( )+)','(( )+;)'), ';', $buffer);

	}
	
	return $buffer;
}

function fileLoader($url){		

	ini_set ('user_agent', $_SERVER['HTTP_USER_AGENT']); 
	$f = @fopen($url,"r");

	$text="";

	while( $buf = fgets($f,1024) ){
		
		$text.=$buf;	

	}	

	
	return $text;
	
}

function fileUnifiquer($ext){
	
	$array=fileListMaker($ext);
	//print_r($array);
	unlink(getcwd()."/".$ext."/all.".$ext);
		
	for($x=0;$x<sizeof($array);$x++){		
		
		$fp = fopen(getcwd()."/".$ext."/all.".$ext, 'a');
    
    $string="\n\n"; 
    $string.="\n/* ######## ".$array[$x]." ######## */\n";
    $string.="\n\n"; 
    
		$string.=fileLoader(getcwd()."/".$ext."/src/".$array[$x]);		
		$string=compress($string,$ext);		
    
   
		fwrite($fp,$string);
    
		fclose($fp);
		
	}
	
}

function fileUnifiquerImg(){
	
	$ponteiro  = opendir(getcwd()."/img/src/");

	while ($arquivo = readdir($ponteiro)){
		
		if(strlen($arquivo)>2){
			
	    	$array[]=$arquivo;
	    		
		}
		
	}
	

	natsort($array);
	sort($array);
	
	unlink(getcwd()."/css/sprite.css");
		
	for($x=0;$x<sizeof($array);$x++){		
		

		
		$fileLocal=getcwd()."/img/src/".$array[$x];
		
		$base64=base64_encode(file_get_contents($fileLocal));	
		
		$mime=preg_replace("/\s+/","",ftype($fileLocal));
		
		$string = 'data:'.$mime.';base64,'.$base64;
		
		$className=$array[$x];
		$className=preg_replace('/\\.[^.\\s]{3,4}$/', '', $className);
		$className=str_replace('-', '>',$className);
		$className=str_replace('_', '.',$className);
		
		$css=".".$className."{background-image:url(".$string.");}\n";
		
		//echo "<p>".$className."</p>";
		//echo "<p><img src='".$string."' /></p>";
		
		$fp = fopen(getcwd()."/css/sprite.css", 'a');
		fwrite($fp,$css);	
		fclose($fp);
		
	}
	
}

function fileUnifiquerFonts(){
	
	$ponteiro  = opendir(getcwd()."/fonts/src/");

	while ($arquivo = readdir($ponteiro)){
		
		if(strlen($arquivo)>2){
			
	    	$array[]=$arquivo;
	    		
		}
		
	}
	

	natsort($array);
	sort($array);
	
	//unlink(getcwd()."/css/sprite.css");
		
	for($x=0;$x<sizeof($array);$x++){		
		
		$fileLocal=getcwd()."/fonts/src/".$array[$x];
		
		$base64=base64_encode(file_get_contents($fileLocal));	
		
		$mime=preg_replace("/\s+/","",ftype($fileLocal));
		
		$string = 'data:'.$mime.';base64,'.$base64;
		
		$className=$array[$x];
		$className=preg_replace('/\\.[^.\\s]{3,4}$/', '', $className);
		
		//$css=".".$className."{background-image:url(".$string.");}\n";
		
		
		$css="@font-face {font-family:'".$className."';src:local('".$className."'),url(".$string.") format('woff');}";
		
		$fp = fopen(getcwd()."/css/all.css", 'a');
		fwrite($fp,$css);	
		fclose($fp);
		
	}
	
}

function fileListMaker($ext){
	
	$ponteiro  = opendir(getcwd()."/".$ext."/src/");

	while ($arquivo = readdir($ponteiro)){
		
		if(substr($arquivo,-(strlen($ext)+1))==(".".$ext)){
	    	$array[]=$arquivo;
	    		
		}
		
	}
	
	natsort($array);
	sort($array);
	
	return $array;
	
}

fileUnifiquer("css");

//echo "<p><a href='css/all.css'>css</a></p>"
fileUnifiquer("js");
//fileUnifiquerFonts();
//fileUnifiquerImg();

?>