<?php
$name=$_POST['name'];
$email=$_POST['email'];
$mesage=$_POST['msg'];
require "autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
$mail = new PHPMailer(true);
                   //Enable verbose debug output
$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.gmail.com';                                 //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'social@unimarkme.com';                           //SMTP username
$mail->Password   = 'fxtgldeuujccgyej';                        //SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
$mail->Port       = 465;   
$mail->SMTPDebug = 0; 
$mail->SMTPDebug  = SMTP::DEBUG_OFF;                                //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Content format
$mail->isHTML(true);        //Set email format to HTML
$mail->CharSet = "UTF-8"; 
$mail->setFrom($email,$name);
$mail->addAddress('social@unimarkme.com','Unimark');
$mail->Subject=$name .' ' . ' send email using unimark website';
$mail->AddReplyTo($email, $name);
$mail->Body='massage from : '  . $name . ' he/she say <br> ' . $mesage;
$mail->send();//Enable implicit TLS encryption





?>