<?php
include_once 'functions.php';
session_start();
if(!user_is_logged_in()) redirect('../index.php');
if(!user_is_admin($_SESSION['user_id'])) redirect('../index.php');

// ellenőrizzük a GET paramétereket
$form_data = (object)[
    'id' => $_GET['id'] ?? '',
    'title' => $_GET['title'] ?? '',
    'desc' => $_GET['desc'] ?? '',
    'img' => $_GET['img'] ?? ''
];

//ellenőrizzük az egyediséget, követelményeket
/*
*
*
*
*
*/

//ha nincs error
$movies = json_read('data/movies.json');
$new_id = $form_data->id;
$movies->$new_id = $form_data;
json_write('data/movies.json', $movies);

redirect('../index.php');