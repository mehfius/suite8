<?

  header('Content-Type: application/json;charset=UTF-8');

  $url 	  = $_REQUEST["url"];

  $youtube = "http://www.youtube.com/oembed?url=". $url ."&format=json";

  $curl = curl_init($youtube);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  $return = curl_exec($curl);
  curl_close($curl);
  
  echo $return;

?>