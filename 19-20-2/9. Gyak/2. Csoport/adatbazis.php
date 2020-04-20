<?php

function felhasznaloLetezik($fnev){
    $felhasznalok = json_decode(file_get_contents("felhasznalok.json"))->felhasznalok;
    return isset($felhasznalok->$fnev);
}

function jelszoEgyezik($fnev, $jelszo){
    $felhasznalo = json_decode(file_get_contents("felhasznalok.json"))->felhasznalok->$fnev;
    return password_verify($jelszo, $felhasznalo->jelszo);
}

function regisztralFelhasznalo($fnev,$jelszo){
    $adatok = json_decode(file_get_contents("felhasznalok.json"));
    $adatok->felhasznalok->$fnev = (object)[
        "jelszo" => password_hash($jelszo, PASSWORD_DEFAULT)
    ];
    file_put_contents("felhasznalok.json",json_encode($adatok,JSON_PRETTY_PRINT));
}