<?php

	include '../connection.php';
	require "../classes/simpleImage.php";

function url_exists($url) {

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_NOBODY, true);
    curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return ($code == 200); // verifica se recebe "status OK"
}

    $query="Select filename from files order by data desc limit 0,200";
    $array=sql($query);

    for ($x=0;$x<sizeof($array);$x++){

      $extensao=explode(".",$array[$x]["filename"])[1];
      $filename=explode(".",$array[$x]["filename"])[0];

      if($extensao=='pdf'){

          $url = "https://suite8files-tk.umbler.net/uploads/jpg/1280/".$filename.".jpg";
        
          $urlcreate = "https://suite8files-tk.umbler.net/uploads/pdftothumbnail.php?pdf=".$filename;
        
          //echo $url."<br>";
          if(!url_exists($url)){
            echo "<a href='".$urlcreate."'>".$url."</a><br>";
            
          }else{
             echo $url."<br>";
          }

      }


    }


?>