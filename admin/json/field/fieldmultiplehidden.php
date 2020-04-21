<?php


			
			$queryMultiple="select codigo,label from '".$tabelacustomizada."' where activated=1 and deleted=0 order by label asc";
			$arrayMultiple=sql($queryMultiple);
			
			for($y=0;$y<sizeof($arrayMultiple);$y++){
				
				$json[$x]["value"][$y]["codigo"] = $arrayMultiple[$y]["codigo"];
				$json[$x]["value"][$y]["label"]  = $arrayMultiple[$y]["label"];
        
				$json[$x]["value"][$y]["value"]  = (isset($arrayBanco[0][$array[$x]["url"]]))?$arrayBanco[0][$array[$x]["url"]]:"";
				
			}

?>