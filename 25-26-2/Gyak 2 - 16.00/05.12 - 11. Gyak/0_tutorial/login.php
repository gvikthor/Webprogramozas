<?php
session_start();
require_once 'functions.php';

// $_SESSION['kiscica'] = 'miau'; // ez nem beszéldes, de mutatja, hogy bármi jelentheti azt, hogy valaki be van jelentkezve
$_SESSION['user_id'] = 'abc123';

redirect('index.php');