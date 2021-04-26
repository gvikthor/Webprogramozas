<?php
require_once('fuggvenyek.php');

if(jelszoHelyes($_POST["fnev"], $_POST["pw"])){
    session_start();
    $_SESSION["nev"] = $_POST["fnev"];
}

atiranyit("index.php");