<?php

function checkUsers($field,$value){
  
    $query  = "SELECT codigo from users where deleted=0 and ".$field."='".$value."'";
    $array = sql($query);
  
  return sizeof($array);
  
}

?>