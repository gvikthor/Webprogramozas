<?php

function json_beolvas($filenev, $kiterjesztes = 'json', $mappa = 'adatok'){
    return json_decode(file_get_contents("$mappa/$filenev.$kiterjesztes"));
}

function json_kiir($filenev, $adat, $kiterjesztes = 'json', $mappa = 'adatok'){
    file_put_contents("$mappa/$filenev.$kiterjesztes", json_encode($adat, JSON_PRETTY_PRINT));
}

function atiranyit($cel) {
    header("Location: $cel");
    die;
}

function munkamenet_valtozo($valtozonev, $alapertek = []) {
    $eredmeny = $_SESSION[$valtozonev] ?? $alapertek;
    $_SESSION[$valtozonev] = $alapertek;
    return $eredmeny;
}