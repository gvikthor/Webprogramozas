<?php

$hiba = false;
$hibaSzoveg = '';

if(!isset($_GET['nev']) || trim($_GET['nev']) == ''){
    $hiba = true;
    $hibaSzoveg .= 'nevUres,';
}

if(!isset($_GET['kor']) || trim($_GET['kor']) == ''){
    $hiba = true;
    $hibaSzoveg .= 'korUres,';
}else if(!is_numeric($_GET['kor'])){
    $hiba = true;
    $hibaSzoveg .= 'korNemSzam,';
}else if(intval($_GET['kor']) < 18 || intval($_GET['kor']) > 100){
    $hiba = true;
    $hibaSzoveg .= 'korIntervallum,';
}

if(!isset($_GET['nem']) || trim($_GET['nem']) == ''){
    $hiba = true;
    $hibaSzoveg .= 'nemUres,';
}else if($_GET['nem'] != 'ffi' && $_GET['nem'] != 'no'){
    $hiba = true;
    $hibaSzoveg .= 'nemNem,';
}

if($hiba){
    echo $hibaSzoveg; //nevUres,korNemSzam,nemUres, --> ['nevUres','korNemSzam','nemUres','']
}else{
    echo "NINCSHIBA";
    //adatbázisozás idk
    //...
    //...
}