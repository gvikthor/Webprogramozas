<?php
require_once 'functions.php';
session_start();
$games = get_all_games();
$user = $_SESSION['user'] ?? '';
$is_logged_in = trim($user) != '';

//highlight_array($games);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php if ($is_logged_in) : ?>
        <a href="logout.php">Logout</a>
    <?php else : ?>
        <form action="login.php" method="POST">
            <input name="username"> <br>
            <input name="password" type="password"> <br>
            <input type="submit" value="Login">
        </form>
    <?php endif ?>
    <ul>
        <?php foreach ($games as $game) : ?>
            <li>
                <a href="game.php?id=<?= $game['id'] ?>">
                    <?= $game['title'] ?>
                </a>
                <?php if ($is_logged_in) : ?>
                    <a href="delete.php?id=<?= $game['id'] ?>">
                        🚯
                    </a>
                <?php endif ?>
            </li>
        <?php endforeach ?>
    </ul>
</body>

</html>