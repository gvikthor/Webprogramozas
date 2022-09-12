<?php
require_once('header.php');

if(!$bejelentkezve){
    header('Location: index.php');
    die;
}

bedislikeol($_GET['id'], $_SESSION['fnev']);
header('Location: index.php');