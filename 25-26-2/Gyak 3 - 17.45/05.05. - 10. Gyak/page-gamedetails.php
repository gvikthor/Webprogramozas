<?php
require_once 'functions.php';
$game = new_storage('data/games')->findById($_GET['id'] ?? '');
if(!$game) {
    redirect('index.php');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?= $game['gamename'] ?></h1>
    <nav>
        <a href="index.php">Home</a>
        <a href="page-newgame.php">Add game</a>
        <a href="page-authentication.php">Login/Register</a>
    </nav>

    <div>This <?= $game['genre'] ?> game was released in <?= $game['release'] ?> and recieved <?= $game['rating'] ?> reviews initially. It was released on:</div>
    <ul>
        <?php foreach($game['platform'] as $platform): ?>
            <li><?= $platform ?></li>
        <?php endforeach ?>
    </ul>

    <a href="datahandling-game-delete.php?id=<?= $game['id'] ?>" style="background-color: red;">🗑️ Delete game</a>
</body>
</html>