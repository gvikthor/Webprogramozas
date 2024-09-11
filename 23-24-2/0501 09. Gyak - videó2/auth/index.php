<?php

session_start();

$errors = $_SESSION['errors'] ?? [];
unset($_SESSION['errors']);

$logged_in = isset($_SESSION['uname']);
$uname = $_SESSION['uname'] ?? '';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Movie Site!</h1>

    <?php if($logged_in): ?>
        <h2>Hello <?=$uname?></h2>
        <a href="logout.php">Logout</a>
        <ul>
            <li>Movie 1</li>
            <li>Movie 2</li>
            <li>Movie 3</li>
        </ul>
    <?php else: ?>
        <h2>Please, log in!</h2>
        <form action="login.php" method="POST">
            <input name="uname"> <br>
            <input name="pword" type="password"> <br>
            <input type="submit">
        </form>
        <?php if(count($errors) > 0): ?>
            <h3>Error!</h3>
            <ul>
                <?php foreach($errors as $error): ?>
                    <li><?=$error?></li>
                <?php endforeach ?>
            </ul>
        <?php endif ?>
    <?php endif ?>
</body>
</html>