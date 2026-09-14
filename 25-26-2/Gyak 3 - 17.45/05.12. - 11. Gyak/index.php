<?php
session_start();
require_once 'functions.php';
$is_logged_in = isset($_SESSION['user_id']);

$games = new_storage('data/games')->findAll();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Home</h1>
    <?php nav_menu('index', $is_logged_in) ?>

    <ul>
    <?php foreach($games as $game): ?>
        <li><a href="page-gamedetails.php?id=<?= $game['id'] ?>"> <?= $game['gamename'] ?> </a></li>
    <?php endforeach ?>
    </ul>
</body>
</html>