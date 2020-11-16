<?php

function hiba($hibakod){
    header('Location: index.php?hiba=' . $hibakod);
    die;
}

session_start();
require_once('adatkezeles.php');

$un = trim($_POST['username']);
$p1 = trim($_POST['password1']);
$p2 = trim($_POST['password2']);

if(felhasznaloLetezik($un)) hiba('letezik');

if(strlen($un) < 5 || strlen($un) > 15) hiba('hossz');

if(!preg_match("/^[a-zöüóőúéáűíA-ZÖÜÓŐÚÉÁŰÍ]*$/", $un)) hiba('karakter');

if($p1 != $p2) hiba('egyezes');

if(strlen($p1) < 8) hiba('jhossz');

if(
    !preg_match("/[a-z]/", $p1) ||
    !preg_match("/[A-Z]/", $p1) ||
    !preg_match("/[0-9]/", $p1) ||
    !preg_match("/[\-\,\.]/", $p1)
) hiba('komplex');


regisztral($un, $p1);
$_SESSION['username'] = $un;
header('Location: index.php');