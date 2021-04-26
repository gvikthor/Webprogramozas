<?php

////////////////// FILEKEZELÉS //////////////////

function jsonBeolvas($filenev){
    return json_decode(file_get_contents($filenev));
}

function jsonKiir($filenev, $adat){
    file_put_contents($filenev, json_encode($adat, JSON_PRETTY_PRINT));
}

function jsonUjelem($filenev, $ujelem){
    $adat = jsonBeolvas($filenev);
    $adat[] = $ujelem;
    jsonKiir($filenev, $adat);
}

////////////////// AUTENTIKÁCIÓ //////////////////

function felhasznaloLetezik($fnev){
    $adat = jsonBeolvas("felhasznalok.json");

    $volt = false;
    for($i = 0; $i < count($adat) && !$volt; $i++){
        if($adat[$i]->fnev == $fnev){
            $volt = true;
        }
    }

    return $volt;
}

function regisztral($fnev, $pw){
    jsonUjelem("felhasznalok.json", (object)[
        "fnev" => $fnev,
        //"pw" => $pw
        "pw" => password_hash($pw, PASSWORD_DEFAULT)
    ]);
}

function jelszoHelyes($fnev, $pw){
    $adat = jsonBeolvas("felhasznalok.json");

    $volt = false;
    $helyes = false;
    for($i = 0; $i < count($adat) && !$volt; $i++){
        if($adat[$i]->fnev == $fnev){
            $volt = true;
            //$helyes = $adat[$i]->pw == $pw;
            $helyes = password_verify($pw, $adat[$i]->pw);
        }
    }

    return $helyes;
}

////////////////// EGYÉB //////////////////

function atiranyit($oldal){
    header("Location: " . $oldal);
    die;
}