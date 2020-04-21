<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);

include('../connection.php');


$area			= (isset($_REQUEST['area']))?stripquotes($_REQUEST['area']):"";

$area = ($area=="pacientes")?"users":$area;
$area = ($area=="medicos")?"users":$area;

$area = ($area=="prontuariosmedicos")?"prontuarios":$area;
$area = ($area=="prontuariospacientes")?"prontuarios":$area;

$fields="";
$values="";

$x = 0;
$query="";
if($_REQUEST['acao']=='delete'){
	
	//$query="delete from ".$_REQUEST["area"]." where codigo=".$_REQUEST['codigo']; 
	
	$query="update '".$area."' set deleted=1 where codigo=".$_REQUEST['codigo']; 
	
}elseif($_REQUEST['acao']=='insert'){
	
}elseif($_REQUEST['acao']=='update'){
	
	if($_REQUEST["codigo"]<>'null'){

		foreach ($_POST as $key => $val){ 

		$val=specialApostrophe($val);
			
			$query.="'".$key."'"."='".$val."'";

			$query.=(($x+1)<sizeof($_POST))?",":"";

			$x++;

		}
   

    
		$query="update '".$area."' set ".$query." where codigo=".$_REQUEST['codigo']; 

	}else{

		foreach ($_POST as $key => $val) {

	
			
			$fields.="'".$key."'";

			$fields.=(($x+1)<sizeof($_POST))?",":"";
			
			$val=specialApostrophe($val);
			
			$values.="'".$val."'";

			$values.=(($x+1)<sizeof($_POST))?",":"";

			$x++;

		}

		if(findField($area,"users")){

			$fields.=",users";
			$values.=",'".$_SESSION['funcionario']."'";	

		}
    
    if(file_exists("customUpdate/".stripquotes($_REQUEST['area']).".php")){
      
		  include "customUpdate/".stripquotes($_REQUEST['area']).".php";

		}

		$query="insert into '".$area."' (".$fields.") values (".$values.")"; 

	}	
	
}

//echo $query;
echo sqlX($query);

?>

