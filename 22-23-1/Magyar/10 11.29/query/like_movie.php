<?php
include_once 'functions.php';
session_start();
if(!user_is_logged_in()) redirect('../index.php');

$users = json_read('data/users.json');

$uid = $_SESSION['user_id'];
($users->$uid)->movies[] = $_GET['id']; // nem ellenőrizzük, hogy van-e ilyen film
json_write('data/users.json', $users);

redirect('../index.php');
