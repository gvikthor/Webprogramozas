<?php
session_start();
require_once("adatkezeles.php");

$fnev = $_POST["fnev"];
$jszo1 = $_POST["jszo1"];
$jszo2 = $_POST["jszo2"];

if(!felhasznaloLetezik($fnev)){
    if(strlen($fnev) >= 5 && strlen($fnev) <= 15){
        if(preg_match("/^[a-zA-Z0-9öÖüÜóÓőŐúÚáÁéÉűŰíÍäÄëË]*$/",$fnev)){
            if($jszo1 == $jszo2){
                if(strlen($jszo1) >= 8 && strlen($jszo1) <= 30){
                    if(
                        preg_match("/[a-z]/",$jszo1) &&
                        preg_match("/[A-Z]/",$jszo1) &&
                        preg_match("/[0-9]/",$jszo1) &&
                        preg_match("/[\.\,\-]/",$jszo1)
                    ){
                        regisztral($fnev,$jszo1);
                        $_SESSION["fnev"] = $fnev;
                        header("Location: index.php");
                    }else{
                        header("Location: index.php?hiba=jkomplex");
                    }
                }else{
                    header("Location: index.php?hiba=jhossz");
                }
            }else{
                header("Location: index.php?hiba=jegyezes");
            }
        }else{
            header("Location: index.php?hiba=fkomplex");
        }
    }else{
        header("Location: index.php?hiba=fhossz");
    }
}else{
    header("Location: index.php?hiba=letezik");
}