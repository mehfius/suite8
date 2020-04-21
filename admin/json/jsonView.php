<?php

include('../connection.php');
include('../query.php');

$area=$_REQUEST['area'];

	if(findTable($area)){

		if(file_exists("area/".$area.".php")){
			
			include "area/".$area.".php";
			
		}else{
			
			include "area/default.php";
			
		}
		
	}else{

		$html="<erro>Tabela ".$area." n&atilde;o encontrada</erro>";
		//sqlX("CREATE TABLE '".$area."' ('codigo' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 'nome' TEXT,'activated' INTEGER DEFAULT 1 , 'data' DATETIME DEFAULT CURRENT_TIMESTAMP,'deleted' INTEGER DEFAULT 0 , 'label' TEXT,'title' TEXT, 'order' INTEGER NOT NULL DEFAULT 500);");
		
	}

?>