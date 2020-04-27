<?php
session_start();
require_once("adatkezeles.php");

$fnev = $_POST["fnev"];
$jszo = $_POST["jszo"];

if(felhasznaloLetezik($fnev)){
    if(jelszoHelyes($fnev,$jszo)){
        $_SESSION["fnev"] = $fnev;
        header("Location: index.php");
    }else{
        header("Location: index.php?hiba=rosszadat");
    }
}else{
    header("Location: index.php?hiba=rosszadat");
}