<?php


include('../connection.php');

$anexos 	  = stripquotes(@$_REQUEST["anexos"]);

$query="Select filename,key from files where anexos='".$anexos."' order by data desc";

$array=sql($query);

for($x=0;$x<sizeof($array);$x++){
  
  $html.="<img width='100%' src='".$urlsiteimg.$array[$x]["filename"]."?key=".$array[$x]["key"]."' />";
  
}

echo $html;

?>