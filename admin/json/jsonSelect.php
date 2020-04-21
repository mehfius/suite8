<?php

include('../connection.php');
include('../query.php');

$modules 	  = stripquotes(@$_REQUEST["modules"]);

if ($modules!=""){
   
  $query=" Select count(*) as contador,";
  $query.=" '".$modules."'.codigo as codigo,";
  $query.=" '".$modules."'.label as label,";
  $query.=" '".$modules."'.data as data,";
  $query.=" files.filename as filename,";
  $query.=" files.key as key";
  $query.=" from '".$modules."'";
  
  if($modules=="pacientes"){
    
    $query.=" join prontuarios on (prontuarios.".$modules."=".$modules.".codigo)";

  }
  
  $query.=" left join files on (files.anexos='".$modules."'.files)";
  
  $query.=" where ";
  $query.=" '".$modules."'.activated=1  ";
  $query.=" and '".$modules."'.deleted=0  ";
  
  if($modules=="pacientes"){
    
    $query.=" and prontuarios.activated=1 ";
    $query.=" and prontuarios.deleted=0  ";
    $query.=" and (prontuarios.users=".$_SESSION["funcionario"]." or prontuarios.share like '%,".$_SESSION["funcionario"].",%')";
    
  }else if($modules=="category"){
    
    $query.=" and category.suites=".$_SESSION["suites"]."";
     
  }
  
  $query.=" group by '".$modules."'.codigo";
  $query.=" order by '".$modules."'.label asc";
  
  $array=sql($query);
  
  for($x=0;$x<sizeof($array);$x++){
    
			$json[$x]["codigo"]			= $array[$x]["codigo"];
			$json[$x]["label"]			= $array[$x]["label"];
			$json[$x]["data"]				= $array[$x]["data"];
    	$json[$x]["contador"]	  = $array[$x]["contador"];
    	$json[$x]["filename"]		= $array[$x]["filename"];
    	$json[$x]["key"]				= $array[$x]["key"];
    
  }
  
  echo json_encode($json);
  
}else{
  
  echo 0;
  
}


?>
