<?php
session_start();
require_once 'functions.php';

// Ha be van lépve, ne regisztrálhasson újra, mert akkor a session felülíródik
if(isset($_SESSION['user_id'])) {
    redirect('index.php');
}

$user_storage = new_storage('data/users');

$formdata = (object)[
    "email" => trim($_POST['email'] ?? ''),
    "pw1" => trim($_POST['pw1'] ?? ''),
    "pw2" => trim($_POST['pw2'] ?? '')
];

$errors = [];
if(!filter_var($formdata->email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'E-mail must be valid e-mail format!';
}else if(count($user_storage->findAll(['email' => $formdata->email])) > 0) {
    $errors[] = 'E-mail must be unique, this one is already in use!';
}

if($formdata->pw1 != $formdata->pw2){
    $errors[] = 'The two passwords must macth!';
}
else if(strlen($formdata->pw1) < 4) { // való életben ez legyen 12!!!!!!!
    $errors[] = 'Password must be atleast 4 characters long!';
}

if(count($errors) == 0) {
    $_SESSION['user_id'] = $user_storage->add([
        'email' => $formdata->email,
        'password' => password_hash($formdata->pw1, PASSWORD_DEFAULT)
        //'is_admin' => false
    ]);
    
    redirect('index.php');
}else{
    $_SESSION['errors'] = $errors;
    redirect('page-authentication.php');
}
