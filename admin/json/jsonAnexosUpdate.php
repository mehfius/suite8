<?php

include('../connection.php');

$filename = stripquotes(@$_REQUEST["filename"]);

if ($filename!=""){

	$query="Select codigo from anexos where filename='".$filename."'";

	$array=sql($query);
	
	if($array[0]["cover"]==0){
		
		$query="update files set cover=1 where filename='".$filename."'";
		echo sqlX();
		
	}else{
		
		$query="update files set cover=0 where filename='".$filename."'";
		echo sqlX();
		
	}
	
}
?>