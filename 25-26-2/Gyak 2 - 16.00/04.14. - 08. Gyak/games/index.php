<?php
require_once 'data.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Games</h1>

    <ul>
    <?php foreach($games as $game): ?>
        <li><a href="game.php?id=<?= $game->id ?>"><?= $game->name ?></a> (<?= $game->year ?>)</li>
    <?php endforeach ?>
    </ul>


</body>
</html>