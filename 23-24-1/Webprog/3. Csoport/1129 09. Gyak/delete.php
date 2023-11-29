<?php
require_once 'functions.php';

$id = $_GET['id'] ?? '';
$storage = new_storage('data');
if($storage->findById($id)){
    $storage->delete($id);
}
redirect('index.php');