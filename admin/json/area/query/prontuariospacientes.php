<?php

		$query.="'".$modules."'.pacientes as pacientes,";		
    $query.="'".$modules."'.medicos as medicos,";		
    
    $pacientes=(isset($_REQUEST['pacientes']))?stripquotes($_REQUEST['pacientes']):"";
    
    if($pacientes){
      		$where.=" and ".$modules.".pacientes='".$pacientes."'";
    }

		$array=queryModules("pacientes",null);
		
		for($x=0;$x<sizeof($array);$x++){

			$codigoPacientes=$array[$x]["codigo"];
			$arrayPacientes[$codigoPacientes]["label"]	= $array[$x]["label"];
      $arrayPacientes[$codigoPacientes]["codigo"] = $codigoPacientes;
      
		}
		
		$array=queryModules("medicos",null);
		
		for($x=0;$x<sizeof($array);$x++){

			$codigoMedicos=$array[$x]["codigo"];
			$arrayMedicos[$codigoMedicos]["label"]	= $array[$x]["label"];
			$arrayMedicos[$codigoMedicos]["whereby"]	= $array[$x]["whereby"];
      
		}    


?>