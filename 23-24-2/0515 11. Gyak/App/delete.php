<?php
require_once 'functions.php';
session_start();
if(!isset($_SESSION['user']) || !is_admin($_SESSION['user'])){
    redirect('index.php');
}

$gameid = trim($_GET['id']) ?? '-1';
delete_game_by_id($gameid);
redirect('index.php');