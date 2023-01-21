<?php
$name=$_POST['name'];
$email=$_POST['servicestype'];
$mesage=$_POST['phone'];
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
$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Content format
$mail->isHTML(true);        //Set email format to HTML
$mail->CharSet = "UTF-8"; 
$mail->setFrom('social@unimarkme.com',$name);
$mail->addAddress('social@unimarkme.com','Unimark');
$mail->Subject= $name .' ' . ' send email using unimark website ';

$mail->Body='massage from : '  . $name . ' he/she need service/s <br> ' . $email .'<br>'.' his/her phone to to contect with his/her is '. $mesage;
$mail->send();//Enable implicit TLS encryption





?>