<?php
$name=$_POST['name'];
$email=$_POST['email'];
$mesage=$_POST['msg'];
require "autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
$mail = new PHPMailer(true);
$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.gmail.com';                                 //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'arwaahmedhaider@gmail.com';                           //SMTP username
$mail->Password   = 'dvzakjopkzihuwmm';                        //SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Content format
$mail->isHTML(true);        //Set email format to HTML
$mail->CharSet = "UTF-8"; 
$mail->setFrom($email,$name);
$mail->addAddress('arwaahmedhaider@gmail.com','arwa');
$mail->Subject='send email';
$mail->AddReplyTo($email, $name);
$mail->Body=$mesage;
$mail->send();//Enable implicit TLS encryption





?>