<?php

include('../connection.php');

$filename 	= stripquotes(@$_REQUEST["filename"]);
$key 	      = stripquotes(@$_REQUEST["key"]);

if ($filename!="" && $key!=""){
  
  $query=" update files set key='".$key."' where filename='".$filename."'";
  
  echo sqlx($query);
  
}

?>