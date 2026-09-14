<?php
session_start();
require_once 'functions.php';

$is_logged_in = isset($_SESSION['user_id']) && strlen($_SESSION['user_id']) > 0;
if(!$is_logged_in){
    redirect('index.php');
}

$id = $_GET['id'] ?? null;
if(!$id) {
    redirect('index.php');
}

$games_storage = new_storage('data/games');
$games_storage->delete($id);

redirect('index.php');