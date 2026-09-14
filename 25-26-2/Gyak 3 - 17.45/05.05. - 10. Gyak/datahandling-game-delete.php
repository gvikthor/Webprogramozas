<?php
require_once 'functions.php';

new_storage('data/games')->delete($_GET['id'] ?? '');
redirect('index.php');