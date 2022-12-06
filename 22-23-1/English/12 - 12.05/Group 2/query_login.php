<?php
require_once 'functions.php';
session_start();

if(auth_is_logged_in()) redirect('index.php');

// checks the validity of the data
$form_data = (object)[
    'uname' => trim($_POST['uname'] ?? ''),
    'pword' => trim($_POST['pword'] ?? ''),
    'origin' => trim($_POST['origin']) ?? 'index.php'
];
/*
if(!user_exists($form_data->uname)){
    $_SESSION['errors'][] = 'uname_unknown';
    redirect('index.php');
}
*/

if(!auth_password_verify($form_data->uname, $form_data->pword)){
    $_SESSION['errors'][] = 'login_error';
    redirect('index.php');
}


// logs the user in
$_SESSION['user'] = get_user_by_username($form_data->uname)->id;
redirect($_POST['origin']);