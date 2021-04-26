<?php
require_once('fuggvenyek.php');

if(!isset($_POST["fnev"]) || !isset($_POST["pw1"]) || !isset($_POST["pw2"])){
    atiranyit("index.php?hiba=hianyos");
}

$fnev = trim($_POST["fnev"]);
$pw1 = $_POST["pw1"];
$pw2 = $_POST["pw2"];

if(trim($fnev) == "" || trim($pw1 == "") || trim($pw2) == ""){
    atiranyit("index.php?hiba=ures");
}

if(felhasznaloLetezik($fnev)){
    atiranyit("index.php?hiba=foglalt");
}

if($pw1 != $pw2){
    atiranyit("index.php?hiba=nemegyezik");
}

session_start();
regisztral($fnev, $pw1);
$_SESSION["nev"] = $fnev;

atiranyit("index.php");