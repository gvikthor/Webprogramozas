<?php
session_start();
require_once("adatbazis.php");

$felhnev = $_POST["felhasznalonev"];

if(felhasznaloLetezik($felhnev)){
    if(jelszoEgyezik($felhnev,$_POST["jelszo"])){
        $_SESSION["felhasznalonev"] = $felhnev;
        header("Location: index.php");
        exit();
    }else{
        header("Location: index.php?hiba=rosszadat");
        exit();
    }
}else{
    header("Location: index.php?hiba=rosszadat");
    exit();
}