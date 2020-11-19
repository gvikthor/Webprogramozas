<?php
session_start();
if(!isset($_SESSION["fnev"])){
    header('Location: index.php');
    die;
}

require_once('adatkezeles.php');
nemtetszik($_GET['id'], $_SESSION["fnev"]);
header('Location: index.php');