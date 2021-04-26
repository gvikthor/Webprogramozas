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

////////////////// EGYÉB //////////////////

function atiranyit($oldal){
    header("Location: " . $oldal . ".php");
    die;
}