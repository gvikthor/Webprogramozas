<?php
require_once "fuggvenyek.php";

$adatok = jsonBeolvas("adatok.json");

if(
    letezik("ev") && is_numeric($_GET["ev"]) &&
    intval($_GET["ev"]) == floatval($_GET["ev"]) && intval($_GET["ev"]) > 2000 &&
    letezik("honap") && letezik("megjegyzes")
){
    $adatok[] = (object)[
        "ev" => $_GET["ev"],
        "honap" => $_GET["honap"],
        "megjegyzes" => $_GET["megjegyzes"],
        "kibertamadas" => isset($_GET["kibertamadas"])
    ];
    //var_dump($adatok);
    jsonKiir("adatok.json", $adatok);
}

atiranyit("delelott");