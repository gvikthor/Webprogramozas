<?php
require_once 'functions.php';
require_once 'storage.php';

session_start();

$uname = $_POST["username"];
$pword = $_POST["password"];

function check_username_password($uname, $pword){
    $users_db = new JsonStorage('users.json');
    $user = $users_db->findOne([
        'username' => $uname
    ]) ?? null;
    if(!$user) return false;
    return password_verify($pword, $user['password']);
}

if(check_username_password($uname, $pword)){
    $_SESSION['user'] = $uname;
}else{
    $_SESSION['errors'] = ['Helytelen felhasználónév vagy jelszó!'];
}

redirect('index.php');