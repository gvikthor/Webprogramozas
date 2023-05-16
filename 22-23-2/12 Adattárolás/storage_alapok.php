<?php

require_once 'storage.php';
$movie_database = new JsonStorage('movies.json');

/*
$new_movie = [
    'id' => '',
    'title' => 'Guardians of the Galaxy vol.3',
    'release' => 2023
];
$id = $movie_database->add($new_movie);
$new_movie['id'] = $id;
$movie_database->update($id, $new_movie);
*/
$movie_sw = $movie_database->findOne([
    'release' => 2023
]);
var_dump($movie_sw);

$movies = $movie_database->findAll();
var_dump($movies);