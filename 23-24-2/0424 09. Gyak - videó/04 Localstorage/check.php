<?php
require_once 'functions.php';
require_once 'data.php';
session_start();

$form_data = (object)[
    'uname' => trim($_POST['uname'] ?? ''),
    'pword' => trim($_POST['pword'] ?? '')
];

$errors = [];

$success = false;
foreach($users as $user){
    if($user->uname == $form_data->uname){
        $success = password_verify($form_data->pword, $user->pword);
    }
}

if(!$success){
    $errors[] = 'Username or password are incorrect!';
}

if (count($errors) > 0) {
    $_SESSION['had_errors'] = true;
    $_SESSION['errors'] = $errors;
    redirect('index.php');
} else {
    $_SESSION['uname'] = $form_data->uname;
    redirect('profile.php');
}
