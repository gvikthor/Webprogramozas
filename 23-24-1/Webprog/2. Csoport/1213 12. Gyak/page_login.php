<?php
    session_start();
    require_once 'functions.php';
    logout_guard('index.php');
    $errors = pull_session_var('errors', []);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PályázIK</title>
</head>
<body>
    <form action="do_login.php" method="POST">
        <input name="uname"> <br>
        <input type="password" name="password"> <br>
        <input type="submit" value="Bejelentkez">
        <link rel="stylesheet" href="style-login.css">
    </form>
    <?php if(count($errors) > 0): ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>