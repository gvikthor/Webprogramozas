<?php
require_once 'functions.php';
$all_games = new_storage('data/games')->findAll();
echo json_encode($all_games);