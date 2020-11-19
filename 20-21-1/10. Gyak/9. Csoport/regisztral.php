<?php

require_once('adatkezeles.php');

function hiba($hibakod){
    header('Location: index.php?hiba=' . $hibakod);
    die;
}

session_start();

$fnev = trim($_POST['fnev']);
$jszo1 = trim($_POST['jszo1']);
$jszo2 = trim($_POST['jszo2']);

if(felhasznaloLetezik($fnev)) hiba('letezik');

if(strlen($fnev) < 5 || strlen($fnev) > 15) hiba('fhossz');

if(!preg_match("/^[a-zöüóőúéáűíA-ZÖÜÓŐÚÉÁŰÍ0-9]*$/", $fnev)) hiba('fkomplex');

if($jszo1 != $jszo2) hiba('egyezes');

if(strlen($jszo1) < 8) hiba('jhossz');

if(
    !preg_match("/[a-zöüóőúéáűíä]/", $jszo1) ||
    !preg_match("/[A-ZÖÜÓŐÚÉÁŰÍÄ]/", $jszo2) ||
    !preg_match("/[0-9]/", $jszo1) ||
    !preg_match("/[\,\.\-]/", $jszo1)
) hiba('jkomplex');
        

regisztral($fnev, $jszo1);
$_SESSION['fnev'] = $fnev;
header('Location: index.php');