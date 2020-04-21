<?php

include('../connection.php');

include('../query.php');

$query=" select * from pages where suites='".$_SESSION['suites']."' order by position desc" ;
$array=sql($query);

$json = array();

for($x=0;$x<sizeof($array);$x++){

  $json[$x]["codigo"]   = $array[$x]["codigo"];
  $json[$x]["label"]    = $array[$x]["label"];
  $json[$x]["content"]  = $array[$x]["content"];
  $json[$x]["url"]      = $array[$x]["url"];
  $json[$x]["files"]    = jsonFile($array[$x]["files"]);
  
  if($json[$x]["url"]=="outros-projetos"){
    
    $querySuites=" select * from suites where codigo!='".$_SESSION['suites']."' and activated=1 and deleted=0" ;
    $arraySuites=sql($querySuites);
    
    $json[$x]["outrosprojetos"]=jsonSuites();
  
  }

}

echo json_encode($json);

function jsonFile($files){
  
  $array=queryFile($files);
 
  $json=array();
  
  for($y=0;$y<sizeof($array);$y++){

    $json[$y]["filename"]=$array[$y]["filename"];
    $json[$y]["key"]=$array[$y]["key"];

  }  
  
  return $json;
  
}

function jsonSuites(){
  
  $query=" select * from suites where codigo!='".$_SESSION['suites']."' and activated=1 and deleted=0 and show=1" ;
  $array=sql($query);

  for($x=0;$x<sizeof($array);$x++){
    
    $json[$x]["codigo"]=$array[$x]["codigo"];
    $json[$x]["label"]=$array[$x]["label"];
    $json[$x]["content"]=$array[$x]["content"];
    $json[$x]["url"]=$array[$x]["url"];
    
    $file=queryFile($array[$x]["files"]);
    
    for($y=0;$y<sizeof($file);$y++){

      $json[$x]["files"][$y]["filename"]=$file[$y]["filename"];
      $json[$x]["files"][$y]["key"]=$file[$y]["key"];

    }
      
  }
  
  return $json;
  
}  
  
?>

