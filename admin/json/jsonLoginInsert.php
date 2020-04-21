<?php

header('Content-Type: application/json');

include('../connection.php');
include('../query.php');
include('../funcoes/checkUsers.php');

$_SESSION["chave"]=(isset($_SESSION["chave"]))?$_SESSION["chave"]:md5(microtime());

$name 		      = stripquotes(@$_REQUEST["name"]);
$cpf 		        = stripquotes(@$_REQUEST["cpf"]);
$email 	        = stripquotes(@$_REQUEST["email"]);
$password       = stripquotes(@$_REQUEST["password"]);
$userstipos 		= stripquotes(@$_REQUEST["userstipos"]);

$crm 		        = stripquotes(@$_REQUEST["crm"]);

$identidade 		= stripquotes(@$_REQUEST["identidade"]);
$telefone 	    = stripquotes(@$_REQUEST["telefone"]);
$cep            = stripquotes(@$_REQUEST["password"]);
$endereco 		  = stripquotes(@$_REQUEST["endereco"]);

$login["status"]="";

$login["status"]=($name=="")?"602":$login["status"];
$login["status"]=($email=="")?"603":$login["status"];
$login["status"]=($cpf=="")?"605":$login["status"];

if($login["status"]==""){
  
  $login["status"]=(checkUsers("email",$email))?"607":$login["status"];
  $login["status"]=(checkUsers("cpf",$cpf))?"606":$login["status"];
  
}

if($login["status"]==""){
  
    $query  = "insert into users (label,crm,cpf,email,password,areas,userstipos,identidade,telefone,cep,endereco) values ('".$name."','".$crm."','".$cpf."','".$email."','".$password."','".$userstipos."','".$userstipos."','".$identidade."','".$telefone."','".$cep."','".$endereco."')";
    $result = sqlX($query);

    $query  = "SELECT codigo from users where deleted=0 and email='".$email."'";
    $result = sql($query);
  
    $_SESSION['funcionario']=$result[0]["codigo"];

    $login["nav"]=loadNav();
    $login["status"]="1";
    $login["areas"]=$_SESSION['areas'];
    $login["suites"]=loadSuites($_SESSION['suites']);
    $login["userinfo"]=loadUserInfo(); 
  
}

echo json_encode($login)
    
?>