<?php
require_once 'functions.php';
session_start();

function get_val($param, $default = ''){
    return trim($_POST[$param] ?? $default);
}

$form_data = (object)[
    'name' => get_val('name'),
    'pword1' => get_val('pword1'),
    'pword2' => get_val('pword2'),
    'email' => get_val('email'),
    'age' => get_val('age'),
    'city' => get_val('city'),
    'degree' => get_val('degree'),
    'languages' => array_map(function ($language) {
        return trim($language);
    }, $_GET['languages'] ?? []),
    'description' => get_val('description')
];

$errors = [];
$valid_cities = ['bud', 'deb', 'sze', 'esz', 'pec'];
$valid_degrees = ['highschool', 'bachelor', 'master', 'phd'];
$valid_languages = ['hu', 'en', 'de'];


// Name
// - ne legyen üres

if(strlen($form_data->name) == 0){
    $errors[] = 'The name must not be empty!';
}

// Password TODO

// E-mail
// - ne legyen üres
// - legyen e-mail formátumú

if(strlen($form_data->email) == 0){
    $errors[] = 'The email must not be empty!';
}else if(!filter_var($form_data->email, FILTER_VALIDATE_EMAIL)){
    $errors[] = 'The email must be valid!';
}

// Age
// - ne legyen üres
// - legyen szám
// - legyen egész
// - legyen 18 és 200 közt

if(strlen($form_data->age) == 0){
    $errors[] = 'Age must not be empty!';
}else if(!is_numeric($form_data->age)){
    $errors[] = 'Age must be a number!';
}else if(intval($form_data->age) != floatval($form_data->age)){
    $errors[] = 'Age must be a whole number!';
}else{
    $form_data->age = intval($form_data->age);

    /*
        nem (A és B)  =   (nem A) vagy (nem B)
        nem (A vagy B)  =   (nem A) és (nem B)

    */

    //if(18 > $form_data->age || $form_data->age > 200){
    if(!(18 <= $form_data->age && $form_data->age <= 200)){
        $errors[] = 'Age must be atleast 18, at most 200!';
    }
}

// City
// - ne legyen üres
// - legyen az érvényes városaink közt

/*$found = false;
for($i = 0; $i < count($valid_cities) && !$found; $i++){
    $found = ($valid_cities[$i] == $form_data->city);
}*/

if(strlen($form_data->city) == 0){
    $errors[] = 'The city must not be empty!';
}else if(!in_array($form_data->city, $valid_cities)){
    $errors[] = 'Unknown city!';
}

// Degree
// - ne legyen üres
// - legyen az érvényes képzési szintek közt

if(strlen($form_data->degree) == 0){
    $errors[] = 'The degree level must not be empty!';
}else if(!in_array($form_data->degree, $valid_degrees)){
    $errors[] = 'Unknown degree level!';
}

// Languages
// - ne legyen üres
// - minden nyelv legyen az érvényes nyelvek közt
if(count($form_data->languages) == 0){
    $errors[] = 'You must speak atleast one language!';
}else{
    $found = false;
    for($i = 0; $i < count($form_data->languages) && !$found; $i++){
        $found = !in_array($form_data->languages[$i], $valid_languages);
    }
    if($found){
        $errors[] = 'Invalid language found!';
    }
}

// Description
// - legalább 3 karakter
if(strlen($form_data->description) < 3){
    $errors[] = 'Description is too short!';
}

if(count($errors) == 0) {
    $_SESSION['user'] = (object)[
        'uname' => $form_data->name
    ];
    redirect('index.php');
}else{
    $_SESSION['errorsReg'] = $errors;
    $_SESSION['previous'] = $form_data;
    redirect('register.php');
}