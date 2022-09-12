<?php
require_once "functions.php";

$legok = jsonBeolvas('lego.json');
$id = $_GET["id"];
$uj_cimkek = [];
$volt_torles = false;
foreach($legok->$id->cimkek as $cimke){
    if($cimke != $_GET["cimke"]){
        $uj_cimkek[] = $cimke;
    }else{
        $volt_torles = true;
    }
}

if($volt_torles){
    $legok->$id->cimkek = $uj_cimkek;
    jsonKiir('lego.json', $legok);
}

atiranyit('index');