<?php
session_start();
require_once 'functions.php';

// Ha be van lépve, ne jelentkezhessen be újra, mert akkor a session felülíródik
if(isset($_SESSION['user_id'])) {
    redirect('index.php');
}

$form_data = (object)[
    'email' => $_POST['email'],
    'password' => $_POST['password']
];

$user = new_storage('data/users')->findOne(['email' => $form_data->email]) ?? ['password' => ''];

// ->valami  objektum attribútuma
// ['valami']  asszociatív tömb attribútuma
// nem olyan mint a JS, nem tudok objektumot tömbkétn indexelni és visszafele se
// storage az asszociatív tömböt ad vissza, nem objektumot
// ezt át lehet állítani a fileban
if(!password_verify($form_data->password, $user['password'])) {
    $_SESSION['errors'] = ["Username-password combo doesn't exist"];
    redirect('page-authentication.php');
}else{
    $_SESSION['user_id'] = $user['id'];
    redirect('index.php');
}