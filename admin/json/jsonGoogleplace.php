<?php
setlocale(LC_ALL, 'pt_BR');

header('Content-Type: application/json;charset=UTF-8');

$url=urlencode($_REQUEST["url"]." brasil");

  $details_url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=".$url."&types=establishment&language=pt_BR&key=AIzaSyCuPkUB0PIBEHpBLh8XiCJFNRh3o5izj0A";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $details_url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  //  $geoloc = json_decode(curl_exec($ch), true);

  print curl_exec($ch);

?>