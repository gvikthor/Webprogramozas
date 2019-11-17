<?php
session_start();
require("adatbazis.php"); //olyan, mint az #include

if(isset($_POST["regisztral"])){
    if(trim($_POST["f_nev"]) == ""){
        header("Location: index.php?eredet=regisztral&hiba=f_nev_ures");
        exit();
    }
    if(!preg_match("/^[a-zA-Z0-9]*$/",$_POST["f_nev"])){
        header("Location: index.php?eredet=regisztral&hiba=f_nev_illegalis");
        exit();
    }
    if(letezik($_POST["f_nev"])){
        header("Location: index.php?eredet=regisztral&hiba=f_nev_letezik");
        exit();
    }

    if($_POST["jelszo1"] != $_POST["jelszo2"]){
        header("Location: index.php?eredet=regisztral&hiba=jelszo_kul");
        exit();
    }
    if(strlen($_POST["jelszo1"]) < 8){
        header("Location: index.php?eredet=regisztral&hiba=jelszo_rovid");
        exit();
    }if(!(
            preg_match("/[a-z]/",$_POST["jelszo1"]) &&
            preg_match("/[A-Z]/",$_POST["jelszo1"]) &&
            preg_match("/[0-9]/",$_POST["jelszo1"])
        )){
        header("Location: index.php?eredet=regisztral&hiba=jelszo_komplex");
        exit();
    }

    $_SESSION["f_nev"] = $_POST["f_nev"];
    $_SESSION["adatok"] = regisztral($_POST["f_nev"], $_POST["jelszo1"]);
}
header("Location: index.php");

?>