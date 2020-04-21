<?php

include('../connection.php');


$filename 	  = stripquotes(@$_REQUEST["filename"]);

if ($filename!=""){


	$query  = "delete from files where filename='".$filename."' ";
	$result = sqlx($query);

	echo $result;


	//unlink($filename);

}else{

	//blank filename
	echo 2;

}
?>