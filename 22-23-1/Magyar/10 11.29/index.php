<?php
    include_once 'functions.php';
    include_once 'pages_main.php';
    session_start();

    $logged_in = user_is_logged_in();
    if(!$logged_in) redirect('auth.php');
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
    <h1>Awesome page</h1>
    <a href="query/logout.php">Kijelentkez</a>
    <?php ($PAGES->nav->language)() ?>
    <?php ($PAGES->movies->movies)(user_get($_SESSION['user_id'])['movies']) ?>
</body>
</html>