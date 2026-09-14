<?php
session_start();
require_once 'functions.php';

$id = $_GET['id'] ?? null;
if(!$id) {
    redirect('index.php');
}

$games_storage = new_storage('data/games');
$game = $games_storage->findById($id);

if(!$game) {
    redirect('index.php');
}

$is_logged_in = isset($_SESSION['user_id']) && strlen($_SESSION['user_id']) > 0;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Game: <?= $game['gamename'] ?> (<?= $game['releaseyear'] ?>)</h1>
    <nav>
        <a href="index.php">Home</a>
        <?php if($is_logged_in): ?>
            <a href="page-create-game.php">Add game</a>
        <a href="datahandling-user-logout.php">Logout</a>
        <?php else: ?>
        <a href="page-authenticate.php">Login/Register</a>
        <?php endif ?>
    </nav>
    <div>
        <?= $game['category'] ?> <br>
        <?= $game['rating'] == 'good' ? '🐻‍❄️' : '😥' ?> <br>
    </div>
    <ul>
        <?php foreach($game['platform'] as $platform): ?>
            <li><?= $platform ?></li>
        <?php endforeach ?>
    </ul>
    <?php if($is_logged_in): ?>
    <a href="datahandling-game-delete.php?id=<?= $game['id'] ?>">🗑️ Delete game</a>
    <?php endif ?>
</body>
</html>