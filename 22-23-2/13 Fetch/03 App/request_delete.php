<?php
require_once 'functions.php';
require_once 'storage.php';

session_start();
if(!isset($_SESSION['user']) || ($_GET['id'] ?? '') == ''){
    redirect('index.php');
}

$movies_db = new JsonStorage('movies.json');
$movies_db->delete($_GET['id']);

redirect('index.php');