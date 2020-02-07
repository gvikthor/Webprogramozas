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

function hozaad($uname, $pw, $szam, $lejarat, $nev, $cv){
    $user = (object)[
        "jelszo" => password_hash($pw, PASSWORD_DEFAULT),
        "kartya" => (object)[
            "nev" => $nev,
            "szam" => $szam,
            "cv" => $cv,
            "lejarat" => $lejarat
        ]
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

function kepek(){
    return json_decode(file_get_contents("adatok.json"))->kepek;
}
function ukepek($uname){
    $kepek = json_decode(file_get_contents("adatok.json"))->kepek;
    $retval = [];
    foreach($kepek as $kep){
        if($kep->tulajdonos == $uname){
            $retval[] = $kep;
        }
    }
    return $retval;
}
function ulikes($uname){
    return json_decode(file_get_contents("adatok.json"))->felhasznalok->$uname->liked;
}
function tkepek($tag){
    $kepek = json_decode(file_get_contents("adatok.json"))->kepek;
    $retval = [];
    foreach($kepek as $kep){
        if(in_array($tag, $kep->tags)){
            $retval[] = $kep;
        }
    }
    return $retval;
}
function kepfeltolt($uname, $tags = [], $url){
    $json = json_decode(file_get_contents("adatok.json"));
    $json->kepek[] = (object)[
        "src" => $url,
        "tulajdonos" => $uname,
        "tags" => $tags,
        "id" => count($json->kepek)
    ];
    file_put_contents('adatok.json',json_encode($json,JSON_PRETTY_PRINT));
}

function like($uname, $id){
    $json = json_decode(file_get_contents("adatok.json"));
    if(in_array($id, $json->felhasznalok->$uname->liked)){
        unset($json->felhasznalok->$uname->liked[array_search($id, $json->felhasznalok->$uname->liked)]);
    }else{
        array_push($json->felhasznalok->$uname->liked, $id);
    }
    file_put_contents('adatok.json',json_encode($json,JSON_PRETTY_PRINT));
}

?>