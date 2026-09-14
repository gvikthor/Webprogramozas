<?php
session_start();
require_once 'functions.php';

if(!isset($_SESSION['user_id'])) {
    redirect('index.php');
    //redirect("page-gamedetails.php?id=ide meg az id-t beírod");
}

if(isset($_GET['id'])) {
    new_storage('data/games')->delete($_GET['id']);
}
redirect('index.php');