<?php
require_once 'functions.php';
require_once 'storage.php';

session_start();
if(!isset($_SESSION['user'])){
    redirect('index.php');
}

// meg kéne nézni, hogy meg vannak-e adva a get paraméterek
// ha adott felhasználó csak adott filmet szerkeszthet,
// itt még egyszer utoljára ellenőrizni kell, hogy
// az az id neki szerkeszthető-e

$form_object = [
    'id' => $_GET['id'],
    'title' => $_GET['title'],
    'release' => $_GET['release']
];

$movies_db = new JsonStorage('movies.json');
$movies_db->update($form_object['id'], $form_object);
redirect('index.php');