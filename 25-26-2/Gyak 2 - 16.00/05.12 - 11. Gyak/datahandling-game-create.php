<?php
session_start();
require_once 'functions.php';

if(!isset($_SESSION['user_id'])){
    redirect('index.php');
}


$formdata = (object)[
    "gamename" => trim($_GET["gamename"] ?? ""),
    "release" => trim($_GET["release"] ?? ""),
    "genre" => trim($_GET["genre"] ?? ""),
    "rating" => trim($_GET["rating"] ?? ""),
    "platform" => $_GET["platform"] ?? []
];

$errors = [];

if(strlen($formdata->gamename) < 3) {
    $errors[] = "Game name must be atleast 3 letters!";
}

if(!is_numeric($formdata->release)) {
    $errors[] = "Game release year must be a number!";
} else {
    $release_int = intval($formdata->release);
    $release_float = floatval($formdata->release);
    if($release_int != $release_float) {
        $errors[] = "Game release year must be a whole number!";
    } else if($release_int < 1950 || $release_int > 2100) {
        $errors[] = "Game release year must be between 1950 and 2100!";
    }
}

$valid_genres = ["shooter", "sport", "strategy", "simulation"];
if(!in_array($formdata->genre, $valid_genres)) {
    $errors[] = "Genre must be of the given list!";
}

$valid_rating = ["good", "bad"];
if(!in_array($formdata->rating, $valid_rating)) {
    $errors[] = "Rating must be of the given list!";
}

/*if(!array_all($formdata->platform, function($platform) { // ugyanaz a kettő, csak fordított logikával
    $valid_platforms = ["windows", "linux", "xbox", "ps"];
    return in_array($platform, $valid_platforms);
})) {*/
if(array_any($formdata->platform, function($platform) {
    $valid_platforms = ["windows", "linux", "xbox", "ps"];
    return !in_array($platform, $valid_platforms);
})) {
    $errors[] = "The platforms must be selected from the given list!";
}

if(count($errors) > 0){
    //$_SESSION["success"] = false;
    $_SESSION["result"] = "errors";
    $_SESSION["errors"] = $errors;
    $_SESSION["game"] = $formdata;
    redirect('page-addgame.php');
} else {
    //$_SESSION["success"] = true;
    //$_SESSION["result"] = "saved";

    $formdata->release = intval($formdata->release); // szeretném számként eltárolni a megjelenés évét, hogy kereshessek mondjuk 2000 utáni játékokra
    $game_storage = new_storage('data/games');
    $game_storage->add($formdata);
    // new_storage('data/games')->add($formdata); // működik egyetlen sorban, nem kell kiszedni külön változóba
    redirect('index.php');
}