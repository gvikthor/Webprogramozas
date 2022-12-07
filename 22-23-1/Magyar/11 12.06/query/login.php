<?php
session_start();
include_once 'functions.php';

$_SESSION['errors'] = [];

$form_data = (object)[
    'uname' => get_post_or_default('uname'),
    'pword' => get_post_or_default('pword')
];

if(!post_exists('uname')){
    $_SESSION['errors'][] = 'error_uname_empty';
}else if(!user_exists($form_data->uname)){
    $_SESSION['errors'][] = 'error_uname_unknown';
}else if(!user_password($form_data->uname, $form_data->pword)){
    $_SESSION['errors'][] = 'error_pword_bad';
}

if(count($_SESSION['errors']) > 0){
    redirect('../auth.php');
}else{
    user_login(user_get_id($form_data->uname));
    redirect('../index.php');
}