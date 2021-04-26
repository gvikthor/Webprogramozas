<?php

/////////////JSON FILEKEZELÉS///////////////
function jsonBeolvas($filenev){
    return json_decode(file_get_contents($filenev));
}

function jsonKiir($filenev, $adat){
    file_put_contents($filenev, json_encode($adat, JSON_PRETTY_PRINT));
}

/////////////AUTENTIKÁCIÓ///////////////
function felhasznaloLetezik($fnev){
    $tomb = jsonBeolvas("felhasznalok.json");

    $volt = false;
    for($index = 0; $index < count($tomb) && !$volt; $index++){
        $volt = $tomb[$index]->fnev == $fnev;
    }

    return $volt;
}

function regisztral($fnev, $pw){
    $tomb = jsonBeolvas("felhasznalok.json");
    $tomb[] = (object)[
        "fnev" => $fnev,
        "pw" => password_hash($pw, PASSWORD_DEFAULT)
    ];
    jsonKiir("felhasznalok.json",$tomb);
}

function felhasznaloHelyes($fnev, $pw){
    $tomb = jsonBeolvas("felhasznalok.json");

    $volt = false;
    $index = 0;
    while($index < count($tomb) && !$volt){
        $volt = $tomb[$index]->fnev == $fnev;
        $index++;
    }

    if($volt){
        $volt = password_verify($pw, $tomb[$index-1]->pw);
    }

    return $volt;
}

/////////////EGYÉB///////////////
function atiranyit($oldal){
    header('Location: ' .$oldal.'.php');
    die;
}