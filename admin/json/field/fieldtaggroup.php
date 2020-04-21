<?php

  $queryMultiple="select codigo,label from '".$tabelacustomizada."' where activated=1 and deleted=0 order by label asc";
  $arrayMultiple=sql($queryMultiple);

  for($y=0;$y<sizeof($arrayMultiple);$y++){

    $json[$x]["list"][$y]["codigo"] = $arrayMultiple[$y]["codigo"];
    $json[$x]["list"][$y]["label"]  = $arrayMultiple[$y]["label"];
    //$json[$x]["list"][$y]["value"]  = sizeof($arrayBanco)?$arrayBanco[0][$array[$x]["url"]]:"";

    $json[$x]["value"]  = sizeof($arrayBanco)?$arrayBanco[0][$array[$x]["url"]]:"";

  }

?>