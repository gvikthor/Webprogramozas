<?php
require_once('fuggvenyek.php');

$adatok = jsonBeolvas('adatok.json');
$adatok[] = (object)[
    "nev" => $_GET["nev"],
    "faj" => $_GET["faj"],
    "suly" => $_GET["suly"]
];
jsonKiir('adatok.json', $adatok);

atiranyit('index');