<?php

$hiba = false;
if(!isset($_GET['nev']) || trim($_GET['nev']) == ''){
    echo 'nevUres,';
    $hiba = true;
}

if(!isset($_GET['kor']) || trim($_GET['kor']) == ''){
    echo 'korUres,';
    $hiba = true;
}else if(!is_numeric($_GET['kor'])){
    echo 'korNemSzam,';
    $hiba = true;
}else if(intval($_GET['kor']) < 18 || intval($_GET['kor']) > 100){
    echo 'korIntervallum,';
    $hiba = true;
}

if(!isset($_GET['nem']) || trim($_GET['nem']) == ''){
    echo 'nemUres,';
    $hiba = true;
}else if($_GET['nem'] != 'ffi' && $_GET['nem'] != 'no'){
    echo 'nemErtek,';
    $hiba = true;
}

if(!$hiba){
    echo 'NINCSHIBA';
    //adatbázisba írás
}

//nevUres,korIntervallum,nemErtek,