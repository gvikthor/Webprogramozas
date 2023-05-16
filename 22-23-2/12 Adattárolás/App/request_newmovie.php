<?php
require_once 'functions.php';
require_once 'storage.php';

session_start();
if(!isset($_SESSION['user'])){
    redirect('index.php');
}

$form_object = (object)[
    'title' => $_GET['title'],
    'release' => $_GET['release']
];

$movies_db = new JsonStorage('movies.json');
add_with_id([
    'title' => $form_object->title,
    'release' => $form_object->release
], $movies_db);
redirect('index.php');