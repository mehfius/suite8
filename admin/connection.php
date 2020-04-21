<?php

setlocale(LC_ALL, 'pt_BR');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Content-Type: text/html; charset=UTF-8', true);

ini_set('session.gc_maxlifetime', 36000000);
session_set_cookie_params(36000000);
session_start();

if(isset($_REQUEST['suites'])){
  $_SESSION['suites']=stripquotes($_REQUEST['suites']);
}

include "config.php";

include "functions.php";

function specialApostrophe($string){
	
	$string=str_replace("'", "‘", $string );
	
	return $string;
	
}

function findField($table,$field){
	
	//$query="SELECT sql FROM sqlite_master where tbl_name='".$table."' and sql like '%".$field."%'";
	$query="SELECT sql FROM sqlite_master where tbl_name='".$table."'";
	$array=sql($query);
	
	$sql = $array[0]["sql"];
	
	$start = strpos($sql,"(");
	
	$sql = substr($sql,$start);

	$find = strpos($sql,$field);

	return $find;
	
}

function findTable($table){
	
	$query="SELECT * FROM sqlite_master where tbl_name='".$table."'";
	$array=sql($query);
	
	return sizeof($array);
	
}


function getLocation() {

    $pageURL = 'http';
    if (@$_SERVER["HTTPS"] == "on") {
        $pageURL .= "s";
    }
    $pageURL .= "://";
    if ($_SERVER["SERVER_PORT"] != "80") {
        $pageURL .= $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . $_SERVER["REQUEST_URI"];
    } else {
        $pageURL .= $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
    }
    return $pageURL;
	
}



function sqlD($query){

	
	$connect  = new PDO('sqlite:'.$_SERVER['DOCUMENT_ROOT'].'/database/system') or die("cannot open the database");
	
	$db = $connect->query($query);
	
	if (empty($db)){
		
		echo "<erro><pre>erro:\n".$query."</pre></erro>";
		
	}else{
		
		foreach($db as $row){

        	$array[] = $row;
			
    	}

		
	}
  	
		echo "<debuga><pre>debuga:\n".$query."</pre></debuga>";
	
	return $array;

}

function removeComas($field){
	
	if($field[0]==","){

		$field=substr($field, 1);
	}
	
		if($field[strlen($field)-1]==","){

		$field=substr($field,0,-1);
	}
	
	return $field;
}

function sql($query){

	$connect  = new PDO('sqlite:'.$_SERVER['DOCUMENT_ROOT'].'/database/system') or die("cannot open the database");
	
	$db = $connect->query($query);
	
	if (empty($db)){
		
		echo "<erro><pre>erro:\n".$query."</pre></erro>";
		
	}else{
    
		  $array=array();
    
		  foreach($db as $row){
//echo $row[1];
       
        
        for($x=0;$x<sizeof($row);$x++){
           unset($row[$x]);
        }
        
        	$array[] = $row;

    	}

	}

  if(isset($array)){

    return $array;
    
  }

}

function sqlX($query){
	
	$connect  = new PDO('sqlite:'.$_SERVER['DOCUMENT_ROOT'].'/database/system') or die("cannot open the database");
//echo 'sqlite:'.$GLOBALS['databaseDir'].'/database/system';
	return $connect->exec($query);

}

function sqlLog($query){

	$connect  = new PDO('sqlite:'.$_SERVER['DOCUMENT_ROOT'].'/database/log') or die("cannot open the database");

	return $connect->exec($query);

}

function stripquotes($string){

	$string=str_replace('"', '', $string);
	$string=str_replace("'", "", $string);

	return $string;

}

function logAction(){
	
	sqlLog("INSERT INTO log_acao (ip,url,chave,username) VALUES ('".$_SERVER['REMOTE_ADDR']."','".getLocation()."','".@$_SESSION["chave"]."','".@$_SESSION['admin']."')");

	$query="select count(*) as count from log_acao";
	$result=sqlLog($query);

	if ($result[0]["count"]>10000){

		$limit=$result[0]["count"]-10000;

		sqlLog("delete from log_acao order by codigo asc limit ".$limit);


	}
	
}

function logAuthentic(){
	
	$query ="INSERT INTO log (ip,username,password,hostname,sucesso,chave,siteanterior)";
	$query.=" VALUES ";
	$query.="('".@$_SERVER['REMOTE_ADDR']."','".$username."','".$password."','".@$_SERVER['REMOTE_HOST']."',1,'".$_SESSION["chave"]."','".$_SERVER['HTTP_REFERER']."')";

	sqlLog($query);

}


function sqlCache($query){//cached version

	$jsonfile=md5($query).".json";

	$filename = getcwd()."/cache/".$jsonfile;

	if(file_exists($filename)){

		$f=fopen($filename,'rb');

		$data='';

		while(!feof($f))

		$data.=fread($f,1024);
		fclose($f); 

		//var_dump($data);
		$array = json_decode($data,true);
		//echo sizeof($array);

		$html="<div>";
		$html.="<p>Query</p>";
		$html.="<p>".$query."</p>";
		$html.="<p>Filename (<a href=''>refresh</a>)</p>";
		$html.="<p>".$jsonfile."</p>";
		$html.="<p>Size</p>";
		$html.="<p>".strlen($data)." bytes</p>";	
		$html.="<p>Criado</p>";
		$html.="<p>".date ("d/m/Y H:i", filemtime($filename))."</p>";	
		$html.="</div>";
		$GLOBALS["sistema"].=$html;

	}else{

		$array = sql($query);
		$fp = fopen($filename, 'w');	 
		$string = json_encode($array);			
		fwrite($fp,$string);
		fclose($fp);
		$array=sql($query);

	}

	return $array;

}

?>