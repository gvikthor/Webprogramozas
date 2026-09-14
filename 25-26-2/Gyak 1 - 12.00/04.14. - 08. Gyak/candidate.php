<?php
require_once 'functions.php';
require_once 'data.php';
$id = $_GET['id'] ?? '';

if(!is_numeric($id)) redirect('index.php?error=Not numeric id');
if($id < 0) redirect('index.php?error=Too small id');
if($id >= count($people)) redirect('index.php?error=Too large id');




$person = $people[$_GET['id']];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Candidate</title>
</head>
<body>
    <h1><a href="index.php">◀️</a> <?= $person->name ?></h1>
    <div>Age: <?= $person->age ?></div>
    <h2>Qualifications</h2>
    <ul>
        <?php foreach($person->qualifications as $quali): ?>
        <li><?= $quali ?></li>
        <?php endforeach ?>
    </ul>
    <h2>Introduction</h2>
    <div><?= $person->introduction ?></div>
</body>
</html>