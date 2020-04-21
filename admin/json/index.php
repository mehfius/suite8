<?php

include('../connection.php');

	$query=" select anexos,filename,cover,key from files order by data desc" ;
	$array=sql($query);

	for($x=0;$x<sizeof($array);$x++){

		$arrayfile[$array[$x]["anexos"]]["filename"]=$array[$x]["filename"];
		$arrayfile[$array[$x]["anexos"]]["key"]=$array[$x]["key"];
		
	}

	$query=" select codigo,label from colors order by data desc" ;
	$array=sql($query);

	for($x=0;$x<sizeof($array);$x++){

		$arraycolors[$array[$x]["codigo"]]["label"]=$array[$x]["label"];
		
	}

	$array		= loadFields();
	$arrayBanco	= columns($array);

	for($x=0;$x<sizeof($array);$x++){
	
		//$json[$array[$x]["url"]]["label"]		= $array[$x]["label"];
		
		$json[$x]["type"]			= $array[$x]["tipos"];
		$json[$x]["label"]		= $array[$x]["label"];
		$json[$x]["name"]			= $array[$x]["url"];
		$json[$x]["pattern"]	= $array[$x]["pattern"];
		$json[$x]["title"]		= $array[$x]["title"];
		$json[$x]["required"]	= $array[$x]["required"];
		$json[$x]["limit"]		= $array[$x]["limit"];
		$json[$x]["grid"]			= $array[$x]["grid"];
		$json[$x]["gridmobile"]		= $array[$x]["gridmobile"];
		$json[$x]["admin"]		= $array[$x]["admin"];
		$json[$x]["public"]		= $array[$x]["public"];
    $json[$x]["tabela"]		= $array[$x]["tabela"];
    $json[$x]["attributes"]		= isset($array[$x]["attributes"])?$array[$x]["attributes"]:"";
    
		$tabelacustomizada=($array[$x]["tabela"])?$array[$x]["tabela"]:$json[$x]["name"];
    
    
    if(file_exists("field/field".$json[$x]["type"].".php")){

      include "field/field".$json[$x]["type"].".php";

      
		}else{
      if(sizeof($arrayBanco)){
        
        if(array_key_exists($array[$x]["url"], $arrayBanco[0])){

          $json[$x]["value"]		= ($arrayBanco[0][$array[$x]["url"]]<>null)?$arrayBanco[0][$array[$x]["url"]]:"";

        }
      }
			
		}

	}

//print_r($json);

echo json_encode($json)

?>

