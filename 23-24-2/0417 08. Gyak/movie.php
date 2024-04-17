<?php

$movies = [
    (object)[
        'id' => 0,
        'title' => 'Star Wars',
        'desc' => 'Farmboy becomes rebel and blows up a moon.'
    ],
    (object)[
        'id' => 1,
        'title' => 'Lord of the Rings',
        'desc' => 'Jewlery causes political issues in a multicultural wolrd.'
    ],
    (object)[
        'id' => 2,
        'title' => 'Titanic',
        'desc' => 'They died :('
    ],
];

$errors = [];
$id = trim($_GET['id'] ?? null);

if(is_null($id) || strlen($id) == 0){
    $errors[] = 'The ID is required!';
} else if(!is_numeric($id)) {
    $errors[] = 'The ID must be a number!';
} else if(intval($id) != floatval($id)) {
    $errors[] = 'The ID must be a whole number!';
} else if(intval($id) >= count($movies)) {
    $errors[] = 'The ID must be smaller than '.count($movies).'!';
} else if(intval($id) < 0) {
    $errors[] = 'The ID must be atleast 0!';
} else {
    $movie = $movies[$id];
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
    <?php if(count($errors) == 0): ?>
        <h1><?=$movie->title?></h1>
        <div><?=$movie->desc?></div>
    <?php else: ?>
        <ul>
            <?php foreach($errors as $index => $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>