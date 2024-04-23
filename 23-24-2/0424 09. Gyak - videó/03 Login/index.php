<?php
session_start();

$had_errors = $_SESSION['had_errors'] ?? false;
unset($_SESSION['had_errors']);
$errors = $_SESSION['errors'] ?? [];
unset($_SESSION['errors']);



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="check.php" method="POST">
        <input name="uname"><br>
        <input name="pword" type="password"><br>
        <input type="submit">
    </form>

    <?php if($had_errors): ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>