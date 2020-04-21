<?php

$image = new Imagick();

$image->readimage('teste.pdf'); 
  $image = $image->mergeImageLayers(Imagick::LAYERMETHOD_FLATTEN);

$image->setImageCompressionQuality(60); 
$image->setImageFormat('jpeg');


header('Content-Type: image/jpeg');
echo $image;
//echo $image->getNumberImages();
$image->clear(); 
$image->destroy();
//echo phpinfo();
?>