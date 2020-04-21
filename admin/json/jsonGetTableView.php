<?php

header('Content-Type: application/json;charset=UTF-8');

include('../connection.php');
include('../query.php');

if(isset($_REQUEST['w'])){
  
  $where = explode("|",stripquotes($_REQUEST['w']));
  $where = $where[0]."='".$where[1]."'";
  
}

if(isset($_REQUEST['l'])){
  
  $like = explode("|",stripquotes($_REQUEST['l']));
  $where = $like[0]." like '%".$like[1]."%'";
  
}



$param = isset($_REQUEST['p'])?stripquotes($_REQUEST['p']):"";

$param = explode("|",$param);

$tabela = $param[0];

$fields="";
$suite="";

for ($x=1;$x<sizeof($param);$x++){
  
  //echo $param[$x]."<br>";
  
  $fields.=$param[$x];
  
  if($x+1!==sizeof($param)){
    $fields.=",";
  }
  
}

if($tabela=="category"){
  
  $fields.=",colors";
  
  $suite=" and suites='".@$_SESSION["suites"]."' ";
  
}elseif($tabela=="pacientes"){
  
  $fields.=",filename,key";
  
}

$query = " select ".$fields." from view".$tabela;
$query.= " where ".$where."".$suite;
$query.= " limit 0,10";

$array=sql($query);

//echo sizeof($array);
//echo $query;
echo json_encode($array);

?>