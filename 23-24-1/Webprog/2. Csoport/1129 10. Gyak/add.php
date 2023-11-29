<?php
require_once 'functions.php';

$form_data = (object)[
    'name' => trim($_POST['name'] ?? ''),
    'age' => intval($_POST['age'] ?? 20)
];

// ellenőrzések

if(true){ // ha nem volt hiba
    storage('data')->add($form_data);
}else{
    // sessionbe hibák írása
}

redirect('index.php');