<?php

  $json[$x]["pacienteslabel"]	= $arrayPacientes[$array[$x]["pacientes"]]["label"];
  $json[$x]["pacientescodigo"]	= $arrayPacientes[$array[$x]["pacientes"]]["codigo"];

  if(!empty($array[$x]["medicos"])){

    $json[$x]["medicoslabel"]	= $arrayMedicos[$array[$x]["medicos"]]["label"];
    $json[$x]["medicoswhereby"]	= $arrayMedicos[$array[$x]["medicos"]]["whereby"];

  }       

?>