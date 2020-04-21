<?php

header('Content-Type: application/json');

include('../connection.php');
include('../query.php');
include('../funcoes/checkUsers.php');
include('../funcoes/checkUsersPass.php');
include('../funcoes/checkUsersDeactivated.php');

$_SESSION["chave"]=(isset($_SESSION["chave"]))?$_SESSION["chave"]:md5(microtime());

$email 	  = stripquotes(@$_REQUEST["email"]);
$password = stripquotes(@$_REQUEST["password"]);
$user	    = !isset($_SESSION['funcionario'])?0:$_SESSION['funcionario'];

$login["status"]="";

if($user==0){
  
  $login["status"]=($email=="")?"508":$login["status"];
  $login["status"]=($password=="")?"505":$login["status"];

  if($login["status"]==""){

    $login["status"]=(!checkUsers("email",$email))?"504":$login["status"];

  }

  if($login["status"]==""){

    $login["status"]=(!checkUsersPass($email,$password))?"502":$login["status"];  

  }
 
  if($login["status"]==""){

    $login["status"]=(checkUsersDeactivated($email,$password))?"503":$login["status"]; 

  }
  
  if($login["status"]==""){

      $query  = "SELECT codigo,areas,label,email from users where deleted=0 and email='".$email."' and password='".$password."' and activated=1";
      $result = sql($query);

      $_SESSION['funcionario']=$result[0]["codigo"];
      $_SESSION['areas']=$result[0]["areas"];

      $login["nav"]=loadNav();
      $login["areas"]=$_SESSION['areas'];
      $login["userinfo"]=loadUserInfo();
      $login["status"]="1";


  }else{

    $query  = "SELECT codigo,label from userstipos where deleted=0 and activated=1";

    $result = sql($query);

    $login["userstipos"]=$result;


  }
	
}else{
	
  $login["status"]=!checkUsers("codigo",$user)?"9":$login["status"];
  
  if($login["status"]==""){
    
    $login["nav"]=loadNav();
    $login["status"]="1";
    $login["areas"]=$_SESSION['areas'];
    $login["userinfo"]=loadUserInfo();    
    
  }else{
    $_SESSION['funcionario']=0;
  }


}

  $login["suites"]=loadSuites($_SESSION['suites']);

  echo json_encode($login)

?>