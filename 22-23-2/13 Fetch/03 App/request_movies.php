<?php
require_once 'storage.php';
$movies_db = new JsonStorage('movies.json');
$movies = $movies_db->findAll();
$which_page = intval($_GET['page']);
$page_size = intval($_GET['pagesize']);

$selected_movies = [];
$i = 0;
foreach($movies as $movie){
    if($page_size * $which_page <= $i){
        if($page_size * ($which_page+1) <= $i){
            break;
        }
        $selected_movies[] = $movie;
    }
    $i++;
}


echo json_encode($selected_movies);