<?php
require_once "functions.php";

$legok = jsonBeolvas('lego.json');
$id = $_GET["id"];
$volt = false;
for($i = 0; $i < count($legok->$id->cimkek) && !$volt; $i++){
    $volt = $legok->$id->cimkek[$i] == $_GET["cimke"];
}

if(!$volt){
    $legok->$id->cimkek[] = $_GET["cimke"];
}

jsonKiir('lego.json', $legok);
atiranyit('index');
