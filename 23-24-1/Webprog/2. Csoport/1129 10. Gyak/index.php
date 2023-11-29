<?php
require_once 'functions.php';
$storage = storage('data');

/*$storage->add((object)[
    "name" => "Győrffy Rezső",
    "age" => 23
]);*/

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
        Name: <input name="name"> <br>
        Age: <input name="age"> <br>
        <input type="submit" value="➕">
    </form>
</body>
</html>