<?php
session_start();
require_once 'functions.php';

$form_data = (object)[
    'uname' => trim($_POST['uname'] ?? ''),
    'pword' => trim($_POST['pword'] ?? '')
];

$errors = [];

if(strlen($form_data->uname) == 0){
    $errors[] = 'A felhasználónév megadása kötelező!';
}

if(strlen($form_data->pword) == 0){
    $errors[] = 'A jelszó megadása kötelező!';
}

if(count($errors) == 0){
    if(!login($form_data->uname, $form_data->pword)){
        $errors[] = 'A felhasználónév/jelszó pár helytelen!';
    }
}

if(count($errors) == 0){
    redirect('index.php');
}else{
    $_SESSION['errors'] = $errors;
    redirect('page_login.php');
}