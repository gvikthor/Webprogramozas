<?php
session_start();
require_once 'functions.php';
if(!auth_is_logged_in() || !is_admin($_SESSION['user'] ?? '')) redirect('index.php');

$movie_id = $_GET['movie_id'] ?? '';
if(movies_exsist([$movie_id])) redirect('index.php');

//do several checks here!
add_movie((object)[
    'title' => $_GET['title'] ?? '',
    'id' => $movie_id,
    'release' => intval($_GET['release']),
    'description' => $_GET['desc']
]);
redirect('index.php');
