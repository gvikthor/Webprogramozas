<?php
require_once 'functions.php';

$form_object = (object)[
    'name' => $_POST['name'] ?? ''
];

// Ellenőrzések

new_storage('data')->add($form_object);
redirect('index.php');