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

function karakterek(){
    $adat = json_decode(file_get_contents('adatok_karakterek.json'));
    return $adat;
}

function ujKarakter($nev, $elofordulasok){
    $adat = karakterek();
    $i = 0;
    foreach($adat as $a){ $i++; }

    $adat->$i = (object)[
        "id" => $i,
        "nev" => $nev,
        "elofordulas" => $elofordulasok,
        "like" => [],
        "dislike" => []
    ];

    file_put_contents('adatok_karakterek.json', json_encode($adat, JSON_PRETTY_PRINT));
}

function likeok($id){
    $adat = karakterek();
    if(isset($adat->$id)){
        return $adat->$id->like;
    }else{
        return [];
    }
}

function tetszike($id, $fnev){
    return in_array($fnev, likeok($id));
}

function dislikeok($id){
    $adat = karakterek();
    if(isset($adat->$id)){
        return $adat->$id->dislike;
    }else{
        return [];
    }
}

function nemtetszike($id, $fnev){
    return in_array($fnev, dislikeok($id));
}

function belikeol($id, $fnev){
    kidislikeol($id, $fnev);
    $adat = karakterek();

    if(!isset($adat->$id)) return;

    if(in_array($fnev, $adat->$id->like)){
        kilikeol($id, $fnev);
        return;
    }

    $adat->$id->like[] = $fnev;
    file_put_contents('adatok_karakterek.json', json_encode($adat, JSON_PRETTY_PRINT));
}

function kilikeol($id, $fnev){
    $adat = karakterek();

    if(!isset($adat->$id)) return;

    $kivalogatva = [];
    foreach($adat->$id->like as $kedvelo){
        if($kedvelo != $fnev){
            $kivalogatva[] = $kedvelo;
        }
    }

    $adat->$id->like = $kivalogatva;
    file_put_contents('adatok_karakterek.json', json_encode($adat, JSON_PRETTY_PRINT));
}

function bedislikeol($id, $fnev){
    kilikeol($id, $fnev);
    $adat = karakterek();

    if(!isset($adat->$id)) return;

    if(in_array($fnev, $adat->$id->dislike)){
        kidislikeol($id, $fnev);
        return;
    }

    $adat->$id->dislike[] = $fnev;
    file_put_contents('adatok_karakterek.json', json_encode($adat, JSON_PRETTY_PRINT));
}

function kidislikeol($id, $fnev){
    $adat = karakterek();

    if(!isset($adat->$id)) return;

    $kivalogatva = [];
    foreach($adat->$id->dislike as $nemkedvelo){
        if($nemkedvelo != $fnev){
            $kivalogatva[] = $nemkedvelo;
        }
    }

    $adat->$id->dislike = $kivalogatva;
    file_put_contents('adatok_karakterek.json', json_encode($adat, JSON_PRETTY_PRINT));
}