<?php
include_once '../mail/sendEmail.php';
include_once '../Config/config.php';
include_once '../model/Contact.php';
$method=$_SERVER['REQUEST_METHOD'];

if($method=='POST'){
  $contacto=new Contact();
  $contacto->registro($_POST['correo-contacto'],  
  $_POST['comentario-contacto'],
  $_POST['nombre-contacto'],     
  $_POST['telefono-contacto']);
  sendNotification($_POST['correo-contacto'],$_POST['nombre-contacto'],$_POST['telefono-contacto']);
}
?>