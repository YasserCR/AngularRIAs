<?php 
/**  * Regresa lista de usuarios.  */ 
require 'conexion.php';  
$materias = []; 
$sql = "SELECT nCveMateria, sNombreMateria, nCreditos FROM materia";  

if($result = mysqli_query($con,$sql)) {
    $i = 0;   
    while($row = mysqli_fetch_assoc($result)){
     $materias[$i]['cve']    = $row['nCveMateria']; 
     $materias[$i]['snombre'] = $row['sNombreMateria'];
     $materias[$i]['screditos'] = $row['nCreditos']; 
     $i++;
    }

  echo json_encode($materias); 
} else {
    http_response_code(404); 
}  
?> 