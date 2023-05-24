<?php
require_once 'functions.php';
require_once 'storage.php';

session_start();

$form_object = (object)[
    'username' => trim_post_value_or_default('username'),
    'password' => trim_post_value_or_default('password')
];
$errors = [];

$users_db = new JsonStorage('users.json');
$user_with_this_name = $users_db->findOne([
    'username' => $form_object->username
]) ?? null;

if($user_with_this_name){
    $errors[] = 'A felhasználónév már foglalt.';
}

// Szorgalmi: ez a jelszó már hazsnálatban van xy felhasználó által

if(count($errors) == 0){
    add_with_id([
        'username' => $form_object->username,
        'password' => password_hash(
            $form_object->password,
            PASSWORD_DEFAULT
        )
    ], $users_db);
    $_SESSION['user'] = $form_object->username; // ha sikeresen regisztráltunk, jelentkeztessük is be a usert
}else{
    $_SESSION['errors'] = $errors;
}

redirect('index.php');