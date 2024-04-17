<?php

function clear_get_parameter($key, $default = null)
{
    return trim($_GET[$key] ?? $default);
}

$form_data = (object)[
    'title' => clear_get_parameter('title'),
    'year' => clear_get_parameter('year'),
    'genre' => clear_get_parameter('genre'),
    'opinions' => $_GET['opinions'] ?? [],
    'desc' => clear_get_parameter('desc')
];

$valid_genres = ['comedy', 'crime', 'fantasy', 'scifi'];
$valid_opinions = ['scary', 'wholesome', 'sad', 'funny'];

$errors = [];
// $errors.push('valami')   -> ilyen nincs
// $errors[] = 'valami'     -> ez a push


// Title
if (is_null($form_data->title) || strlen($form_data->title) == 0) {
    $errors[] = 'The title is required!';
}

// Year
if (is_null($form_data->year) || strlen($form_data->year) == 0) {
    $errors[] = 'The year is required!';
} else if (!is_numeric($form_data->year)) {
    $errors[] = 'The year must be a number!';
} else if (intval($form_data->year) != floatval($form_data->year)) {
    $errors[] = 'The year must be a whole number!';
} else if (intval($form_data->year) > 2024) {
    $errors[] = 'The year must be smaller than 2025!';
} else if (intval($form_data->year) < 1600) {
    $errors[] = 'The year must be atleast 1600!';
}

// Genre
if (is_null($form_data->genre) || strlen($form_data->genre) == 0) {
    $errors[] = 'The genre is required!';
} else if (!in_array($form_data->genre, $valid_genres)) {
    $errors[] = 'The genre is invalid!';
}

// Opinions
if(count($form_data->opinions) == 0){
    $errors[] = 'At least one opinion is required!';
} else if(
    // Ha volt hamis a tömbben, az azt jelenti, hogy volt olyan opinion az űrlapban, ami nincs a valid opinionök közt
    in_array(false, array_map(function ($elem) use ($valid_opinions) {
        return in_array($elem, $valid_opinions);
    }, $form_data->opinions))
) {
    $errors[] = 'Some opinions are invalid!';
}

// Desc
if (is_null($form_data->desc) || strlen($form_data->desc) == 0) {
    $errors[] = 'The description is required!';
} else if(strlen($form_data->desc) < 5) {
    $errors[] = 'Description must be atleast 5 characters long!';
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
        Title: <?=htmlspecialchars($form_data->title)?> <br>
        Year: <?=htmlspecialchars($form_data->year)?> <br>
        Genre: <?=htmlspecialchars($form_data->genre)?> <br>
        Opinions: <ul>
            <?php foreach($form_data->opinions as $opinion): ?>
                <li><?=htmlspecialchars($opinion)?></li>
            <?php endforeach ?>
        </ul>
        Description: <?=htmlspecialchars($form_data->desc)?> <br>
    <?php else: ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>