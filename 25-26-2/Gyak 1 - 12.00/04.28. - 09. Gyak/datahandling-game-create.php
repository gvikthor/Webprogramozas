<?php
session_start();
require_once 'functions.php';

$formdata = (object)[
    "gamename" => trim($_GET['gamename'] ?? ''),
    "releaseyear"  => trim($_GET['releaseyear'] ?? ''),
    "category"  => trim($_GET['category'] ?? ''),
    "rating"  => trim($_GET['rating'] ?? ''),
    "platform"  => $_GET['platform'] ?? [],
];


// Nem üres
// A szám legyen szám
// Category, rating, platform az engedélyezett listánkból való legyen

$errors = [];

if (strlen($formdata->gamename) < 3) {
    $errors[] = 'Game name must contain at least 3 letters!';
}

if (!is_numeric($formdata->releaseyear)) {
    $errors[] = 'Release year must be a number!';
} else {
    $release_int = intval($formdata->releaseyear);
    $release_flt = floatval($formdata->releaseyear);
    if ($release_flt != $release_int) {
        $errors[] = 'Release year must be a whole number!';
    } else if ($release_int < 1940 || $release_int > 2100) {
        $errors[] = 'Release year must be between 1940 and 2100!';
    }else{
        $formdata->releaseyear = $release_int;
    }
}

$valid_categories = ['strategy', 'sport', 'simulation', 'shooter'];
if (!in_array($formdata->category, $valid_categories)) {
    $errors[] = 'Category must be of the given list!';
}

$valid_ratings = ['good', 'bad'];
if (!in_array($formdata->rating, $valid_ratings)) {
    $errors[] = 'Rating must be of the given list!';
}

/*if (array_all($formdata->platform, function ($platform) { // ugyanazt csinálja mint a lentebbi, csak kifordítva az állítást
    $valid_platforms = ['ps', 'xbox', 'win', 'linux'];
    return in_array($platform, $valid_platforms);
})) {
*/
if (array_any($formdata->platform, function ($platform) {
    $valid_platforms = ['ps', 'xbox', 'win', 'linux'];
    return !in_array($platform, $valid_platforms);
})) {
    $errors[] = 'Platform must be of the given list!';
}


if(count($errors) == 0) {
    // hozzáadjuk az új játékot (todo)
    redirect('index.php?result=ok');
} else {
    $_SESSION['errors'] = $errors;
    $_SESSION['values'] = $formdata;
    redirect('index.php?result=error');
}