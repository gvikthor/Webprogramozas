<?php
session_start();
require_once 'functions.php';

// itt is el lehetne az adminosat játszani, hogy !$user['is_admin'] csak akkor a usert ugye ki kell szedni egy változóba
if(!isset($_SESSION['user_id'])) {
    redirect('index.php');
}

new_storage('data/games')->delete($_GET['id'] ?? '');
redirect('index.php');