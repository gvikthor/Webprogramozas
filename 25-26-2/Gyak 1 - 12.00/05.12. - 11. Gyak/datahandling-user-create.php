<?php
session_start();
require_once 'functions.php';

$is_logged_in = isset($_SESSION['user_id']) && strlen($_SESSION['user_id']) > 0;
if($is_logged_in){
    redirect('index.php');
}

$form_data = (object)[
    'uname' => trim($_POST['uname'] ?? ''),
    'email' => trim($_POST['email'] ?? ''),
    'pword1' => $_POST['pword1'] ?? '',
    'pword2' => $_POST['pword2'] ?? ''
];

$user_storage = new_storage('data/users');
$errors = [];

if(strlen($form_data->uname) < 4) {
    $errors[] = 'Username must be atleast 4 characters long!';
}elseif($user_storage->findOne(['uname' => $form_data->uname])){
    $errors[] = 'Username must be unique! This one already exists!';
}

if(!filter_var($form_data->email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email must be valid format! example@something.eu';
}//itt is lehet egyediséget ellenőrizni

if($form_data->pword1 != $form_data->pword2) {
    $errors[] = 'Passwords must match eachother!';
}elseif(strlen($form_data->pword1) > 4){ // EZ NEM NÉGY, EZ LEGYEN ÉLESBEN MINIMUM 12
    $errors[] = 'Password must be atleas 12 (teszt: 4) characters long!';
}


if(count($errors) == 0) {
    $_SESSION['user_id'] = $user_storage->add([ // az add visszaadja az ID-t miután létrehozta
        'uname' => $form_data->uname,
        'email' => $form_data->email,
        'pword' => password_hash($form_data->pword1, PASSWORD_DEFAULT)
    ]);
    //$_SESSION['user'] = $form_data->uname;
    redirect('index.php');
}else{
    $_SESSION['errors'] = $errors;
    redirect('page-authenticate.php');
}