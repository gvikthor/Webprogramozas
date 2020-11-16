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

function filmek(){
    $filmek = json_decode(file_get_contents('filmek.json'));
    return $filmek;
}

function film($id){
    $filmek = filmek();
    if(isset($filmek->$id)){
        return $filmek->$id;
    }else{
        return (object)[];
    }
}

function like($id, $uname){
    $filmek = json_decode(file_get_contents('filmek.json'));
    if(!isset($filmek->$id)) return;

    if(in_array($uname, $filmek->$id->likes)){
        $ujlikeok = [];
        foreach($filmek->$id->likes as $likeolo){
            if($likeolo != $uname) $ujlikeok[] = $likeolo;
        }
        $filmek->$id->likes = $ujlikeok;
    }else{
        if(in_array($uname, $filmek->$id->dislikes)){
            $ujdislikeok = [];
            foreach($filmek->$id->dislikes as $likeolo){
                if($likeolo != $uname) $ujdislikeok[] = $likeolo;
            }
            $filmek->$id->dislikes = $ujdislikeok;
        }
        $filmek->$id->likes[] = $uname;
    }
    file_put_contents('filmek.json', json_encode($filmek, JSON_PRETTY_PRINT));
}

function dislike($id, $uname){
    $filmek = json_decode(file_get_contents('filmek.json'));
    if(!isset($filmek->$id)) return;

    if(in_array($uname, $filmek->$id->dislikes)){
        $ujdislikeok = [];
        foreach($filmek->$id->dislikes as $likeolo){
            if($likeolo != $uname) $ujdislikeok[] = $likeolo;
        }
        $filmek->$id->dislikes = $ujdislikeok;
    }else{
        if(in_array($uname, $filmek->$id->likes)){
            $ujlikeok = [];
            foreach($filmek->$id->likes as $likeolo){
                if($likeolo != $uname) $ujlikeok[] = $likeolo;
            }
            $filmek->$id->likes = $ujlikeok;
        }
        $filmek->$id->dislikes[] = $uname;
    }
    file_put_contents('filmek.json', json_encode($filmek, JSON_PRETTY_PRINT));
}

function ujFilm($cim, $ev, $uname){
    $filmek = json_decode(file_get_contents('filmek.json'));
    $max;
    $volt = false;
    foreach($filmek as $film){
        if(!$volt){
            $volt = true;
            $max = $film->id;
        }else if($max < $film->id){
            $max = $film->id;
        }
    }
    $max++;
    $filmek->$max = (object)[
        "id" => $max,
        "cim" => $cim,
        "megjelenes" => $ev,
        "likes" => [],
        "dislikes" => [],
        "hozzaadta" => $uname
    ];
    file_put_contents('filmek.json', json_encode($filmek, JSON_PRETTY_PRINT));
}

function torolFilm($id){
    $filmek = json_decode(file_get_contents('filmek.json'));
    $ujfilmek = (object)[];
    foreach($filmek as $fid => $film){
        if($fid != $id){
            $ujfilmek->$fid = $film;
        }
    }
    file_put_contents('filmek.json', json_encode($ujfilmek, JSON_PRETTY_PRINT));
}