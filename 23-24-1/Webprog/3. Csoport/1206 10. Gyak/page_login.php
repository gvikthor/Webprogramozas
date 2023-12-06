<?php
session_start();
$errors = $_SESSION['errors'] ?? [];
$_SESSION['errors'] = [];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IKTUN - Login</title>
</head>
<body>
    <form action="do_login.php" method="POST">
        <input name="uname"><br>
        <input type="password" name="pword"><br>
        <input type="submit" value="Bejelentkez">
    </form>
    <?php if(count($errors) > 0): ?>
        <?php foreach($errors as $error): ?>
            <li><?=$error?></li>
        <?php endforeach ?>
    <?php endif ?>
</body>
</html>