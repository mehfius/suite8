<?php

include('../connection.php');

$_SESSION["chave"]=($_SESSION["chave"])?$_SESSION["chave"]:md5(microtime());

$email 	  = stripquotes(@$_REQUEST["email"]);

		if ($email!=""){

			$query  = "SELECT codigo,label,email,password from users where deleted=0 and email='".$email."'";
			$result = sql($query);
      
			if(sizeof($result)){

	      $_SESSION["chave"]=($_SESSION["chave"])?$_SESSION["chave"]:md5(microtime());

        $array["email"] 	  = $email;
        $array["password"] 	= $result[0]["password"];
        $array["label"] 	  = urlencode($result[0]["label"]);
        $array["site"] 	  	= urlencode($GLOBALS["urlsitelabel"]);

				echo recoveryMail($array);

			}else{

				//email exist			
				echo 501;

			}
			
		}else{
			
			//blank email
			echo 3;
			
		}



?>

