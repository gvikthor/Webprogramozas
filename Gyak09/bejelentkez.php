<?php
session_start();
require("adatbazis.php"); //olyan, mint az #include

if(isset($_POST["bejelentkez"])){
    if(!letezik($_POST["f_nev"]) || !jelszo($_POST["f_nev"],$_POST["jelszo"])){
        header("Location: index.php?eredet=bejelentkez&hiba=rossz_adatok");
        exit();
    }
    $_SESSION["f_nev"] = $_POST["f_nev"];
    $_SESSION["adatok"] = adatok($_POST["f_nev"]);
    var_dump($_SESSION);
}
header("Location: index.php");


?>