<?php
require_once('header.php');

if(!$bejelentkezve){
    header('Location: index.php');
    die;
}

ujKarakter($_GET['nev'], $_GET['elofordulas']);
header("Location: index.php");