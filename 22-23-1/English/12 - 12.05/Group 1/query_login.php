<?php
require_once 'functions.php';
session_start();

if(!key_exists('come_back_here', $_POST)){
    redirect('index.php');
}

if(!auth_users_exists($_POST['uname'])){
    $_SESSION['errors'][] = 'uname_unknown';
    redirect($_POST['come_back_here']);
}

$user = auth_get_user_by_uname($_POST['uname']);
if(!auth_user_password_match($user, $_POST['pword'])){
    $_SESSION['errors'][] = 'pwd_bad';
    redirect($_POST['come_back_here']);
}

$_SESSION['user_id'] = $user->id;

redirect($_POST['come_back_here']);