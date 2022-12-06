<?php
session_start();
require_once 'functions.php';

if(!auth_is_logged_in()) redirect('index.php');
if(!get_movie_by_id($_GET['movie_id'])) redirect('index.php');

dislike_movie($_SESSION['user_id'], $_GET['movie_id']);
redirect('index.php');
