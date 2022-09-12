<?php
require_once('fuggvenyek.php');

session_start();

if(!felhasznaloLetezik($_POST["fnev"]) && $_POST["pw1"] == $_POST["pw2"]){
    regisztral($_POST["fnev"], $_POST["pw1"]);
    $_SESSION["nev"] = $_POST["fnev"];
}

atiranyit('index');