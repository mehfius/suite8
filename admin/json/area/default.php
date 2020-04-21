<?php

	$codigo 		= isset($_REQUEST['codigo'])?$_REQUEST['codigo']:"";
	$modules   	= isset($_REQUEST['area'])?$_REQUEST['area']:"";
	$order  		= isset($_REQUEST['order'])?$_REQUEST['order']:"";
	$category   = isset($_REQUEST['category'])?$_REQUEST['category']:"";

	$order  = ($order==1)?"'".$modules."'.label asc":"'".$modules."'.data desc";

	$havefiles = enabledColumn("havefiles");


	$havecategory = enabledColumn("havecategory");

	$private = enabledColumn("private");

	$canshare = array('prontuarios','prontuariospacientes','prontuariosmedicos','arquivos','dados');

	$lazyload = array('prontuarios','prontuariospacientes','prontuariosmedicos','dados','eventos');

	$query="";
	$where="";

  $limit = isset($_REQUEST['limit'])?" limit ".$_REQUEST['limit']:" limit 0,20 ";

########## Query

	if(in_array($modules,$havefiles)){
		
			$query.="'".$modules."'.files as files,'".$modules."'.files as anexos,";
	}

	if(in_array($modules,$havecategory)){
    
		$query.="'".$modules."'.category as category,";
    
	}

  if(file_exists("area/query/".$modules.".php")){

    include "area/query/".$modules.".php";

  }

if(in_array($modules,$private)){
	
  if(in_array($modules,$canshare) and ($modules=="prontuarios" or $modules=="prontuariospacientes" or $modules=="prontuariosmedicos")){
    
    $where.=" and (".$modules.".users='".@$_SESSION['funcionario']."' or ".$modules.".medicos='".@$_SESSION['funcionario']."' or ".$modules.".share like '%,".@$_SESSION['funcionario'].",%')";
 
  }elseif (in_array($modules,$canshare) and ($modules=="arquivos" )){  
    
    
    $where.=" and (".$modules.".users='".@$_SESSION['funcionario']."' or ".$modules.".share like '%,".@$_SESSION['funcionario'].",%')";
 
    
  }else{

	  $where.=" and ".$modules.".users='".@$_SESSION['funcionario']."'";
	    
  }
  
}

if(in_array($modules,$havecategory) and in_array($modules,$lazyload) and $category!=""){
  
  $where.=" and category='".$category."'";
  
}

if(in_array($modules,$canshare)){

  $query.="'".$modules."'.share as share,";

}

########## Query

		$array=queryModules("colors",null);
		
		for($x=0;$x<sizeof($array);$x++){

			$codigoColors=$array[$x]["codigo"];
			$arrayColor[$codigoColors]["label"]	= $array[$x]["label"];
			
		}		

		$array=queryModules("category",null);
		
		for($x=0;$x<sizeof($array);$x++){

			$codigoCategory=$array[$x]["codigo"];
			$arrayCategory[$codigoCategory]["label"]	= $array[$x]["label"];
			$arrayCategory[$codigoCategory]["colors"]	= $arrayColor[$array[$x]["colors"]]["label"];
			
		}		
		
		$array=queryModules("users",null);
		
		for($x=0;$x<sizeof($array);$x++){

			$codigouser=$array[$x]["codigo"];
			$arrayUsers[$codigouser]["label"]	= $array[$x]["label"];

		}			

		$query =" Select ".$query;
		$query.="'".$modules."'.users as users,";
		$query.="'".$modules."'.codigo as codigo,";
		$query.="'".$modules."'.activated as activated,";
		$query.="'".$modules."'.deleted as deleted,";
		$query.="'".$modules."'.label as label,";
		$query.="strftime('%d/%m/%Y', '".$modules."'.data) as data,";
		$query.="strftime('%H:%M', '".$modules."'.data) as hora,";
		$query.="strftime('%Y/%m/%d', '".$modules."'.data) as dataextenso";
		$query.=" from '".$modules."'";	
		$query.=" where 1 and '".$modules."'.deleted=0";

		if($codigo){

			$query.=" and '".$modules."'.codigo='".$codigo."'";	

		}
		
		$query.=$where;

		if(isset($queryorder)){
      
      $query.=$queryorder;
      
    }else{
      
		  $query.=" order by '".$modules."'.deleted asc,".$order;
      
    }

    if(in_array($modules,$lazyload)){
      
      $query.=$limit;
      
    }
  
		$array=sql($query);
		
		$json=array();
		
		for ($x=0;$x<sizeof($array);$x++){

			$json[$x]["codigo"]			= $array[$x]["codigo"];
			$json[$x]["deleted"]		= $array[$x]["deleted"];
			$json[$x]["label"]			= $array[$x]["label"];
			$json[$x]["data"]				= $array[$x]["data"];
			$json[$x]["dataextenso"]= $array[$x]["dataextenso"];
			$json[$x]["activated"]	= $array[$x]["activated"];

			$json[$x]["me"]					= ($array[$x]["users"]==@$_SESSION['funcionario'])?"1":"0";
			
			$json[$x]["userslabel"]	= isset($arrayUsers[$array[$x]["users"]]["label"])?$arrayUsers[$array[$x]["users"]]["label"]:"";
      
      if(file_exists("area/select/".$modules.".php")){

          include "area/select/".$modules.".php";

      }
      
			if($modules=="category"){
				
				$json[$x]["categorycolors"]	= $arrayColor[$array[$x]["colors"]]["label"];
				
			}else{
        
				if(in_array($modules,$havecategory)){
          
          $json[$x]["category"]	  = $array[$x]["category"];
          
          if(array_key_exists($array[$x]["category"],$arrayCategory)){
            
            $json[$x]["categorylabel"]	= $arrayCategory[$array[$x]["category"]]["label"];
            $json[$x]["categorycolors"]	= $arrayCategory[$array[$x]["category"]]["colors"];
          
          }
				
        }else{
          
        }
                                             
			}

      ## Canshare
      
      if(in_array($modules,$canshare)){
        
        $explode=explode(",",$array[$x]["share"]);
        
        for($s=0;$s<=sizeof($explode);$s++){
          
          if(!empty($explode[$s])){
            
            $json[$x]["share"][$s-1]["codigo"]=$explode[$s];
            $json[$x]["share"][$s-1]["label"]=$arrayUsers[$explode[$s]]["label"];
            
            
          }
          
        }
		
      }
      
      ##
      
			if(in_array($modules,$havefiles)){

				$file=queryFile($array[$x]["files"]);

				for($y=0;$y<sizeof($file);$y++){

					$json[$x]["files"][$y]["filename"]=$file[$y]["filename"];
					$json[$x]["files"][$y]["key"]=$file[$y]["key"];
          
				}
        
        $json[$x]["anexos"]=$array[$x]["anexos"];
				
			}
			
			if($modules=="fieldsCustom"){
			
					$queryModules = "select modules.fieldsCustom from modules where modules.fieldsCustom like '%,".$json[$x]["codigo"].",%'";
					$arrayModules = sql($queryModules);
				
					if(sizeof($arrayModules)==0){
            
						$json[$x]["activated"]="0";
            
					}
				
			}
        
      if(file_exists("area/customfield/".$modules.".php")){

        include "area/customfield/".$modules.".php";

      }     
        
        
	  }
			
	
//echo $query;
echo json_encode($json);

?>