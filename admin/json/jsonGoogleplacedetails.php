<?php
setlocale(LC_ALL, 'pt_BR');

header('Content-Type: application/json;charset=UTF-8');

$place_id=$_REQUEST["place_id"];

  $details_url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=".$place_id."&key=AIzaSyCuPkUB0PIBEHpBLh8XiCJFNRh3o5izj0A";
//echo $details_url;
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $details_url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  //  $geoloc = json_decode(curl_exec($ch), true);

  print curl_exec($ch);

?>