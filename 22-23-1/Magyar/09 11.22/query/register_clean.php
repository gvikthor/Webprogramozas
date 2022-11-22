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

function error_check($condition, $error_code){
    if($condition) $_SESSION['errors'][] = $error_code;
    return $condition;
}

/**
 * error_categories
 *      error_pairs
 *  [
 *      [
 *          [feltételA1, hiba_kódA1],    --> if feltételA1 then hiba_kódA1
 *          [feltételA2, hiba_kódA2],    --> else if feltételA2 then hiba_kódA2
 *          [feltételA3, hiba_kódA3]     --> else if feltételA3 then hiba_kódA3
 *      ],
 *      [
 *          [feltételB1, hiba_kódB1]     --> if feltételB1 then hiba_kódB1
 *      ],
 *      [
 *          [feltételC1, hiba_kódC1]     --> if feltételC1 then hiba_kódC1
 *          [feltételC2, hiba_kódC2]     --> else if feltételC2 then hiba_kódC2
 *      ]
 *  ]
 */
function error_check_all($error_categories){
    foreach($error_categories as $error_category){
        foreach($error_category as $error_pair){
            if(error_check($error_pair[0],$error_pair[1])) break;
        }
    }
}

error_check_all([
    [
        [strlen($form_data->uname) < 5, 'error_uname_short'],
        [!match_username($form_data->uname), 'error_uname_complex'],
        [user_exists($form_data->uname), 'error_uname_taken']
    ],
    [
        [$form_data->pword1 != $form_data->pword2, 'error_pword_nomatch'],
        [strlen($form_data->pword1) < 8, 'error_pword_short'],
        [!match_pword($form_data->pword1), 'error_pword_complex']
    ],
    [
        [strlen($form_data->age) == 0, 'error_age_empty'],
        [!is_numeric($form_data->age), 'error_age_nan'],
        [intval($form_data->age) < 18, 'error_age_young']
    ],
    [
        [!valid_animal($form_data->catdog), 'error_animal_invalid']
    ],
    [
        [!valid_city($form_data->city), 'error_city_invalid']
    ]
]);

if(count($_SESSION['errors']) > 0){
    redirect('../auth.php');
}else{
    // reg folyamat, hogy regisztráljunk és bejelentkezzünk
    redirect('../index.php');
}