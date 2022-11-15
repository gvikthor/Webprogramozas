<?php
session_start();
include_once 'functions.php';

// Pages
include_once 'pages/auth.php';

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

    <?php if(session_array_exists('errors')): ?>
        <h2>Error!</h2>
        <ul>
            <?php foreach($_SESSION['errors'] as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>

    <?php page_auth_login() ?>
    <?php page_auth_register() ?>
</body>
</html>