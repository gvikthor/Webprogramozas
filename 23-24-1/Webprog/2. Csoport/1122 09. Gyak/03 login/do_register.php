








<?php
require_once 'functions.php';
session_start();
login_guard();

$form_data = (object)[
    'name' => trim($_POST['name'] ?? ''),
    'pword1' => trim($_POST['pword1'] ?? ''),
    'pword2' => trim($_POST['pword2'] ?? ''),
    'email' => trim($_POST['email'] ?? ''),
    'age' => trim($_POST['age'] ?? ''),
    'city' => trim($_POST['city'] ?? ''),
    'degree' => trim($_POST['degree'] ?? ''),
    'languages' => $_POST['languages'] ?? [],
    'description' => trim($_POST['description'] ?? ''),
];

$errors = [];
$valid_cities = ['bud', 'deb', 'esz', 'sze', 'pec'];
$valid_degrees = ['highschool', 'bachelor', 'master', 'phd'];
$valid_languages = ['hu', 'en', 'de'];

if(isEmptyString($form_data->name)){
    $errors[] = 'The name must not be empty!';
}

if(isEmptyString($form_data->pword1)){
    $errors[] = 'The password must not be empty!';
}
if(isEmptyString($form_data->pword2)){
    $errors[] = 'The password again must not be empty!';
}

if(isEmptyString($form_data->email)){
    $errors[] = 'The e-mail must not be empty!';
}else if(!filter_var($form_data->email, FILTER_VALIDATE_EMAIL)){
    $errors[] = 'The e-mail is not valid!';
}

if(isEmptyString($form_data->age)){
    $errors[] = 'The age must not be empty!';
}else if(!is_numeric($form_data->age)){
    $errors[] = 'The age must be a number!';
}else if(intval($form_data->age) != floatval($form_data->age)){
    $errors[] = 'The age must be a whole number!';
}else{
    $form_data->age = intval($form_data->age);
    /*
    nem (A és B)   =   nem A vagy nem B
    nem (A vagy B)   =   nem A és nem B
    */
    //if($form_data->age < 18 || $form_data->age > 200){
    if(!($form_data->age >= 18 && $form_data->age <= 200)){
        $errors[] = 'The age must be between 18 and 200!';
    }
}

if(isEmptyString($form_data->city)){
    $errors[] = 'The city must not be empty!';
}else if(!in_array($form_data->city, $valid_cities)){
    $errors[] = 'Unknown city!';
}

if(isEmptyString($form_data->degree)){
    $errors[] = 'The degree must not be empty!';
}else if(!in_array($form_data->degree, $valid_degrees)){
    $errors[] = 'Unknown degree level!';
}

if(count($form_data->languages) == 0){
    $errors[] = 'You must speak at least one language!';
}else{
    $unknown_languages = array_filter(
        $form_data->languages,
        function ($lang) use ($valid_languages) {
            return !in_array($lang, $valid_languages);
        }
    );
    if(count($unknown_languages) > 0){
        $errors[] = 'Unknown language!';
    }
}

if(count(explode(' ', $form_data->description)) < 5){
    $errors[] = 'You must write at least 5 words about yourself!';
}

if(count($errors) == 0){
    $_SESSION['user'] = (object)[
        'uname' => $form_data->name
    ];
    redirect('index.php');
}else{
    $_SESSION['errors'] = $errors;
    $_SESSION['form_data'] = $form_data;
    redirect('page_register.php');
}