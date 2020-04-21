<?php

  $querySelect="select * from ".$tabelacustomizada;
  $querySelect.=" where activated=1 and deleted=0";

  if($json[$x]["name"]=="category"){
    $querySelect.=" and ".$tabelacustomizada.".suites='".@$_SESSION['suites']."'";
  }

  if($json[$x]["public"]==0){
    $querySelect.=" and ".$tabelacustomizada.".users='".@$_SESSION['funcionario']."'";
  }

  $arrayBanco[0][$array[$x]["url"]]=(isset($arrayBanco[0][$array[$x]["url"]]))?$arrayBanco[0][$array[$x]["url"]]:""; 

  $querySelect.=" and ".$tabelacustomizada.".codigo='".$arrayBanco[0][$array[$x]["url"]]."'";



  if(!empty($array[$x]["anexos"])){

     $json[$x]["filename"]		= $arrayfile[$array[$x]["anexos"]][0]["filename"];

  }


  $querySelect.=" order by ".$tabelacustomizada.".'label' asc";
  $arraySelect=sql($querySelect);

  for($y=0;$y<sizeof($arraySelect);$y++){

    $json[$x]["value"][$y]["order"] 		= isset($arraySelect[$y]["order"])?$arraySelect[$y]["order"]:"";
    $json[$x]["value"][$y]["codigo"] 		= $arraySelect[$y]["codigo"];
    $json[$x]["value"][$y]["label"]  		= $arraySelect[$y]["label"];


    $json[$x]["value"][$y]["value"]  		= sizeof($arrayBanco)?$arrayBanco[0][$array[$x]["url"]]:"";

    if(!empty($arraySelect[$y]["files"])){

     if(array_key_exists($arraySelect[$y]["files"],$arrayfile)){

        $json[$x]["value"][$y]["filename"]  = $arrayfile[$arraySelect[$y]["files"]]["filename"];
        $json[$x]["value"][$y]["key"]  			= $arrayfile[$arraySelect[$y]["files"]]["key"];

      }

    }

    if(!empty($arraySelect[$y]["colors"])){

      if(array_key_exists($arraySelect[$y]["colors"],$arraycolors)){

        $json[$x]["value"][$y]["colors"]  	= $arraycolors[$arraySelect[$y]["colors"]]["label"];

      }
    } 

  }

?>