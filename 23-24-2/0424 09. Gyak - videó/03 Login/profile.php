<?php
require_once 'functions.php';
require_once 'data.php';
session_start();
if(!isset($_SESSION['uname'])){
    redirect('index.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        background-color: <?=get_user($_SESSION['uname'])->background?>;
    }
</style>
<body>
    <h1>Szia <?=$_SESSION['uname']?></h1>
    <a href="logout.php">Logout</a>
</body>
</html>