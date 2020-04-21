<?php
	
    $query.="'".$modules."'.medicos as medicos,";		
    
		$array=queryModules("medicos",null);
		
		for($x=0;$x<sizeof($array);$x++){

			$codigoMedicos=$array[$x]["codigo"];
			$arrayMedicos[$codigoMedicos]["label"]	= $array[$x]["label"];

		}    

?>