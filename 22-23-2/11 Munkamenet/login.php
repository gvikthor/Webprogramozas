<?php
require_once 'functions.php';

session_start();

$uname = $_POST["username"];
$pword = $_POST["password"];

function check_username_password($uname, $pword){
    return $uname == 'Almafa' && $pword == 'Kiscica';
}

if(check_username_password($uname, $pword)){
    $_SESSION['user'] = $uname;
}

redirect('index.php');