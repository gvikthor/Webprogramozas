









<?php
require_once 'functions.php';
session_start();

$user = $_SESSION['user'] ?? null;

if(!$user){
    redirect('page_login.php');
}
?>
<h1>Hi <?=$user->uname?>!</h1>
<a href="do_logout.php">Logout</a>
