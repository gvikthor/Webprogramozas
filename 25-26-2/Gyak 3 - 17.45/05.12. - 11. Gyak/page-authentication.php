<?php
session_start();
require_once 'functions.php';
$is_logged_in = isset($_SESSION['user_id']);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Login/Register</h1>
    <?php nav_menu('authentication', $is_logged_in) ?>

    <h2>Login</h2>
    <form method="POST" action="datahandling-user-login.php">
        <input name="email" placeholder="email@example.com"> <br>
        <input type="password" name="password" placeholder="Password"> <br>
        <input type="submit" value="Login">
    </form>

    <h2>Register</h2>
    <form method="POST" action="datahandling-user-create.php">
        <input name="email" placeholder="email@emxaple.com"> <br>
        <input name="pw1" type="password" placeholder="Password"> <br>
        <input name="pw2" type="password" placeholder="Password"> <br>
        <input type="submit" value="Register">
    </form>

    <!-- erroros divet ide lehetne rakni szép ul felsorolással -->
     <?php var_dump($_SESSION['errors'] ?? []) ?>

</body>

</html>