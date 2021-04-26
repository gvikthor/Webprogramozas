<?php
require_once('fuggvenyek.php');

session_start();

if(felhasznaloHelyes($_POST["fnev"], $_POST["pw"])){
    $_SESSION["nev"] = $_POST["fnev"];
}

atiranyit('index');