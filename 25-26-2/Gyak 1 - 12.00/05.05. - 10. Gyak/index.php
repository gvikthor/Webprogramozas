<?php
require_once 'functions.php';
$games_storage = new_storage('data/games');
$games = $games_storage->findAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .current {
        font-weight: bold;
        color: #13294B;
    }
</style>
<body>
    <h1>Games</h1>
    <nav>
        <a href="index.php" class="current">Home</a>
        <a href="page-create-game.php">Add game</a>
    </nav>
    <ul>
        <?php foreach($games as $game): ?>
            <li><a href="page-game-details.php?id=<?= $game['id'] ?>"><?= $game['gamename'] ?></a></li>
        <?php endforeach ?>
    </ul>
</body>
</html>