<?php
require_once 'functions.php';

if(!key_exists('come_back_here', $_POST)){
    redirect('index.php');
}

// checking whether user exists
// checking whether password is correct
// log in the user

//header('index.php');
redirect($_POST['come_back_here']);