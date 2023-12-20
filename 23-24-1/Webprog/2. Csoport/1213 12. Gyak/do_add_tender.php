<?php
session_start();
require_once 'functions.php';
login_guard('page_login.php');
$is_minister = is_minister_by_uname($_SESSION['user']);
if(!$is_minister){
    redirect('index.php');
}

$form_data = (object)[
    'name' => trim($_POST['name'] ?? ''),
    'desc' => trim($_POST['description'] ?? ''),
    'img' => '',
    'minister' => get_user_id_by_uname($_SESSION['user'])
];

/*
Ellenőrizzük hogy nem üres meg nem hülyeség meg stb
*/

storage('data_tenders')->add($form_data);

redirect('index');