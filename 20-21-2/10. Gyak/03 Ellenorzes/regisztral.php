<?php
require_once('fuggvenyek.php');

session_start();
$hibak = [];

if(!letezikPost('fnev')){
    $hibak[] = 'A felhasználónév nem lehet üres!';
}else if(felhasznaloLetezik($_POST["fnev"])){
    $hibak[] = 'A felhasználónév már foglalt.';
}

if($_POST["pw1"] != $_POST["pw2"]){
    $hibak[] = 'A jelszavak nem egyeznek!';
}else if(!jelszoKomplex($_POST['pw1'])){
    $hibak[] = 'A jelszó nem elég komplex!';
}

if(count($hibak) == 0){
    regisztral($_POST["fnev"], $_POST["pw1"]);
    $_SESSION["nev"] = $_POST["fnev"];
    atiranyit('index');
}else{
    $_SESSION["hibak"] = $hibak;
    atiranyit('autentikacio');
}