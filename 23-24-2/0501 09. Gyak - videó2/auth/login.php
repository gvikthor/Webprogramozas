<?php
require_once 'functions.php';
session_start();

$form_data = (object)[
    'uname' => trim($_POST['uname'] ?? ''),
    'pword' => trim($_POST['pword'] ?? '')
];

$errors = [];
if($form_data->uname != 'Peti'){
    $errors[] = 'User does not exist.';
}
if($form_data->pword != '12345678'){
    $errors[] = 'The password is incorrect!';
}

if(count($errors) > 0){
    $_SESSION['errors'] = $errors;
}else{
    $_SESSION['uname'] = 'Peti';
}

redirect('index.php');