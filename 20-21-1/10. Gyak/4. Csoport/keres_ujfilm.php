<?php
session_start();
if(!isset($_SESSION["username"])){
    header('Location: index.php');
    die;
}

require_once('adatkezeles.php');
ujFilm($_GET['cim'], $_GET['kiadas'], $_SESSION["username"]);
header('Location: index.php');