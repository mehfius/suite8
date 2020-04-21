<?php

include('../connection.php');

$area=$_REQUEST['area'];

$query =" select count(*) as count,users.label as label from ".$area;
$query.=" join users on (users.codigo=".$area.".users)";
$query.=" where ".$area.".activated=1 and ".$area.".deleted=0";
$query.=" group by ".$area.".users";
$query.=" order by count desc";

$array=sql($query);
  
for ($x=0;$x<sizeof($array);$x++){

  $count[$x]["label"]=$array[$x]["label"];
  $count[$x]["count"]=$array[$x]["count"];
  
}

echo json_encode($count)

?>