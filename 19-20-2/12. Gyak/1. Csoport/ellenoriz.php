<?php

$hiba = false;
$hibaSzoveg = '';

if(!isset($_GET['nev']) || trim($_GET['nev']) == ''){
    $hiba = true;
    if($hibaSzoveg != ''){
        $hibaSzoveg .= ',';
    }
    $hibaSzoveg .= 'nevUres';
}

if(!isset($_GET['kor']) || trim($_GET['kor']) == ''){
    $hiba = true;
    if($hibaSzoveg != ''){
        $hibaSzoveg .= ',';
    }
    $hibaSzoveg .= 'korUres';
}else if(!is_numeric($_GET['kor'])){
    $hiba = true;
    if($hibaSzoveg != ''){
        $hibaSzoveg .= ',';
    }
    $hibaSzoveg .= 'korNemSzam';
}else if(intval($_GET['kor']) < 18 || intval($_GET['kor']) > 100){
    $hiba = true;
    if($hibaSzoveg != ''){
        $hibaSzoveg .= ',';
    }
    $hibaSzoveg .= 'korIntervallum';
}

if(!isset($_GET['nem']) || trim($_GET['nem']) == ''){
    $hiba = true;
    if($hibaSzoveg != ''){
        $hibaSzoveg .= ',';
    }
    $hibaSzoveg .= 'nemUres';
}else if($_GET['nem'] != 'f' && $_GET['nem'] != 'n'){
    $hiba = true;
    if($hibaSzoveg != ''){
        $hibaSzoveg .= ',';
    }
    $hibaSzoveg .= 'nemNem';
}

if($hiba){
    echo $hibaSzoveg; //nevUres,korNemSzam,nemUres
}else{
    echo 'NINCSHIBA';
    /*
    adatbázis
    ...
    ...
    */
}