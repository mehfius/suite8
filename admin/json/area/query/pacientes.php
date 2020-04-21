<?php

  $queryProntuariosCount="SELECT count(*) as contador,users from prontuarios where deleted=0 and activated=1 group by users";
  
  $arrayProntuariosCount=sql($queryProntuariosCount);


  for($x=0;$x<sizeof($arrayProntuariosCount);$x++){

    $arrayProntuariosContador[$arrayProntuariosCount[$x]["users"]]["contador"]	= $arrayProntuariosCount[$x]["contador"];

  }		



?>