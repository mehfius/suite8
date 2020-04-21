<?php

include('../connection.php');
include('../query.php');
$_SESSION['funcionario']=0;
$_SESSION['areas']="";

 $query  = "SELECT codigo,label from userstipos where deleted=0 and activated=1";

    $result = sql($query);
    
 	  $login["userstipos"]=$result;
    
		$login["status"]="2";
  $login["suites"]=loadSuites($_SESSION['suites']);

echo json_encode($login)

?>