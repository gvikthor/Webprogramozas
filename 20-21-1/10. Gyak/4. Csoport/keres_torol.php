<?php
session_start();
if(!isset($_SESSION["username"])){
    header('Location: index.php');
    die;
}

require_once('adatkezeles.php');
var_dump(film($_GET['id']));
if(film($_GET['id'])->hozzaadta != $_SESSION['username']){
    header('Location: index.php');
    die;
}

torolFilm($_GET['id']);
header('Location: index.php');