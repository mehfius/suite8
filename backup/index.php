<?php
include "../admin/config.php";



function backup($folder){
  
  $zip = new ZipArchive();
  $filename = "./".$folder.date('YmdHms').".zip";
  

  if ($zip->open($filename, ZipArchive::CREATE)!==TRUE) {
      exit("cannot open <$filename>\n");
  }
  
  $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator("../".$folder."/"));
  
  foreach ($iterator as $key=>$value) {
  
    if((!strpos($key,"/.") or strpos($key,"/.htaccess")) && !strpos($key,"/..") && !strpos($key,".zip") && !strpos($key,".jpg") && !strpos($key,".pdf") && !strpos($key,".png") && !strpos($key,".well-known")){
      
      $zip->addFile(realpath($key), $key);
    
     // echo $key."<br>";
    
    } 
  
  }

  $zip->close();
  
  echo "<a href='/backup/".$filename."' >Download ".$folder."</a><br>";
  
}

backup("admin");
backup("database");
backup("sistema8");

?>