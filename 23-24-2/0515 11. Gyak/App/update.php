<?php
require_once 'functions.php';
session_start();
if(!isset($_SESSION['user']) || !is_admin($_SESSION['user'])){
    redirect('index.php');
}

$form_data = (object)[
    'id' => trim($_POST['id'] ?? ''),
    'title' => trim($_POST['title'] ?? ''),
    'description' => trim($_POST['description'] ?? ''),
    'year' => intval(trim($_POST['year'] ?? '')),
    'imageurl' => trim($_POST['imageurl'] ?? '')
];

// ellenőrzéseket csináljunk, mert az adminról is azt feltételezzük, hogy rosszindulatú

update_game(
    $form_data->id,
    $form_data->title,
    $form_data->description,
    $form_data->year,
    $form_data->imageurl
);

redirect('index.php');