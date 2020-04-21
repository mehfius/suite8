<?php

header('Content-Type: application/json');

include('../connection.php');
include('../query.php');

$wasread=(!empty($_REQUEST["wasread"]))?$_REQUEST["wasread"]:"";

if($wasread){
  
  $query="update notifications set wasread=1 where codigo in (".$wasread.")";
  sqlX($query);
  
}



$array["notifications"] = queryNotifications();

// $codigoold=$array["notifications"][sizeof($array["notifications"])-1]["codigo"];

// if($_SESSION['notification']['codigoold']!==$codigoold){
  
// }else{
  
//   $array["notifications"]=""; 
  
// }

echo json_encode($array);
//echo "wasread=".$_REQUEST['wasread'];
//$_SESSION['notification']['codigoold']=$codigoold;

?>