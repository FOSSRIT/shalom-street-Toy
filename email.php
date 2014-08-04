<?php

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

try {
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = '127.0.0.1';  					  // Specify main and backup SMTP servers
	//$mail->SMTPDebug = 2; //We have debug information.
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'webmaster@127.0.0.1';                 // SMTP username
	$mail->Password = 'password';                           // SMTP password
	//$mail->SMTPSecure = 'tls'; 				  //For God's sake remove this before you commit.
	$mail->Priority = 1;
	$mail->Port = 25;
	$mail->From = 'shumway.danny@gmail.com';
	$mail->FromName = 'Mailer';
	$mail->addAddress('shumway.danny@gmail.com', 'Joe User');     // Add a recipient
	//$mail->addAddress('ellen@example.com');               // Name is optional
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');

	$mail->WordWrap = 50;                                 // Set word wrap to 50 characters


	//From http://stackoverflow.com/questions/1201955/phpmailer-addstringattachment-and-data-uri-scheme
	$contact_image_data=$_POST["imgBase64"];
	$data = substr($contact_image_data, strpos($contact_image_data, ","));
	$filename="superhero.png"; 
	$encoding = "base64"; 
	$type = "image/png";
	$mail->AddStringAttachment(base64_decode($data), $filename, $encoding, $type);



	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Shalom Street Image';
	$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	$mail->send();
} catch (phpmailerException $e) {
    echo $e->errorMessage();
}


echo 'sent correctly';
?>
