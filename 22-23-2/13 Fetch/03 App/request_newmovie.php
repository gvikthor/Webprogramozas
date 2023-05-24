<?php
require_once 'functions.php';
require_once 'storage.php';

session_start();
if(!isset($_SESSION['user'])){
    http_response_code(401);
    echo 'You must be logged in to add movies!';
    die;
    //redirect('index.php');
}

$form_object = (object)[
    'title' => $_GET['title'],
    'release' => $_GET['release']
];

try{
    $movies_db = new JsonStorage('movies.json');
    add_with_id([
        'title' => $form_object->title,
        'release' => $form_object->release
    ], $movies_db);
}catch(error){
    http_response_code(500);
    echo 'Error when adding to the database!';
    die;
}

http_response_code(200);
echo 'OK';
//redirect('index.php');