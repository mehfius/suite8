<?php


include('connection.php');


$_SESSION["chave"]=($_SESSION["chave"])?$_SESSION["chave"]:md5(microtime());



$email = stripquotes(@$_REQUEST["email"]);
$password = stripquotes(@$_REQUEST["password"]);

if (@$_SESSION['funcionario']){

	sqlLog("INSERT INTO log_acao (ip,url,chave,username) VALUES ('".$_SERVER['REMOTE_ADDR']."','".getLocation()."','".@$_SESSION["chave"]."','".@$_SESSION['admin']."')");

	$query="select count(*) as count from log_acao";
	$result=sqlLog($query);

	if ($result[0]["count"]>10000){

		$limit=$result[0]["count"]-10000;

		sqlLog("delete from log_acao order by codigo asc limit ".$limit);


	}

	if(@$_REQUEST['acao']=='sair'){

		$_SESSION['funcionario']=0;

		echo "Voc&ecirc; foi deslogado com sucesso, <a href='/'>clique aqui</a> para logar novamente";
		exit;
	}

}else{

	if ($email=="" or $password==""){

		$html ="<!DOCTYPE html>";
		$html.="<html lang='pt-br' class='no-js'>";

		include 'head.php';

		$html.="<body class='body'>";

		$html.="<login>";
		$html.="<div>";
		$html.="<form id='login' action='' method='post' onsubmit='login();return false;'>";

		$html.="<div>";
		//$html.="<label>Usu&aacute;rio</label>";
		$html.="<icon class='icon-envelop'></icon><input type='text' autocomplete='off' name='lemail' placeholder='Email' id='email' required='required' value=''>";
		$html.="</div>";

		$html.="<div>";	
		//$html.="<label>Senha</label>";
		$html.="<icon class='icon-key'></icon><input type='password' autocomplete='off' name='lpassword' placeholder='Senha' id='password' value=''  required='required' ><button></button>";
		$html.="</div>";
		$html.="<div id='lstatus' class='status'><p></p></div>";
		$html.="<div>";
		$html.="<p><a href='#cadastro'>Clique aqui para cadastrar</a></p>";
		$html.="</div>";
	//	$html.="<menu>";
		
	//	$html.="<button>Entrar</button><button type='button' onclick='window.open(\"/m/users/cadastrar/\",\"_self\");'>Cadastrar</button>";
		//$html.="<p><a href='/m/users/cadastrar/'>Novo Cadastro</a></p>";
		//$html.="</menu>";
			
		$html.="</form>";

		$html.="<form id='cadastro' action='' method='post' onsubmit='insert();return false;'>";
		
		$html.="<div>";
		$html.="<icon class='icon-user'></icon><input type='text' autocomplete='off' name='cname' placeholder='Nome completo' id='name' required='required' value=''>";
		$html.="</div>";
			
		$html.="<div>";
		$html.="<icon class='icon-envelop'></icon><input type='text' autocomplete='off' name='cemail' placeholder='Email' id='email' required='required' value=''>";
		$html.="</div>";

		$html.="<div>";	
		//$html.="<label>Senha</label>";
		$html.="<icon class='icon-key'></icon><input type='password' autocomplete='off' name='cpassword' placeholder='Senha' id='password' value=''  required='required' ><button></button>";
		$html.="</div>";
		$html.="<div id='cstatus' class='status'><p></p></div>";
		$html.="<div>";
		$html.="<p><a href='#login'>Clique aqui para fazer login</a></p>";
		$html.="</div>";
	//	$html.="<menu>";
		
	//	$html.="<button>Entrar</button><button type='button' onclick='window.open(\"/m/users/cadastrar/\",\"_self\");'>Cadastrar</button>";
		//$html.="<p><a href='/m/users/cadastrar/'>Novo Cadastro</a></p>";
		//$html.="</menu>";
			
		$html.="</form>";
		$html.="</div>";		
		$html.="</login>";		

		$html.= "</body>";

		$html.= "</html>";

		echo $html;
		exit;

	}else{


		$query  = "SELECT codigo from users where deleted=0 and activated=1 and email='".$email."' and password='".$password."'";
	
		$result = sql($query);
		

		if(sizeof($result)){

			$_SESSION['funcionario']=$result[0]["codigo"];

			$query ="INSERT INTO log (ip,username,password,hostname,sucesso,chave,siteanterior)";
			$query.=" VALUES ";
			$query.="('".@$_SERVER['REMOTE_ADDR']."','".$email."','".$password."','".@$_SERVER['REMOTE_HOST']."',1,'".$_SESSION["chave"]."','".$_SERVER['HTTP_REFERER']."')";

			sqlLog($query);

		}else{

			echo "erro";

			sqlLog("INSERT INTO log (ip,username,password,hostname,sucesso,chave,siteanterior) VALUES ('".@$_SERVER['REMOTE_ADDR']."','".$email."','".$password."','".$_SERVER['REMOTE_HOST']."',0,'".$_SESSION["chave"]."','".$_SERVER['HTTP_REFERER']."')");

			exit;

		}
	}
}



?>