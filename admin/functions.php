<?php

function disabledColumn($column){
  
  $query=" select url from modules where ".$column."=0";
  $array=sql($query);
 
  $narray=array();
  
  for($x=0;$x<sizeof($array);$x++){
    
    array_push($narray,$array[$x]["url"]);
    
  }
  
  return $narray;
  
}

function enabledColumn($column){
  
  $query=" select url from modules where ".$column."=1";
  $array=sql($query);
 
  $narray=array();
  
  for($x=0;$x<sizeof($array);$x++){
    
    array_push($narray,$array[$x]["url"]);
    
  }
  
  return $narray;
  
}

function autoLoad(){
	
	$array=query("modules"," autoload='1'");
	
	return $array[0]["codigo"];
	
}

function getDateBD($date){
	
	$y=$date[6].$date[7].$date[8].$date[9];
	$m=$date[3].$date[4];
	$d=$date[0].$date[1];
	
	$date=$y."-".$m."-".$d;
	
	return $date;
	
}

function getDateBD2($date){
	
	$y=$date[0].$date[1].$date[2].$date[3];
	$m=$date[5].$date[6];
	$d=$date[8].$date[9];
	
	$date=$d."/".$m."/".$y;
	
	return $date;
	
}

function setDataDb($date){
	
	$y=$date[6].$date[7].$date[8].$date[9];
	$m=$date[3].$date[4];
	$d=$date[0].$date[1];
	
	$date=$y."-".$m."-".$d;
	
	return $date;
}

function loadNav(){
	
	$queryAreas="select areas.modules from areas join users on (users.areas=areas.codigo) where users.codigo='".$_SESSION['funcionario']."'";
	$arrayAreas=sql($queryAreas);

	$modules=removeComas($arrayAreas[0]["modules"]);

	$query =" select groups.label as groups,modules.codigo as codigo,modules.url, modules.label,modules.title,modules.filter as filter from modules";
	$query.=" join groups on (modules.groups=groups.codigo)";
	$query.=" where modules.activated=1 and modules.suites='".$_SESSION['suites']."' and modules.deleted=0 and modules.codigo in (".$modules.") order by groups.label,modules.label asc";

	$array=sql($query);

	for ($x=0;$x<sizeof($array);$x++){

		$arrayCount=countModules($array[$x]["url"]);

		$nav[$x]["groups"]	= $array[$x]["groups"];
		$nav[$x]["name"]		= $array[$x]["url"];
		$nav[$x]["label"]		= $array[$x]["label"];
		$nav[$x]["title"]		= ($array[$x]["title"])?$array[$x]["title"]:$array[$x]["label"];
		$nav[$x]["codigo"]	= $array[$x]["codigo"];
		$nav[$x]["filter"]	= $array[$x]["filter"];

		$nav[$x]["count"]=$arrayCount[0]["count"];

	}
	
	return $nav;
	
}

function loadSuites($suites){
  
	  $array=queryModules("suites","suites.codigo='".$_SESSION['suites']."' and");
  
  return $array[0]["label"];
  
}

function loadUserInfo(){
	
	//$query="select from users where users.codigo='".$_SESSION['funcionario']."'";

	
  
  
	$array=queryModules("users","users.codigo='".$_SESSION['funcionario']."' and");

	$arrayFile=queryFile($array[0]["files"]);

	$return["label"]=$array[0]["label"];

	$return["files"]=$array[0]["files"];
	$return["codigo"]=$array[0]["codigo"];
	$return["areas"]=$array[0]["areas"];	
  if(isset($arrayFile)){
    
	for ($x=0;$x<sizeof($arrayFile);$x++){

		$return["figures"][$x]=$arrayFile[$x]["filename"];
		
	}

  }
	$return["email"]=$array[0]["email"];
	$return["whereby"]=$array[0]["whereby"];
  
	return $return;
	
}

function recoveryMail($array){
	
	$html="<p>Dados solicitados pelo site ".$array["site"]."</p>";	
	$html.="<p>Nome: 		".$array["label"]."</p>";
	$html.="<p>Usuário: ".$array["email"]."</p>";
	$html.="<p>Senha: 	".$array["password"]."</p>";
	
	$mail["body"]		 = $html;
	$mail["mailto"]	 = $array["email"];
	$mail["nameto"]	 = $array["label"];
	$mail["namefrom"]= $array["site"];
	
	$mail["subject"] = "Recuperação de senha";
	
	mailSMTP($mail);
	
}


function mailSMTP($array){
	
  require 'classes/phpmailer/PHPMailerAutoload.php';

  //Create a new PHPMailer instance
  $mail = new PHPMailer;
  //Tell PHPMailer to use SMTP
  $mail->isSMTP();
  //Enable SMTP debugging
  // 0 = off (for production use)
  // 1 = client messages
  // 2 = client and server messages
	$mail->CharSet = "UTF-8";
  $mail->SMTPDebug = 0;
  //Ask for HTML-friendly debug output
  $mail->Debugoutput = 'html';
  //Set the hostname of the mail server
   $mail->SMTPOptions = array (
        'ssl' => array(
            'verify_peer'  => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true));
  //Ask for HTML-friendly debug output
  $mail->Debugoutput = 'html';
  //Set the hostname of the mail server
  $mail->Host = "smtp.umbler.com";
  //Set the SMTP port number - likely to be 25, 465 or 587
  $mail->Port = 587;
  //Whether to use SMTP authentication
  $mail->SMTPAuth = true;
  //Username to use for SMTP authentication
  $mail->Username = "sistema@info8.com.br";
  //Password to use for SMTP authentication
  $mail->Password = "qweasd123";
  //Set who the message is to be sent from
  $mail->setFrom('sistema@info8.com.br',$array["namefrom"]);
  //Set an alternative reply-to address
  //$mail->addReplyTo('replyto@example.com', 'First Last');
  //Set who the message is to be sent to
  $mail->addAddress($array["mailto"],$array["nameto"]);
  //Set the subject line
  $mail->Subject = $array["subject"];
  //Read an HTML message body from an external file, convert referenced images to embedded,
  //convert HTML into a basic plain-text alternative body
  $mail->msgHTML($array["body"]);
  //Replace the plain text body with one created manually
  $mail->AltBody = 'This is a plain-text message body';
  //Attach an image file
  //$mail->addAttachment('images/phpmailer_mini.png');

  //send the message, check for errors
  if (!$mail->send()) {
      echo 0;
  } else {
      echo 1;
  }

	
}

function showFields($field,$table){
	
	$query="SELECT * FROM sqlite_master where sql like(\"%".$field."%\") and tbl_name='".$table."'";

	return sql($query);
	
}

function loadPermissions(){
	
	$findFieldusers=sizeof(showFields("'users' INTEGER",$_REQUEST['area']));

	if($findFieldusers){
		
		if(@$_SESSION['areas']!=1){
			
			$query.=" and users='".@$_SESSION['funcionario']."'";
			
		}

	}
	
	
	
	return $query;
	
}

function systemInfo(){

		$conf = array(array());

		$query=" Select codigo,url,label,colors from suites";

		$array=sql($query);
		
		for($x=0;$x<sizeof($array);$x++){

			$conf[$array[$x]["codigo"]]["label"]=$array[$x]["label"];
      $conf[$array[$x]["codigo"]]["colors"]=$array[$x]["colors"];
		}

		return $conf;

}

function loadFields(){

	
		$arrayModules = array();	
	
		$queryModules = "select modules.fieldsCustom from modules where modules.url='".$_REQUEST["area"]."'";
		$arrayModules = sql($queryModules);
	
		$array = array();
	
		$modules=removeComas($arrayModules[0]["fieldsCustom"]);
		
		$query =" select count(*) as count,fieldsCustom.codigo as codigo,fieldsCustom.tabela as tabela,fieldsCustom.url as url,fieldsCustom.label as label,`fields`.url as tipos,fieldsCustom.required as required,fieldsCustom.pattern as pattern,fieldsCustom.title as title,fieldsCustom.`limit` as `limit`,fieldsCustom.`grid` as `grid`,fieldsCustom.`gridmobile` as `gridmobile`,fieldsCustom.`admin` as `admin`,fieldsCustom.`public` as `public` from fieldsCustom";
		$query.=" join `fields` on (`fields`.codigo=fieldsCustom.`fields`)";	
		$query.=" where";
		$query.=" fieldsCustom.deleted=0 and fieldsCustom.codigo in (".$modules.")";


		if (@$_SESSION['funcionario']){	
			
			//$query.=" and fieldsCustom.public=1"
				
		}else{
			
			$query.=" and fieldsCustom.public=1";
				
			
		}

  
  	if ($_REQUEST["area"]=="arquivos"){	
			
	    //$query.=" and category.suites=".@$_SESSION['suites'];	
			
		}
	
		//$query.=" and modules.nome='".$_REQUEST["area"]."'";
	
		$query.=" group by fieldsCustom.codigo";
	
		if(@$_REQUEST['acao'] or @$_POST['action']){
			
		}else{
			$query.=" having count>1";
		}
	
		$query.=" order by fieldsCustom.`order`  ";
 
		//echo $query;
	
		$array=sql($query);
		//print_r($array);
		return $array;
		
}

function columns($array){
	$names="";
	for($x=0;$x<sizeof($array);$x++){

		$names.="`".$array[$x]["url"]."`";
		$names.=(($x+1)==sizeof($array))?"":",";
		
	}

	$query="Select '".$_REQUEST['area']."'.codigo,".$names." from `".$_REQUEST['area']."` where 1";

	if(@$_REQUEST['codigo']){

		$query.=" and codigo='".$_REQUEST['codigo']."'";

	}

  $query.=" ";

	
	//$query.=loadPermissions();
	
	//echo $query;
	
	$arrayBanco=sql($query);
	
	return $arrayBanco;
	
}

function loadScript($url){

    $html ="<script language='javascript' type='text/javascript'>";
    $html .="var script = document.createElement('script');";
    $html .="script.type = 'text/javascript';";
    $html .="script.async = true;";
    $html .="script.src = '".$url."';";
    $html .="var s = document.getElementsByTagName('script')[0];";
    $html .="s.parentNode.insertBefore(script, s);";
    $html .="</script>";

    return $html;

}

?>