<?php
session_start();
if(!isset($_SESSION["fnev"])){
    header('Location: index.php');
    die;
}

require_once('adatkezeles.php');
torolFilm($id, $_SESSION["fnev"]);
header('Location: index.php');