<?php
session_start();
require_once 'functions.php';

$form_data = (object)[
    'uname' => trim($_POST['uname'] ?? ''),
    'pword1' => trim($_POST['pword1'] ?? ''),
    'pword2' => trim($_POST['pword2'] ?? ''),
    'year' => trim($_POST['year'] ?? 'nan'),
    'city' => $_POST['city'] ?? '',
    'color' => $_POST['color'] ?? '',
    'movies' => $_POST['movies'] ?? []
];

/**
 * Checks if the city is in our database
 */
function city_exists($city){
    $cities = [
        'hu-bp',
        'hu-db',
        'uk-ln',
        'uk-mc',
        'de-br'
    ];
    return in_array($city, $cities);
}

/**
 * Checks if the color is in our database
 */
function color_exists($color){
    $colors = [
        'red',
        'blue',
        'green'
    ];
    return in_array($color, $colors);
}

$errors = [];

if(strlen($form_data->uname) < 5){
    $errors[] = 'uname_short';
}else if(!regex_username($form_data->uname)){
    $errors[] = 'uname_complex';
}else if(user_exists($form_data->uname)){
    $errors[] = 'uname_exists';
}

if($form_data->pword1 != $form_data->pword2){
    $errors[] = 'pword_nomatch';
}else if($form_data->pword1 < 8){
    $errors[] = 'pword_short';
}else if(!regex_password($form_data->pword1)){
    $errors[] = 'pword_complex';
}

if(!is_numeric($form_data->year)){
    $errors[] = 'year_nan';
}else if(intval($form_data->year) < 1900 || intval($form_data->year) > 2010){
    $errors[] = 'year_oob'; //out of bounds
}

if(!city_exists($form_data->city)){
    $errors[] = 'city_unknown';
}

if(!color_exists($form_data->color)){
    $errors[] = 'color_unknown';
}

if(count($form_data->movies) == 0){
    $errors[] = 'movies_empty';
}else if(!movies_exsist($form_data->movies)){
    $errors[] = 'movies_unknown';
}

if(count($errors) > 0){
    $_SESSION['errors'] = $errors;
    $_SESSION['origin'] = $_POST['origin'];
    $_SESSION['kept_data'] = $form_data;
    redirect('auth_page.php');
}

$_SESSION['user'] = auth_register_user($form_data);
redirect($_POST['origin'] ?? 'index.php');