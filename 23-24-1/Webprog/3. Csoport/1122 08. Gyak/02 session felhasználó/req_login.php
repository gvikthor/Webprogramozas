<?php
require_once 'functions.php';
session_start();

// Ellenőrzi a belépési adatokat.
$form_data = (object)[
    'uname' => trim($_POST['uname'] ?? ''),
    'pword' => trim($_POST['pword'] ?? '')
];

$errors = [];

if(strlen($form_data->uname) == 0){
    $errors[] = 'Username is required!';
}

if(strlen($form_data->pword) == 0){
    $errors[] = 'Password is required!';
}

if(count($errors) == 0 && !check_user_credentials($form_data->uname, $form_data->pword)){
    $errors[] = "Username and password don't match!";
}

if(count($errors) == 0) {
    $_SESSION['user'] = (object)[
        'uname' => $form_data->uname
    ];
    redirect('index.php');
}else{
    $_SESSION['errors'] = $errors;
    $_SESSION['previous'] = $form_data;
    redirect('login.php');
}

