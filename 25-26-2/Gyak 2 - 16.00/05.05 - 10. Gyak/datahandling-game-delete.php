<?php
require_once "functions.php";
if(isset($_GET['id'])) {
    new_storage('data/games')->delete($_GET['id']);
}
redirect('index.php');