<?php
require_once 'functions.php';
session_start();

if(isset($_SESSION['user'])){
    redirect('index.php');
}

$form_data = (object)[
    'username' => trim($_POST['username'] ?? ''),
    'email' => trim($_POST['email'] ?? ''),
    'password1' => trim($_POST['password1'] ?? ''),
    'password2' => trim($_POST['password2'] ?? ''),
    'imageurl' => trim($_POST['imageurl'] ?? '')
];

$errors = [];

if(is_username_taken($form_data->username)){
    $errors[] = 'Ez a felhasználónév foglalt!';
} else if(strlen($form_data->username) < 6){
    $errors[] = 'A felhasználónév legyen legalább 6 karakter hosszú!';
}

if(!filter_var($form_data->email, FILTER_VALIDATE_EMAIL)){
    $errors[] = 'Helytelen e-mail cím!';
}

if(!filter_var($form_data->imageurl, FILTER_VALIDATE_URL)){
    $errors[] = 'Helytelen kép URL!';
}

if($form_data->password1 != $form_data->password2){
    $errors[] = 'A jelszavak nem egyeznek!';
}else if(strlen($form_data->password1) < 8){
    $errors[] = 'A jelszó legyen legalább 8 karakter hosszú!';
}// else if komplexitás ellenőrzés

if(count($errors) == 0){
    $_SESSION['user'] = $form_data->username;
    add_new_user(
        $form_data->username,
        $form_data->password1,
        $form_data->imageurl
    );
}else{
    $_SESSION['errors'] = $errors;
}

redirect('index.php');