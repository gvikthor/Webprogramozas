<?php
session_start();
$_SESSION['language'] = 'english';

require_once 'functions.php';
require_once 'pages.php';
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
    <?php page_login('index.php') ?>
    <?php page_register('index.php') ?>
    <?php page_errors($_SESSION['errors'] ?? []) ?>
</body>
</html>