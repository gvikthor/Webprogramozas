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

function filmek(){
    return json_decode(file_get_contents('filmek.json'));
}

function tetszik($id, $fnev){
    $filmek = filmek();
    if(!isset($filmek->$id)) return;
    if(!felhasznaloLetezik($fnev)) return;

    if(in_array($fnev, $filmek->$id->tetszikelesek)){
        $ujtetszik = [];
        foreach($filmek->$id->tetszikelesek as $tetszoFelhasznalo){
            if($tetszoFelhasznalo != $fnev) $ujtetszik[] = $tetszoFelhasznalo;
        }
        $filmek->$id->tetszikelesek = $ujtetszik;
    }else{
        if(in_array($fnev, $filmek->$id->nemtetszikelesek)){
            $ujnemtetszik = [];
            foreach($filmek->$id->nemtetszikelesek as $tetszoFelhasznalo){
                if($tetszoFelhasznalo != $fnev) $ujnemtetszik[] = $tetszoFelhasznalo;
            }
            $filmek->$id->nemtetszikelesek = $ujnemtetszik;
        }
        $filmek->$id->tetszikelesek[] = $fnev;
    }

    file_put_contents('filmek.json', json_encode($filmek, JSON_PRETTY_PRINT));
}

function nemtetszik($id, $fnev){
    $filmek = filmek();
    if(!isset($filmek->$id)) return;
    if(!felhasznaloLetezik($fnev)) return;

    if(in_array($fnev, $filmek->$id->nemtetszikelesek)){
        $ujnemtetszik = [];
        foreach($filmek->$id->nemtetszikelesek as $tetszoFelhasznalo){
            if($tetszoFelhasznalo != $fnev) $ujnemtetszik[] = $tetszoFelhasznalo;
        }
        $filmek->$id->nemtetszikelesek = $ujnemtetszik;
    }else{
        if(in_array($fnev, $filmek->$id->tetszikelesek)){
            $ujtetszik = [];
            foreach($filmek->$id->tetszikelesek as $tetszoFelhasznalo){
                if($tetszoFelhasznalo != $fnev) $ujtetszik[] = $tetszoFelhasznalo;
            }
            $filmek->$id->tetszikelesek = $ujtetszik;
        }
        $filmek->$id->nemtetszikelesek[] = $fnev;
    }

    file_put_contents('filmek.json', json_encode($filmek, JSON_PRETTY_PRINT));
}

function ujFilm($cim, $megjelenes, $fnev){
    $filmek = filmek();
    $elso = true;
    $maxid;
    foreach($filmek as $id => $film){
        if($elso){
            $elso = false;
            $maxid = $id;
        }else if($id > $maxid){
            $maxid = $id;
        }
    }

    $maxid++;

    $filmek->$maxid = (object)[
        "id" => $maxid,
        "cim" => $cim,
        "megjelenes" => $megjelenes,
        "tetszikelesek" => [],
        "nemtetszikelesek" => [],
        "fnev" => $fnev
    ];
    file_put_contents('filmek.json', json_encode($filmek, JSON_PRETTY_PRINT));
}

function torolFilm($id, $fnev){
    $filmek = filmek();
    $szurtFilmek = (object)[];
    foreach($filmek as $film){
        if(!($film->id == $id && $film->fnev == $fnev)){
            $i = $film->id;
            $szurtFilmek->$i = $film;
        }
    }
    file_put_contents('filmek.json', json_encode($szurtFilmek, JSON_PRETTY_PRINT));
}