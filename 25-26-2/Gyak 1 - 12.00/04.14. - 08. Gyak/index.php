<?php
require_once 'data.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Candidates</title>
</head>
<body>
    <h1>Candidate page</h1>
    <ul>
        <?php foreach($people as $person): ?>
        <li><a href="candidate.php?id=<?= $person->id  ?>"><?= $person->name ?></a></li>
        <?php endforeach ?>
    </ul>
</body>
</html>