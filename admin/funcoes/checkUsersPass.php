<?php

function checkUsersPass($email,$password){
  
    $query  = "SELECT codigo from users where deleted=0 and email='".$email."' and password='".$password."'";
    $array = sql($query);
  
  //echo sizeof($array);
  return sizeof($array);
  
}

?>