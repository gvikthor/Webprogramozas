<?php

function felhasznaloLetezik($fnev){
    $adat = json_decode(file_get_contents("felhasznalok.json"));
    return isset($adat->felhasznalok->$fnev);
}

function jelszoEgyezik($fnev, $jszo){
    $adat = json_decode(file_get_contents("felhasznalok.json"))->felhasznalok->$fnev;
    return password_verify($jszo, $adat->jelszo);
}

function regisztral($fnev, $jszo){
    $adat = json_decode(file_get_contents("felhasznalok.json"));
    $adat->felhasznalok->$fnev = (object)[
        "jelszo" => password_hash($jszo, PASSWORD_DEFAULT)
    ];
    file_put_contents("felhasznalok.json",json_encode($adat,JSON_PRETTY_PRINT));
}