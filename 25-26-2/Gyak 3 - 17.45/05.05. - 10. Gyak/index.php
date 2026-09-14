<?php
require_once 'functions.php';

$games = new_storage('data/games')->findAll();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
        <style>
        .current {
            font-weight: bold;
            color: #13294B;
        }
    </style>
</head>
<body>
    <h1>Home</h1>
    <nav>
        <a href="index.php" class="current">Home</a>
        <a href="page-newgame.php">Add game</a>
        <a href="page-authentication.php">Login/Register</a>
    </nav>

    <ul>
    <?php foreach($games as $game): ?>
        <li><a href="page-gamedetails.php?id=<?= $game['id'] ?>"> <?= $game['gamename'] ?> </a></li>
    <?php endforeach ?>
    </ul>
</body>
</html>