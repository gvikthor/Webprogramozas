<?php
session_start();
require_once("adatbazis.php");

$felhnev = $_POST["felhasznalonev"];
$jelszo1 = $_POST["jelszo1"];
$jelszo2 = $_POST["jelszo2"];

if(!felhasznaloLetezik($felhnev)){
    if(strlen($felhnev) >= 5 && strlen($felhnev) <= 15){
        if(preg_match("/^[a-zA-Z0-9öÖüÜóÓőŐúÚéÉáÁűŰíÍäÄëË]*$/", $felhnev)){ 
            if($jelszo1 == $jelszo2){
                if(strlen($jelszo1) >= 8 && strlen($jelszo1) <= 30){
                    if(
                        preg_match("/[a-z]/",$jelszo1) &&
                        preg_match("/[A-Z]/",$jelszo1) &&
                        preg_match("/[0-9]/",$jelszo1) &&
                        preg_match("/[\.\-\,]/",$jelszo1)
                    ){
                        regisztralFelhasznalo($felhnev,$jelszo1);
                        $_SESSION["felhasznalonev"] = $felhnev;
                        header("Location: index.php");
                        exit();
                    }else{
                        header("Location: index.php?hiba=jkomplex");
                        exit();
                    }
                }else{
                    header("Location: index.php?hiba=jhossz");
                    exit();
                }
            }else{
                header("Location: index.php?hiba=nemegyezik");
                exit();
            }
        }else{
            header("Location: index.php?hiba=frosszkarakter");
            exit();
        }
    }else{
        header("Location: index.php?hiba=fhossz");
        exit();
    }
}else{
    header("Location: index.php?hiba=letezik");
    exit();
}