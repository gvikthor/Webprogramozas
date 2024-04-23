<?php
require_once 'functions.php';
session_start();

$form_data = (object)[
    'test1' => trim($_GET['test1'] ?? ''),
    'test2' => trim($_GET['test2'] ?? '')
];

$errors = [];

if($form_data->test1 != 'apple'){
    $errors[] = 'Test1 is incorrect!';
}

if($form_data->test2 != 'peach'){
    $errors[] = 'Test2 is incorrect!';
}

$_SESSION['had_errors'] = count($errors) > 0;
$_SESSION['errors'] = $errors;

redirect('index.php');
