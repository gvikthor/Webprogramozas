<?php
require_once 'functions.php';
require_once 'functions.php';
session_start();

if(isset($_SESSION['user'])){
    redirect('index.php');
}

$form_data = (object)[
    'username' => trim($_POST['username'] ?? ''),
    'password' => trim($_POST['password'] ?? '')
];

$errors = [];

//if(!($form_data->username == 'Peti' && $form_data->password == 'almafa')){
if($form_data->username != 'Peti' || $form_data->password != 'almafa'){
    $errors[] = 'Rossz felhasználónév-jelszó pár!';
}

if(count($errors) == 0){
    $_SESSION['user'] = $form_data->username;
}else{
    $_SESSION['errors'] = $errors;
}

redirect('index.php');