<?php

function letezik($uname){
    return isset(json_decode(file_get_contents("adatok.json"))->felhasznalok->$uname);
} 

function jelszo($uname, $pw){
    return password_verify($pw, json_decode(file_get_contents("adatok.json"))->felhasznalok->$uname->jelszo);
}

function leiras($uname){
    return json_decode(file_get_contents("adatok.json"))->felhasznalok->$uname->leiras;
}
/* "; DROP TABLE users; */
function hozaad($uname, $pw, $leiras){
    $user = (object)[
        "jelszo" => password_hash($pw, PASSWORD_DEFAULT),
        "leiras" => $leiras
    ];
    $json = json_decode(file_get_contents("adatok.json"));
    $json->felhasznalok->$uname = $user;
    file_put_contents('adatok.json',json_encode($json,JSON_PRETTY_PRINT));
}

function frissit($uname, $leiras){
    $json = json_decode(file_get_contents("adatok.json"));
    $json->felhasznalok->$uname->leiras = $leiras;
    file_put_contents('adatok.json',json_encode($json,JSON_PRETTY_PRINT));
}

?>