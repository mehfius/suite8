<?php

//echo "share=".$_REQUEST["share"];


if($_REQUEST['share']){
  
  if($_REQUEST['codigo']<>'null'){
    
    $queryShareOld="select share from '".$area."' where codigo='".$_REQUEST['codigo']."'";
    //echo $query;
    $arrayShareOld=sql($queryShareOld);

    $shareOld=$arrayShareOld[0]["share"];       
    
    $arrayShareOld=shareSplit($shareOld);
    $arrayShare=shareSplit($_REQUEST['share']);

    for($u=0;$u<sizeof($arrayShare);$u++){

      if((!in_array($arrayShare[$u], $arrayShareOld) and $arrayShare[$u]!=="")){

        $queryNotificaction=" insert into notifications (users,users2,modules,action,suites) values ('".$_SESSION['funcionario']."','".$arrayShare[$u]."','".$area."','share','".$_SESSION['suites']."')";

        sqlX($queryNotificaction);
        //echo $queryNotificaction;
      }

    }
    
  }else{
    
    $arrayShare=shareSplit($_REQUEST['share']);

    for($u=0;$u<sizeof($arrayShare);$u++){

      if(($arrayShare[$u]!=="")){

        $queryNotificaction=" insert into notifications (users,users2,modules,action,suites) values ('".$_SESSION['funcionario']."','".$arrayShare[$u]."','".$area."','share','".$_SESSION['suites']."')";

        sqlX($queryNotificaction);
        //echo $queryNotificaction;
      }

    }
    
  }
                
                 
}


function shareSplit($field){
  
    $field=substr_replace($field ,"", -1);
    $field=substr($field, 1); 
    $field=explode(",",$field);
  
 return $field;
  
}


?>