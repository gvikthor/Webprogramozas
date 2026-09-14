<?php
session_start();
require_once 'functions.php';

$id = $_GET['id'] ?? null;
if(!$id) {
    redirect('index.php');
}

$game = new_storage('data/games')->findById($id);
if(!$game) {
    redirect('index.php');
}

$is_logged_in = isset($_SESSION['user_id']);
$user = [];
if($is_logged_in) {
    $user = new_storage('data/users')->findById($_SESSION['user_id']);
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
    <?php navMenu('index', $is_logged_in) ?>

    <div>
        This <?= $game['genre'] ?> game was released in the year <?= $game['release'] ?>.
        Overall it recieved <?= $game['rating'] ?> reviews. Platforms it released on:
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