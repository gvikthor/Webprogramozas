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

function hozaad($uname, $pw, $leiras){
    $user = (object)[
        "jelszo" => password_hash($pw, PASSWORD_DEFAULT),
        "leiras" => $leiras,
        "liked" => [],
        "disliked" => []
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

////////////////////////////////////////////////////
function dalLetezik($cim){
    return isset(json_decode(file_get_contents("adatok.json"))->dalok->$cim);
}

function dalok(){
    return json_decode(file_get_contents("adatok.json"))->dalok;
}

function ujdal($cim, $film, $enekes, $felhasznalo){
    if(!dalLetezik($cim)){
        $dal = (object)[
            "cim" => $cim,
            "film" => $film,
            "enekes" => $enekes,
            "felhasznalo" => $felhasznalo,
            "liked" => [],
            "disliked" => []
        ];
        $json = json_decode(file_get_contents("adatok.json"));
        $json->dalok->$cim = $dal;
        file_put_contents('adatok.json',json_encode($json,JSON_PRETTY_PRINT));
    }
}

function like($felhasznalo, $cim){
    if(!liked($felhasznalo, $cim)){
        $json = json_decode(file_get_contents("adatok.json"));
        $json->felhasznalok->$felhasznalo->liked[] = $cim;
        $json->dalok->$cim->liked[] = $felhasznalo;
        file_put_contents('adatok.json',json_encode($json,JSON_PRETTY_PRINT));
    }else{
        removeLike($felhasznalo, $cim);
    }
}

function liked($felhasznalo, $cim){
    return in_array($cim, json_decode(file_get_contents("adatok.json"))->felhasznalok->$felhasznalo->liked);
}

function removeLike($felhasznalo, $cim){
    $json = json_decode(file_get_contents("adatok.json"));
    $ujLiked = [];
    $ujLiked2 = [];
    foreach($json->felhasznalok->$felhasznalo->liked as $dal){
        if($dal != $cim){
            $ujLiked[] = $dal;
        }
    }
    foreach($json->dalok->$cim->liked as $user){
        if($felhasznalo != $user){
            $ujLiked2[] = $user;
        }
    }
    $json->felhasznalok->$felhasznalo->liked = $ujLiked;
    $json->dalok->$cim->liked = $ujLiked2;
    file_put_contents('adatok.json',json_encode($json,JSON_PRETTY_PRINT));
}

function dislike($felhasznalo, $cim){
    if(!disliked($felhasznalo, $cim)){
        $json = json_decode(file_get_contents("adatok.json"));
        $json->felhasznalok->$felhasznalo->disliked[] = $cim;
        $json->dalok->$cim->disliked[] = $felhasznalo;
        file_put_contents('adatok.json',json_encode($json,JSON_PRETTY_PRINT));
    }else{
        removeDislike($felhasznalo, $cim);
    }
}

function disliked($felhasznalo, $cim){
    return in_array($cim, json_decode(file_get_contents("adatok.json"))->felhasznalok->$felhasznalo->disliked);
}

function removeDislike($felhasznalo, $cim){
    $json = json_decode(file_get_contents("adatok.json"));
    $ujDisliked = [];
    $ujDisliked2 = [];
    foreach($json->felhasznalok->$felhasznalo->disliked as $dal){
        if($dal != $cim){
            $ujDisliked[] = $dal;
        }
    }
    foreach($json->dalok->$cim->disliked as $user){
        if($felhasznalo != $user){
            $ujDisliked2[] = $user;
        }
    }
    $json->felhasznalok->$felhasznalo->disliked = $ujDisliked;
    $json->dalok->$cim->disliked = $ujDisliked2;
    file_put_contents('adatok.json',json_encode($json,JSON_PRETTY_PRINT));
}

function dalLiked($cim){
    return count(json_decode(file_get_contents("adatok.json"))->dalok->$cim->liked);
}
function dalDisliked($cim){
    return count(json_decode(file_get_contents("adatok.json"))->dalok->$cim->disliked);
}

?>