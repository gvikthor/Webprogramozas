<?php
session_start();
require_once 'functions.php';

if(!isset($_SESSION['user_id'])) {
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
    $errors[] = "Release year must be a number!";
} else {
    $release_int = intval($formdata->release);
    $release_float = floatval($formdata->release);

    if($release_int != $release_float) {
        $errors[] = "Release year must be a whole number!";
    } else if ($release_int < 1950 || $release_int > 2100) {
        $errors[] = "Release year must be between 1950 and 2100!";
    }
}

$valid_genres = ["shooter", "sport", "simulation", "strategy"];
if(!in_array($formdata->genre, $valid_genres)) {
    $errors[] = "Genre must be of the provided list!";
}

$valid_ratings = ["good", "bad"];
if(!in_array($formdata->rating, $valid_ratings)) {
    $errors[] = "Rating must be of the provided list!";
}

/*if(!array_all($formdata->platform, function($platform) {
    $valid_platforms = ["ps", "xbox", "linux", "windows"];
    return in_array($platform, $valid_platforms);
})) {*/
if(array_any($formdata->platform, function($platform) {
    $valid_platforms = ["ps", "xbox", "linux", "windows"];
    return !in_array($platform, $valid_platforms);
})) {
    $errors[] = "All platforms must be of the provided list!";
}

if(count($errors) > 0) {
    $_SESSION["errors"] = $errors;
    $_SESSION["status"] = "error";
    $_SESSION["values"] = $formdata;
} else {
    $_SESSION["status"] = "added";
    $formdata->release = intval($formdata->release); // ezt ne muszáj, de jobb lehet számként tárolni
    new_storage('data/games')->add($formdata);
}
redirect("page-newgame.php");
