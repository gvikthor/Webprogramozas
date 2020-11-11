<?php

function felhasznaloLetezik($fnev){
    return isset( json_decode(file_get_contents('felhasznalok.json'))->$fnev );
}

function jelszoEgyezik($fnev, $jszo){
    return password_verify($jszo, json_decode(file_get_contents('felhasznalok.json'))->$fnev->jszo);
}

function regisztral($fnev, $jszo){
    $adatok = json_decode(file_get_contents('felhasznalok.json'));
    $adatok->$fnev = (object)[
        "fnev" => $fnev,
        "jszo" => password_hash($jszo, PASSWORD_DEFAULT)
    ];
    file_put_contents('felhasznalok.json', json_encode($adatok, JSON_PRETTY_PRINT));
}