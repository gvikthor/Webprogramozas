<?php
include_once 'functions.php';
session_start();
if(!user_is_logged_in()) redirect('../index.php');

$users = json_read('data/users.json');
$uid = $_SESSION['user_id'];

$filtered_movies = [];
foreach(($users->$uid)->movies as $movie){
    if($movie != $_GET['id']) $filtered_movies[] = $movie;
}
($users->$uid)->movies = $filtered_movies;

json_write('data/users.json', $users);

redirect('../index.php');
