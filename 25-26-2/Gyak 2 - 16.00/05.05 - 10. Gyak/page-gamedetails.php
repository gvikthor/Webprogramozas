<?php
require_once 'functions.php';
$id = $_GET['id'] ?? null;
if(!$id) {
    redirect('index.php');
}

$game = new_storage('data/games')->findById($id);
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
        <a href="page-addgame.php">Add game</a>
    </nav>

    <div>
        This <?= $game['genre'] ?> game was released in the year <?= $game['release'] ?>.
        Overall it recieved <?= $game['rating'] ?> reviews. Platforms it released on:
    </div>
    <ul>
        <?php foreach($game['platform'] as $platform): ?>
            <li><?= $platform ?></li>
        <?php endforeach ?>
    </ul>
    <a href="datahandling-game-delete.php?id=<?= $game['id'] ?>">🗑️ Delete game</a>
</body>
</html>