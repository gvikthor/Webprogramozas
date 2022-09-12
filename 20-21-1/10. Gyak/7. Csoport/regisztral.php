<?php
function hiba($hibakod){
    header('Location: index.php?hiba=' . $hibakod);
    die;
}

require_once('adatkezeles.php');
session_start();

$fn = trim($_POST['fnev']);
$j1 = trim($_POST['jszo1']);
$j2 = trim($_POST['jszo2']);

if(felhasznaloLetezik($fn)) hiba('fletezik');

if(strlen($fn) < 5 || strlen($fn) > 15) hiba('fhossz');

if( !preg_match('/^[a-zöüóőúéáűíA-ZÖÜÓŐÚÉÁŰÍ0-9]*$/', $fn) ) hiba('fkomplex');

if($j1 != $j2) hiba('jszokul');

if(strlen($j1) < 8) hiba('jhossz');

if(
    !preg_match('/[a-z]/', $j1) ||
    !preg_match('/[A-Z]/', $j1) ||
    !preg_match('/[0-9]/', $j1) ||
    !preg_match('/[\.\-\,\?\!\+]/', $j1)
) hiba('jkomplex');


regisztral($fn, $j1);
$_SESSION['fnev'] = $fn;
header('Location: index.php');


/*
if(!felhasznaloLetezik($fn)){
    if(strlen($fn) >= 5 && strlen($fn) <= 15){
        if( preg_match('/^[a-zöüóőúéáűíA-ZÖÜÓŐÚÉÁŰÍ0-9]*$/', $fn) ){
            if($j1 == $j2){
                if(strlen($j1) >= 8){
                    if(
                        preg_match('/[a-z]/', $j1) &&
                        preg_match('/[A-Z]/', $j1) &&
                        preg_match('/[0-9]/', $j1) &&
                        preg_match('/[\.\-\,\?\!\+]/', $j1)
                    ){
                        regisztral($fn, $j1);
                        $_SESSION['fnev'] = $fn;
                        header('Location: index.php');
                    }else{
                        hiba('jkomplex');
                    }
                }else{
                    hiba('jhossz');
                }
            }else{
                hiba('jszokul');
            }
        }else{
            hiba('fkomplex');
        }
    }else{
        hiba('fhossz');
    }
}else{
    hiba('fletezik');
}
*/