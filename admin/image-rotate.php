<?php

	ini_set('memory_limit', '256M');
	include 'connection.php';
	require "classes/simpleImage.php";

	$array["jpg1280"]		= "../uploads/jpg/1280/";
	$array["jpg500"]		= "../uploads/jpg/500/";
	$array["jpg300"]		= "../uploads/jpg/300/";


	//$img = new SimpleImage($array["jpg500"].$_REQUEST['img']);

	//$img->rotate(90)->save($array["jpg500"].$_REQUEST['img']);

	//$img->rotate(90)->output();

	//echo $_REQUEST['img']

	// load the original image from the file

	$query="update files set key='".md5(microtime())."' where filename='".$_REQUEST['img']."'";

	sqlX($query);

	foreach ($array as $key => $value) {

		$original = imagecreatefromjpeg($value.$_REQUEST['img']);


		if($_REQUEST['rotate']=="right"){
			$image = imagerotate($original, -90.0, 0);
		}elseif($_REQUEST['rotate']=="left"){
			$image = imagerotate($original, 90.0, 0);
		}

		ImageJPEG($image,$value.$_REQUEST['img'],100);

	}

	$image = imagecreatefromjpeg($array["jpg300"].$_REQUEST['img']);
	header('Content-type: image/jpeg');
	imagejpeg($image);

?>