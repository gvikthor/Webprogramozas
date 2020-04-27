<?php
session_start();
if(isset($_POST["leiras"])){
    require_once("adatbazis.php");
    leirasFrissit($_SESSION["felhasznalonev"], $_POST["leiras"]);
    header("Location: index.php");
}else{
    echo "Hibásan jutottál erre az oldalra!";
}