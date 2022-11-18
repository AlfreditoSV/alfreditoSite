<?php
class Connect{

protected function Conexion(){

try{
$conexion=new PDO("sqlite:../db/db.sqlite");
$conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
return $conexion;
}catch(Exception $e){
 echo ("Error: ".$e->getMessage().'<br>');
    }
  }

}
