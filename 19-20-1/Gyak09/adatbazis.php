<?php

function letezik($f_nev){
    return isset(json_decode(file_get_contents("felhasznalok.json"))->felhasznalok->$f_nev);
}

function jelszo($f_nev, $jelszo){
    return password_verify($jelszo, json_decode(file_get_contents("felhasznalok.json"))->felhasznalok->$f_nev->jelszo);
}

function felhasznalo($f_nev){
    $tmp = json_decode(file_get_contents("felhasznalok.json"))->felhasznalok;
    if(isset($tmp->$f_nev)){
        return $tmp->$f_nev->adatok;
    }else{
        return NULL;
    }
}

function regisztral($f_nev, $jelszo){
    $data = json_decode(file_get_contents("felhasznalok.json"));
    $data->felhasznalok->$f_nev = (object)[
        "jelszo" => password_hash($jelszo, PASSWORD_DEFAULT),
        "adatok" => (object)[
            "leiras" => "Lorem ipsum...",
            "profilkep" => "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"
        ]
    ];
    file_put_contents("felhasznalok.json", json_encode($data, JSON_PRETTY_PRINT));
    return $data->felhasznalok->$f_nev->adatok;
}

function adatok($f_nev){
    return json_decode(file_get_contents("felhasznalok.json"))->felhasznalok->$f_nev->adatok;
}

?>