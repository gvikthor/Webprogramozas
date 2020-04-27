<?php
session_start();

if(isset($_POST["leiras"])){
    require_once("adatkezeles.php");
    setLeiras($_SESSION["fnev"],$_POST["leiras"]);
    header("Location: index.php");
}else{
    echo "Nem szabályosan jutottál ide.";
}