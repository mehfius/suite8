<?php

function mailSMTP($array){
	
  require 'phpmailer/PHPMailerAutoload.php';

  //Create a new PHPMailer instance
  $mail = new PHPMailer;
  //Tell PHPMailer to use SMTP
  $mail->isSMTP();
  //Enable SMTP debugging
  // 0 = off (for production use)
  // 1 = client messages
  // 2 = client and server messages
	$mail->CharSet = "UTF-8";
  $mail->SMTPDebug = 0;
  //Ask for HTML-friendly debug output
  $mail->Debugoutput = 'html';
  //Set the hostname of the mail server
   $mail->SMTPOptions = array (
        'ssl' => array(
            'verify_peer'  => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true));
  //Ask for HTML-friendly debug output
  $mail->Debugoutput = 'html';
  //Set the hostname of the mail server
  $mail->Host = "smtp.umbler.com";
  //Set the SMTP port number - likely to be 25, 465 or 587
  $mail->Port = 587;
  //Whether to use SMTP authentication
  $mail->SMTPAuth = true;
  //Username to use for SMTP authentication
  $mail->Username = "sistema@info8.com.br";
  //Password to use for SMTP authentication
  $mail->Password = "qweasd123";
  //Set who the message is to be sent from
  $mail->setFrom('sistema@info8.com.br',$array["namefrom"]);
  //Set an alternative reply-to address
  //$mail->addReplyTo('replyto@example.com', 'First Last');
  //Set who the message is to be sent to
  $mail->addAddress($array["mailto"],$array["nameto"]);
  //Set the subject line
  $mail->Subject = $array["subject"];
  //Read an HTML message body from an external file, convert referenced images to embedded,
  //convert HTML into a basic plain-text alternative body
  $mail->msgHTML($array["body"]);
  //Replace the plain text body with one created manually
  $mail->AltBody = 'This is a plain-text message body';
  //Attach an image file
  //$mail->addAttachment('images/phpmailer_mini.png');

  //send the message, check for errors
  if (!$mail->send()) {
      echo 0;
  } else {
      echo 1;
  }

	
}



?>