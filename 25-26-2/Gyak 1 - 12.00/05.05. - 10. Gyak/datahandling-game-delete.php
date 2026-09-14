<?php
require_once 'functions.php';

$id = $_GET['id'] ?? null;
if(!$id) {
    redirect('index.php');
}

$games_storage = new_storage('data/games');
$games_storage->delete($id);

redirect('index.php');