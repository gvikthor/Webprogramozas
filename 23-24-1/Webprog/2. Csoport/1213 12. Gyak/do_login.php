<?php
session_start();
require_once 'functions.php';
logout_guard('index.php');

$form_data = (object)[
    'uname' => trim($_POST['uname'] ?? ''),
    'password' => trim($_POST['password'] ?? '')
];

$errors = [];

if(is_empty_string($form_data->uname)){
    $errors[] = 'A felhasználónév megadása kötelező!';
}

if(is_empty_string($form_data->password)){
    $errors[] = 'A jelszó megadása kötelező!';
}

if(count($errors) == 0 && !validate_credentials($form_data->uname, $form_data->password)){
    $errors[] = 'A felhasználónév és jelszó pár nem megfelelő!';
}

//////////////////////////

if(count($errors) > 0){
    $_SESSION['errors'] = $errors;
    redirect('page_login.php');
}else{
    //$_SESSION['user'] = storage('data_users')->findOne(['uname' => $form_data->uname])->id;
    $_SESSION['user'] = $form_data->uname;
    redirect('index.php');
}