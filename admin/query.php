<?php

function queryNotifications(){
  
  $query =" select codigo,filename,activated,data,users,users2,modules,action,label,wasread";
  $query.=" from viewnotifications";
  $query.=" where users2='".$_SESSION['funcionario']."'";
  $query.=" and suites='".$_SESSION['suites']."'";
  $query.=" order by codigo desc limit 0,10";

  return sql($query);
  
}

function countModules($modules){

  $query =" select count(*) as count from '".$modules."'";
  $query.=" where '".$modules."'.activated=1 and '".$modules."'.deleted=0 and '".$modules."'.users='".$_SESSION['funcionario']."'";
  $array = sql($query);

  return $array;
  
}

function query($modules,$where){

	$query=" Select * from '".$modules."'";

	if($where){

		$query.=" where ";
		$query.=$where;

	}
	
	$array=sql($query);
	
	return $array;

}

function queryModules($modules,$where){
	
	$query=" Select * from '".$modules."'";
	$query.=" where ";
	
	if($where){
		$query.=$where;
	}
	
	$query.=" activated=1 and deleted=0 order by \"order\" asc, label asc";
	
	$array=sql($query);
	
	return $array;
	
}

function queryLanguage($url,$category){

		$query=" Select * from language";
		$query.=" where ";
		
		$query.=" url='".$url."' and category='".$category."' and ";
		
		$query.=" activated=1 and deleted=0";

		$array=sql($query);
	
	return $array[0]["label"];
	
}


function queryModulesExcludes($modules,$url){
	
	$query=" Select * from ".$modules;
	$query.=" where ";
	
	if($url){
		$query.=" url<>'".$url."' and";
	}
	
	$query.=" activated=1 and deleted=0";
	
	$array=sql($query);
	
	return $array;
	
}

function queryFile($anexos){
	
	$query=" select filename,cover,key from files where anexos='".$anexos."' order by data desc" ;
	$array=sql($query);
    if(isset($array)){ 
    for($x=0;$x<sizeof($array);$x++){

      if($array[$x]["cover"]==1){
        $array["cover"]=$array[$x]["filename"];
      }

    }
	}
	return $array;
	
}


function queryA($modules,$where,$order){
	
	$query=" Select * from '".$modules."'";
	$query.=" where ";
	
	if($where){
		$query.=$where;
	}
	
	if($order){
		
		$order=$order;
		
	}else{
		$order= "\"order\" asc, label asc";
	}
	
	$query.=" activated=1 and deleted=0 order by ".$order;
	
	$array=sql($query);
	
	return $array;
	
}

function queryLabel($modules){

	$query=" Select * from '".$modules."'";
	
	$array=sql($query);
	//print_r($array);
	for($x=0;$x<sizeof($array);$x++){
		
		$return[$array[$x]["codigo"]]["label"]=$array[$x]["label"];
		
		if(isset($array[$x]["url"])){
			
				$return[$array[$x]["codigo"]]["url"]=$array[$x]["url"];
				$return[$array[$x]["url"]]["label"]=$array[$x]["label"];	
				$return[$array[$x]["url"]]["codigo"]=$array[$x]["codigo"];	
			
		}

		
	}
	
	return $return;
	
}


function queryCodigo($modules){

	$query=" Select * from '".$modules."'";
	
	$array=sql($query);
	
	for($x=0;$x<sizeof($array);$x++){
		
		$return[$array[$x]["url"]]["codigo"]=$array[$x]["codigo"];
		
	}
	
	return $return;
	
}
?>