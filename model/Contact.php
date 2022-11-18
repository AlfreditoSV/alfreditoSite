<?php
class Contact extends Connect{
  public function registro($nombre,$correo,$telefono,$comentario){
    $conexion=parent::Conexion();
    if (
      isset   ($nombre)
      && isset($correo)
      && isset($telefono)
      && isset($comentario)      
      ) {        
          $name=$_POST['nombre-contacto'];
          $email=$_POST['correo-contacto'];
          $comment=$_POST['comentario-contacto'];
          $telephone=$_POST['telefono-contacto'];
          $sql="INSERT INTO contacts VALUES (NULL,?,?,?,?,DATETIME())";
          $stm=$conexion->prepare($sql);
          $stm->bindValue(1,$name);
          $stm->bindValue(2,$email);
          $stm->bindValue(3,$telephone);
          $stm->bindValue(4,$comment);
          $stm->execute();
          $result= $stm->fetch();
          header('HTTP/1.1 200 OK');
          echo json_encode($result);         
      }
      header('HTTP/1.1 400 Bad Request');
  }

}
?>