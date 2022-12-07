<?php
include_once 'functions.php';
session_start();
if(!user_is_logged_in()) redirect('index.php');

$movie_id = $_GET['id'] ?? '';
$movies = json_read('data/movies.json');
if(!isset($movies->$movie_id)) redirect('index.php');

$movie = $movies->$movie_id;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome Movie Database - <?=htmlspecialchars($movie->title)?></title>
</head>
<body>
    <h1><?=htmlspecialchars($movie->title)?></h1>
    <div><?=htmlspecialchars($movie->desc)?></div>
    <img href="<?=htmlspecialchars($movie->img)?>">
</body>
</html>