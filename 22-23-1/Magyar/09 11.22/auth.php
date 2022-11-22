<?php
session_start();
include_once 'functions.php';
include_once 'pages/auth.php';
include_once 'pages/errors.php';
include_once 'pages/nav.php';

$errors = $_SESSION['errors'] ?? [];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Autentikáció</h1>
    <?php page_language_selector() ?>
    <?php page_errors($errors) ?>
    <?php page_auth_login() ?>
    <?php page_auth_register() ?>
</body>
</html>