<?php

$_SESSION["client"] = "";
$systemInfo=systemInfo();

//print_r(array_shift(explode(".",$_SERVER['HTTP_HOST'])));

$html.="<head>";
$html.="<meta charset='utf-8' />";
$html.="<meta name='viewport' content='width=480,user-scalable=no'>";

$html.="<meta name='theme-color' content='".$systemInfo[$_REQUEST["suites"]]["colors"]."'>";

$html.="<meta name='msapplication-navbutton-color' content='".$systemInfo[$_REQUEST["suites"]]["colors"]."'>";

$html.="<meta name='apple-mobile-web-app-status-bar-style' content='".$systemInfo[$_REQUEST["suites"]]["colors"]."'>";

$html.="<meta name='mobile-web-app-capable' content='yes'>";
$html.="<meta name='apple-mobile-web-app-capable' content='yes'>";

//$html.="<meta name='mobile-web-app-capable' content='yes'>";
//$html.="<link href='https://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>";
//$html.="<link href='https://info8.com.br/sistema8/fonts/icomoon/style.css' rel='stylesheet' type='text/css'>";
$html.="<link rel='apple-touch-icon' sizes='245x256' href='/admin/img/icon_".$_REQUEST["suites"].".png'>";
$html.="<link rel='shortcut icon' type='image/x-icon' href='/admin/img/icon_".$_REQUEST["suites"].".png' />";
$html.="<link rel='icon' type='image/x-icon' href='/admin/img/icon_".$_REQUEST["suites"].".png' />";

//if($acao=="editar" or $acao=="cadastrar"){
//$html.="<script src='//cdn.ckeditor.com/4.5.7/full/ckeditor.js'></script>";
//}
//$html.='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
$html.="<link href='".$urlheadfiles."/sistema8/css/all.css?v=30' rel='stylesheet'></link>";
$html.="<link href='".$urlheadfiles."/sistema8/fonts/icomoon/style.css?v=30' rel='stylesheet'></link>";
$html.="<script src='/config/config.js?v=30' ></script>";
$html.="<script src='".$urlheadfiles."/sistema8/js/all.js?v=30' ></script>";

$html.="<title>".$systemInfo[$_REQUEST["suites"]]["label"]."</title>";
// $html.="<script>
//   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

//   ga('create', 'UA-105036724-1', 'auto');
//   ga('send', 'pageview');

// </script>";
$html.="</head>";

?>