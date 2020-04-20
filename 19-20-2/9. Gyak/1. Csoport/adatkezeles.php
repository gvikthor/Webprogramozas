<?php

function felhasznaloLetezik($fnev){
    $adat = json_decode(file_get_contents("adatok.json"));
    return isset($adat->felhasznalok->$fnev);
}

function jelszoHelyes($fnev, $jszo){
    $felhasznalo = json_decode(file_get_contents("adatok.json"))->felhasznalok->$fnev;
    return password_verify($jszo, $felhasznalo->jelszo);
}

function letrehoz($fnev, $jszo){
    $adat = json_decode(file_get_contents("adatok.json"));
    $adat->felhasznalok->$fnev = (object)[
        "jelszo" => password_hash($jszo, PASSWORD_DEFAULT)
    ];
    file_put_contents("adatok.json", json_encode($adat, JSON_PRETTY_PRINT));
}