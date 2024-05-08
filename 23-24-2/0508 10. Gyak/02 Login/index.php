<?php
session_start();
$is_logged_in = isset($_SESSION['user']);
$errors = $_SESSION['errors'] ?? [];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if($is_logged_in): ?>
        Szia <?=$_SESSION['user']?>
        <a href="logout.php">Logout</a>
    <?php else: ?>
        Jelentkezz be!
        <form autocomplete="off" action="login.php" method="POST">
            <input name="username"> <br>
            <input name="password" type="password"> <br>
            <input type="submit" value="Login">
        </form>
        <?php if(count($errors) > 0): ?>
            <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
            </ul>
        <?php endif ?>
    <?php endif ?>
</body>
</html>