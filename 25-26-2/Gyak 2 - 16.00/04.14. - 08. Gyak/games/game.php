<?php
require_once 'data.php';

function redirect($target) {
    header("Location: $target");
    die;
}

$id = $_GET['id'];


$game = $games[$id] ?? null;

if(!isset($game)) redirect('index.php');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?= $game->name ?></h1>
    <div>Release year: <?= $game->year ?></div>
</body>
</html>