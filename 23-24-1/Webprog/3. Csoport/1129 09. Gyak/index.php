<?php
require_once('functions.php');
$storage = new_storage('data');
$teachers = $storage->findAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <?php foreach($teachers as $teacher): ?>
            <li><?=$teacher->name?> <a href="delete.php?id=<?=$teacher->id?>">🚯</a></li>
        <?php endforeach ?>
    </ul>
    <form action="add.php" method="POST">
        <input name="name">
        <input type="submit" value="➕">
    </form>
</body>
</html>