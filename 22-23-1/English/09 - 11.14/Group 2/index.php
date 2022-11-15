<?php
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
    <form action="auth_page.php" method="POST">
        <input type="hidden" name="origin" value="index.php">
        <input type="submit" value="I'm not yet logged in">
    </form>
    <?php page_movielist('Movies') ?>
    <?php page_movielist('Best movies') ?>
</body>
</html>