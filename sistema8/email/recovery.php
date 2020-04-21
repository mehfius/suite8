<?php

include('functions.php');

	$_SESSION["chave"]=($_SESSION["chave"])?$_SESSION["chave"]:md5(microtime());

	$array["email"] 	  = $_REQUEST["email"];
	$array["password"] 	= $_REQUEST["password"];
	$array["label"] 	  = $_REQUEST["label"];
	$array["site"] 	  	= $_REQUEST["site"];

	if ($array["email"]!=""){

		recoveryMail($array);

	}else{

		echo 0;

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


?>


