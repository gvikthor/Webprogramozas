<?php
session_start();
require_once 'functions.php';
if(!auth_is_logged_in()) redirect('index.php');

$movie_id = $_GET['movie_id'] ?? '';
if(!movies_exsist([$movie_id])) redirect('index.php');

make_user_like_movie($_SESSION['user'], $movie_id);
redirect('index.php');