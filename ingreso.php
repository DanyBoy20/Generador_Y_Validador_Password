<?php
$datos = $_POST["datos"];
$expresion = "/^(?=.{6,8}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/";
if(!preg_match($expresion, $datos)) {
    echo "Error";
}else{
    echo "OK";
}



