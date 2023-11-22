<?php
require_once 'functions.php';
session_start();

$user = null;
if(isset($_SESSION['user'])){
    $user = $_SESSION['user'];
}else{
    redirect('login.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="req_logout.php">Logout</a><br>

    Hi <?=$user->uname?>!
</body>
</html>