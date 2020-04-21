<?php

include('../connection.php');

$anexos = $_REQUEST['anexos'];

$query=" select codigo,filename,key from files where anexos='".$anexos."'";

$array=sql($query);
$nav=array();
for ($x=0;$x<sizeof($array);$x++){
	
	$nav[$x]["codigo"]=$array[$x]["codigo"];
	$nav[$x]["filename"]=$array[$x]["filename"];
	$nav[$x]["key"]=$array[$x]["key"];
}

if($nav!==""){
	
  echo json_encode($nav);
}

?>