<?php
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function sendNotification($email,$name,$telephon){
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'host';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'user';                     //SMTP username
    $mail->Password   = 'password';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 00;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('email', 'subject'); //Quien envia  
    $mail->addAddress('email', 'subject');//Quien recibe

      //Content
    $mail->isHTML(true);
    $mail->CharSet='UTF-8';                                  //Set email format to HTML
    $mail->Subject = 'email_subject';//Asunto del  correo
    $mail->Body    = 'cuerpo_del_correo';
    $mail->send();
    echo 'El mensaje se envio';
} catch (Exception $e) {
    echo "No se envio el mensaje: {$mail->ErrorInfo}.$e";
}
}

?>