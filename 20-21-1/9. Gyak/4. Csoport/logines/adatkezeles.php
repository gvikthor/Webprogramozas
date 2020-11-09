<?php

function felhasznaloLetezik($username){
    $adat = json_decode(file_get_contents('felhasznalok.json'));
    return isset($adat->$username);
}

function jelszoEgyezik($username, $password){
    $felhasznalo = json_decode(file_get_contents('felhasznalok.json'))->$username;
    return password_verify($password, $felhasznalo->jelszo);
}

function regisztral($username, $password){
    $adatok = json_decode(file_get_contents('felhasznalok.json'));
    $adatok->$username = (object)[
        "username" => $username,
        "jelszo" => password_hash($password, PASSWORD_DEFAULT)
    ];
    file_put_contents('felhasznalok.json', json_encode($adatok, JSON_PRETTY_PRINT));
}