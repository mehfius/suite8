<?php

function checkUsersDeactivated($email,$password){
  
    $query  = "SELECT codigo from users where activated=0 and email='".$email."' and password='".$password."'";
    $array = sql($query);
  //echo sizeof($array);
  return sizeof($array);
  
}

?>