









<?php
require_once 'functions.php';
session_start();
login_guard();

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

if(count($errors) == 0 && !validate_credentials($form_data->uname, $form_data->pword)){
    $errors[] = "Username and password don't match!";
}

if(count($errors) == 0){
    $_SESSION['user'] = (object)[
        'uname' => $form_data->uname
    ];
    redirect('index.php');
}else{
    $_SESSION['errors'] = $errors;
    $_SESSION['form_data'] = $form_data;
    redirect('page_login.php');
}