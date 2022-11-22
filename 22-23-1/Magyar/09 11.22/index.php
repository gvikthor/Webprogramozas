<?php
    include_once 'functions.php';
    include_once 'pages_main.php';

    $logged_in = true;
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
    <?php ($PAGES->nav->language)() ?>
    <?php ($PAGES->movies->movies)('famous') ?>
</body>
</html>