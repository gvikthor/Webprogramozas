<?php
require_once 'data.php';
require_once 'functions.php';

$id = $_GET['id'] ?? '';
$candidate = $candidates[$id] ?? null;

if(!isset($candidate)) redirect('index.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?= $candidate->name ?></h1>
    <div>Age: <?= $candidate->age ?></div>
    <h2>Experiences</h2>
    <ul>
        <?php foreach($candidate->experiences as $experience): ?>
            <li><?= $experience ?></li>
        <?php endforeach ?>
    </ul>
    <h2>Introduction</h2>
    <div><?= $candidate->introduction ?></div>
</body>
</html>
