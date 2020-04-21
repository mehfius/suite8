<?php

include 'connection.php';
include 'query.php';




$area = @$_REQUEST['area'];
$acao = @$_REQUEST['acao'];

$html="";
$html.="<!DOCTYPE html>";
$html.="<html lang='pt-br'>";

include 'head.php';

//$html.="<body autoload='".autoload()."' suites='".$_SESSION['suites']."' style=\"background-image:url('/admin/img/banner".$_SESSION['suites'].".jpg');\" >";

$html.="<body autoload='".autoload()."' suites='".$_SESSION['suites']."' modules=''>";

//$html.="<intro><img src='/admin/img/icon_".$_REQUEST["suites"].".png'></img>".$systemInfo[$_REQUEST["suites"]]["label"]."</intro></body>";
$html.="</body>";


$html.="</html>";

echo $html;

?>