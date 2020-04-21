<?php

	$category			= (isset($_REQUEST['category']))?stripquotes($_REQUEST['category']):"";


	$url					= (isset($_REQUEST['url']))?stripquotes($_REQUEST['url']):"";
	$blogcategory	= (isset($_REQUEST['blogcategory']))?stripquotes($_REQUEST['blogcategory']):"";
	$blogcategorias	= (isset($_REQUEST['blogcategorias']))?stripquotes($_REQUEST['blogcategorias']):"";
	$action				= (isset($_REQUEST['action']))?stripquotes($_REQUEST['action']):"";

	$limit				= (isset($_REQUEST['limit']))?stripquotes($_REQUEST['limit']):"";

	$status				= (isset($_REQUEST['status']))?stripquotes($_REQUEST['status']):"";
	$tipos				= (isset($_REQUEST['tipos']))?stripquotes($_REQUEST['tipos']):"";
	$tiposmidia		= (isset($_REQUEST['tiposmidia']))?stripquotes($_REQUEST['tiposmidia']):"";

	$urlprodutoscategoria	= (isset($_REQUEST['urlprodutoscategoria']))?stripquotes($_REQUEST['urlprodutoscategoria']):"";
	$urlfornecedores			= (isset($_REQUEST['urlfornecedores']))?stripquotes($_REQUEST['urlfornecedores']):"";
	$especialidades				= (isset($_REQUEST['especialidades']))?stripquotes($_REQUEST['especialidades']):"";

	$public				= (isset($_REQUEST['public']))?stripquotes($_REQUEST['public']):"";
	$codigo				= (isset($_REQUEST['codigo']))?stripquotes($_REQUEST['codigo']):"";


	$suites				= (isset($_REQUEST['suites']))?stripquotes($_REQUEST['suites']):"0";
?>