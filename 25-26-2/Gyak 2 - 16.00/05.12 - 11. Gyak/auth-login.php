<?php
session_start();
require_once 'functions.php';

$form_data = (object)[
    'username' => trim($_POST['username'] ?? ''),
    'password' => trim($_POST['password'] ?? '')
];

$user_storage = new_storage('data/users');
$user = $user_storage->findOne(['username' => $form_data->username]) ?? ['password' => ''];
// a user storage (meg minden storage) asszociatív tömböt ad vissza, tehát $elem['valami'] nem pedig $elem->valami
// ezt át lehet állítani a functions_storage.php fileban
if(password_verify($form_data->password, $user['password'])) {
    $_SESSION['user_id'] = $user['id'];
    redirect('index.php');
}else{
    $_SESSION['errors'] = "Username-password combo doesn't match.";
    redirect('page-login-register.php');
}