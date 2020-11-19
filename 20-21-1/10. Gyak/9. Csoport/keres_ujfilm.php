<?php
session_start();
if(!isset($_SESSION["fnev"])){
    header('Location: index.php');
    die;
}

require_once('adatkezeles.php');
ujFilm($_GET['cim'], $_GET['ev'], $_SESSION["fnev"]);
header('Location: index.php');