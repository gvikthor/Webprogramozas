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

function jelszoKomplex($jelszo){
    return (
        preg_match('/[a-z]/', $jelszo) == 1 &&
        preg_match('/[A-Z]/', $jelszo) == 1 &&
        preg_match('/[0-9]/', $jelszo) == 1 &&
        preg_match('/[*-+=%!\.,]/', $jelszo) == 1
    );
}

/////////////FILMEK///////////////
function user_tetszik($user, $filmid){
    $volt_user = false;
    $volt_film = false;
    $index_user = -1;

    $filmek = jsonBeolvas("filmek.json");

    //lineáris keresés az id-ra
    $index_film = 0;
    for($i = 0; $i < count($filmek) && !$volt_film; $i++){
        if($filmek[$i]->id == $filmid){
            $volt_film = true;
            $index_film = $i;
        }
    }

    if($volt_film){
        for($i = 0; $i < count($filmek[$index_film]->like) && !$volt_user; $i++){
            if($filmek[$index_film]->like[$i] == $user){
                $volt_user = true;
                $index_user = 0;
            }
        }
    }

    return (object)[
        "film" => $volt_film,
        "tetszik" => $volt_user,
        "index" => $index_user
    ];
}

function user_nemtetszik($user, $filmid){
    $volt_user = false;
    $volt_film = false;
    $index_user = -1;

    $filmek = jsonBeolvas("filmek.json");

    //lineáris keresés az id-ra
    $index_film = 0;
    for($i = 0; $i < count($filmek) && !$volt_film; $i++){
        if($filmek[$i]->id == $filmid){
            $volt_film = true;
            $index_film = $i;
        }
    }

    if($volt_film){
        for($i = 0; $i < count($filmek[$index_film]->dislike) && !$volt_user; $i++){
            if($filmek[$index_film]->dislike[$i] == $user){
                $volt_user = true;
                $index_user = 0;
            }
        }
    }

    return (object)[
        "film" => $volt_film,
        "nemtetszik" => $volt_user,
        "index" => $index_user
    ];
}

function tetszik($user, $filmid){
    $filmek = jsonBeolvas("filmek.json");

    //lineáris keresés az id-ra
    $volt_film = false;
    $index_film = 0;
    for($i = 0; $i < count($filmek) && !$volt_film; $i++){
        if($filmek[$i]->id == $filmid){
            $volt_film = true;
            $index_film = $i;
        }
    }

    if($volt_film){
        //dislike kiszedése
        $volt_user = false;
        $uj_dislike = [];
        for($i = 0; $i < count($filmek[$index_film]->dislike); $i++){
            if($filmek[$index_film]->dislike[$i] == $user){
                $volt_user = true;
            }else{
                $uj_dislike[] = $filmek[$index_film]->dislike[$i];
            }
        }

        if($volt_user){
            $filmek[$index_film]->dislike = $uj_dislike;
        }

        //like
        $volt_user = false;
        $uj_like = [];
        for($i = 0; $i < count($filmek[$index_film]->like); $i++){
            if($filmek[$index_film]->like[$i] == $user){
                $volt_user = true;
            }else{
                $uj_like[] = $filmek[$index_film]->like[$i];
            }
        }

        if(!$volt_user){
            $filmek[$index_film]->like[] = $user;
        }else{
            $filmek[$index_film]->like = $uj_like;
        }
        jsonKiir("filmek.json", $filmek);
    }
}

function nemtetszik($user, $filmid){
    $filmek = jsonBeolvas("filmek.json");

    //lineáris keresés az id-ra
    $volt_film = false;
    $index_film = 0;
    for($i = 0; $i < count($filmek) && !$volt_film; $i++){
        if($filmek[$i]->id == $filmid){
            $volt_film = true;
            $index_film = $i;
        }
    }

    if($volt_film){
        //like kiszedése
        $volt_user = false;
        $uj_like = [];
        for($i = 0; $i < count($filmek[$index_film]->like); $i++){
            if($filmek[$index_film]->like[$i] == $user){
                $volt_user = true;
            }else{
                $uj_like[] = $filmek[$index_film]->like[$i];
            }
        }

        if($volt_user){
            $filmek[$index_film]->like = $uj_like;
        }


        //dislike
        $volt_user = false;
        $uj_dislike = [];
        for($i = 0; $i < count($filmek[$index_film]->dislike); $i++){
            if($filmek[$index_film]->dislike[$i] == $user){
                $volt_user = true;
            }else{
                $uj_dislike[] = $filmek[$index_film]->dislike[$i];
            }
        }

        if(!$volt_user){
            $filmek[$index_film]->dislike[] = $user;
        }else{
            $filmek[$index_film]->dislike = $uj_dislike;
        }
        jsonKiir("filmek.json", $filmek);
    }
}

/////////////EGYÉB///////////////
function atiranyit($oldal){
    header('Location: ' .$oldal.'.php');
    die;
}

function letezik($string)
{
    return isset($_GET[$string]) && strlen(trim($_GET[$string])) != 0;
}

function letezikPost($string)
{
    return isset($_POST[$string]) && strlen(trim($_POST[$string])) != 0;
}