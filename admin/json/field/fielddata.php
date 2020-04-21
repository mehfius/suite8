<?php

  if(sizeof($arrayBanco)){
    if(array_key_exists($array[$x]["url"], $arrayBanco[0])){

      $json[$x]["value"]		= ($arrayBanco[0][$array[$x]["url"]]<>null)?$arrayBanco[0][$array[$x]["url"]]:"";			

    }
  }

?>