<?php

function thumbnailjpg($dir,$img,$newdir,$width){
	
	$image = new SimpleImage($dir.$img);

	if($width!=null){
		
			$image->resizeToWidth($width);
		
	}

	$image->save($newdir.$img,IMAGETYPE_JPEG,60,null);
	
}

?>