<?php
require_once 'data.php';
require_once 'functions.php';

$id = $_GET['id'] ?? '';
$game = $games[$id] ?? null;

if(!isset($game)) {
    // vissza szeretném irányítani a felhasználót a főoldalra
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
    <h1><?= $game->title ?></h1>
    <div>Release year: <?= $game->year ?></div>
    <ul>
        <?php foreach($game->categories as $category): ?>
        <li><?= $category ?></li>
        <?php endforeach ?>
    </ul>
    <div><?= $game->description ?></div>
</body>
</html>