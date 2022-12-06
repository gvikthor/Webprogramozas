<?php
session_start();
require_once 'functions.php';
if(!auth_is_logged_in()) redirect('index.php');

$movie_id = $_GET['movie_id'] ?? '';
if(!movies_exsist([$movie_id])) redirect('index.php');

$movie = get_all_movies()->$movie_id;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome cinema page - <?=$movie->title?></title>
</head>
<body>
    <form action="query_logout.php">
        <input type="hidden" name="origin" value="index.php">
        <input type="submit" value="Logout">
    </form>
    <h1><?=$movie->title?></h1>
    <div>Release date: <?=$movie->release?></div>
    <div><?=htmlspecialchars($movie->description)?></div>
</body>
</html>