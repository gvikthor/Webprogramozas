<?php
session_start();
include_once 'functions.php';
$_SESSION['errors'] = [];

function user_exists($uname){
    $users = ['Alma69', 'KoRtE'];
    return array_search(
        strtolower($uname),
        array_map(
            function ($param) { return strtolower($param); },
            $users
        )
    );
}
function valid_animal($animal){
    $animals = ['cat', 'dog'];
    return array_search($animal, $animals);
}
function valid_city($city){
    $cities = ['bp', 'db', 'ms', 'ot'];
    return array_search($city, $cities);
}

$form_data = (object)[
    'uname' => get_post_or_default('uname'),
    'pword1' => get_post_or_default('pword1'),
    'pword2' => get_post_or_default('pword2'),
    'age' => get_post_or_default('age'),
    'catdog' => get_post_or_default('catdog'),
    'city' => get_post_or_default('city'),
    //'movies' => get_post_or_default('movies', []), ezt kikommenteltem, mert még pofozgatjuk kövi órán
    'desc' => get_post_or_default('desc')
];

/*
USERNAME:
- legalább 5 karakter
- érvényes (kisbetű, nagybetű, szám)
- nem foglalt
*/
if(strlen($form_data->uname) < 5){
    $_SESSION['errors'][] = 'error_uname_short';
}
else if(!match_username($form_data->uname)){
    $_SESSION['errors'][] = 'error_uname_complex';
}
else if(user_exists($form_data->uname)){
    $_SESSION['errors'][] = 'error_uname_taken';
}

/*
PASSWORD:
- egyforma a két jelszó
- legalább 8 karakter
- érvényes (legalább egy kisbetűs, nagybetűs, szám, spec karakter (#&@?))
*/
if($form_data->pword1 != $form_data->pword2){
    $_SESSION['errors'][] = 'error_pword_nomatch';
}
else if(strlen($form_data->pword1) < 8){
    $_SESSION['errors'][] = 'error_pword_short';
}
else if(!match_pword($form_data->pword1)){
    $_SESSION['errors'][] = 'error_pword_complex';
}

/*
AGE: fontos, hiába számot akarunk, a GET/POST mindenképp string
- nem üres (hiszen az üres lehetne nulla)
- szám jellegű
    ✅ 123
    ✅ 1.23
    ✅ 0.12
    ✅ .12   (ez ugyanaz, mint a 0.12)
    ✅ 0
    ❌ 12,34
    ❌ onetwo
    ❌ l23   (az egy kis L az elején)
- az értéke legalább 18
*/
if(strlen($form_data->age) == 0){
    $_SESSION['errors'][] = 'error_age_empty';
}else if(!is_numeric($form_data->age)){
    $_SESSION['errors'][] = 'error_age_nan';
}else if(intval($form_data->age) < 18){
    $_SESSION['errors'][] = 'error_age_young';
}

/*
CATDOG:
- benne van az elfogadott értékek közt
*/
if(!valid_animal($form_data->animal)){
    $_SESSION['errors'][] = 'error_animal_invalid';
}

/*
CITY:
- benne van az elfogadott értékek közt
*/
if(!valid_city($form_data->city)){
    $_SESSION['errors'][] = 'error_city_invalid';
}

/*
MOVIES:
- kövi órán foglalkozunk vele
*/

if(count($_SESSION['errors']) > 0){
    redirect('../auth.php');
}else{
    // reg folyamat, hogy regisztráljunk és bejelentkezzünk
    redirect('../index.php');
}