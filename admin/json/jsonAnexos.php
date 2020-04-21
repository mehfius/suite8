<?php

include('../connection.php');

$filename 	  = stripquotes(@$_REQUEST["filename"]);
$anexos 	  = stripquotes(@$_REQUEST["anexos"]);
$action 	  = stripquotes(@$_REQUEST["action"]);
$codigo 	  = stripquotes(@$_REQUEST["codigo"]);

if ($filename!=""){

		if ($anexos!=""){
						
			if($action=='insert'){

				$query  = "insert into files (anexos,filename,users) values ('".$anexos."','".$filename."','".$_SESSION['funcionario']."')";
				$result = sqlx($query);

				//echo $query;
				echo 1;

			}elseif($action=='delete'){

				$query  = "delete from files where codigo='".$codigo."' and users='".$_SESSION['funcionario']."'";
				$result = sqlx($query);

				//echo $query;
				echo 1;

			}
			
		}else{

			//blank $anexos
			echo 3;

		}

}else{

	//blank filename
	echo 2;

}
?>