<?php
require_once 'filmek.php';
$index = $_GET['id'];
$film = $filmek[$index];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?=$film->title?> (<?=$film->year?>)</h1>
    <div><?=$film->description?></div>
</body>
</html>