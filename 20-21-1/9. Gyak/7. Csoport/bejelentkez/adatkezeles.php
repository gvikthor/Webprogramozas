<?php

function felhasznaloLetezik($fnev){
    $adat = json_decode(file_get_contents('felhasznalok.json'));
    return isset($adat->$fnev);
}

function helyesAdatok($fnev, $jszo){
    $adat = json_decode(file_get_contents('felhasznalok.json'));
    return password_verify($jszo, $adat->$fnev->jszo);
}

function regisztral($fnev, $jszo){
    $adat = json_decode(file_get_contents('felhasznalok.json'));
    $adat->$fnev = (object)[
        "fnev" => $fnev,
        "jszo" => password_hash($jszo, PASSWORD_DEFAULT)
    ];
    file_put_contents('felhasznalok.json', json_encode($adat, JSON_PRETTY_PRINT));
}