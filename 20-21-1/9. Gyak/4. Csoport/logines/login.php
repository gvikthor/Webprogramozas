<?php
require_once('adatkezeles.php');

session_start();

if(felhasznaloLetezik($_POST['username'])){
    if(jelszoEgyezik($_POST['username'], $_POST['password'])){
        $_SESSION['username'] = $_POST['username'];
        header('Location: index.php');
    }else{
        header('Location: index.php?hiba=rossz');
    }
}else{
    header('Location: index.php?hiba=rossz');
}