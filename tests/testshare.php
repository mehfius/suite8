<?php

include "../admin/connection.php";




$area="prontuarios";
$users="10001";

if($_REQUEST['share']){
  
  if($_REQUEST['codigo']<>'null'){
    
    $queryShareOld="select share from '".$area."' where codigo='".$_REQUEST['codigo']."'";
    //echo $query;
    $arrayShareOld=sql($queryShareOld);

    $shareOld=$arrayShareOld[0]["share"];       
    
    $arrayShareOld=shareSplit($shareOld);
    $arrayShare=shareSplit($_REQUEST['share']);

    for($u=0;$u<sizeof($arrayShare);$u++){

        if(!in_array($arrayShare[$u], $arrayShareOld)){

          $queryNotificaction=" insert into notificacoes (users,users2,modules,action) values ('".$_SESSION['funcionario']."','".$arrayShare[$u]."','".$area."','share')";

          sqlX($queryNotificaction);

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