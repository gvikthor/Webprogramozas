<?php

function hiba($hibakod){
    header('Location: index.php?hiba=' . $hibakod);
}

session_start();
require_once('adatkezeles.php');

$un = trim($_POST['username']);
$p1 = trim($_POST['password1']);
$p2 = trim($_POST['password2']);

if(!felhasznaloLetezik($un)){
    if(strlen($un) >= 5 && strlen($un) <= 10){
        if(preg_match("/^[a-zöüóőúéáűíA-ZÖÜÓŐÚÉÁŰÍ]*$/", $un)){
            if($p1 == $p2){
                if(strlen($p1) >= 8){
                    if(
                        preg_match("/[a-z]/", $p1) &&
                        preg_match("/[A-Z]/", $p1) &&
                        preg_match("/[0-9]/", $p1) &&
                        preg_match("/[\-\,\.]/", $p1)
                    ){
                        regisztral($un, $p1);
                        $_SESSION['username'] = $un;
                        header('Location: index.php');
                    }else{
                        hiba('komplex');
                    }
                }else{
                    hiba('jhossz');
                }
            }else{
                hiba('egyezes');
            }
        }else{
            hiba('karakter');
        }
    }else{
        hiba('hossz');
    }
}else{
    hiba('letezik');
}