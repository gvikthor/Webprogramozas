<?php
require_once 'functions.php';

session_start();
$form_data = (object)[
    'color' => trim($_GET['color'] ?? '')
];

$errors = [];

if($form_data->color != 'blue'){
    $errors[] = 'The color must be blue!';
}

if(count($errors) > 0){
    $_SESSION['errors'] = $errors;
}

redirect('index.php');