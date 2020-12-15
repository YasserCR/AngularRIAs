<?php 
require 'conexion.php';  
header ('Access-Control-Allow-Origin:*');
$usuarios = []; 
$sql = "SELECT cve, snombre, sapepat FROM usuario";  

if($result = mysqli_query($con,$sql)) {
    $i = 0;   
    while($row = mysqli_fetch_assoc($result)){
     $usuarios[$i]['cve']    = $row['cve']; 
     $usuarios[$i]['snombre'] = $row['snombre'];
     $usuarios[$i]['sapepat'] = $row['sapepat']; 
     $i++;
    }

  echo json_encode($usuarios); 
} else {
    http_response_code(404); 
}  
?> 