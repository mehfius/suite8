<?php
$php="<?php echo \"oi\" ?>";
	$fp = fopen(getcwd()."/teste.php", 'w');
	fwrite($fp,$php);	
	fclose($fp);

?>