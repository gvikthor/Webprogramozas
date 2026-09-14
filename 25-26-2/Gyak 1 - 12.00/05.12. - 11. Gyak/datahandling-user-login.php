<?php
session_start();
require_once 'functions.php';

$is_logged_in = isset($_SESSION['user_id']) && strlen($_SESSION['user_id']) > 0;
if ($is_logged_in) {
    redirect('index.php');
}

$user_storage = new_storage('data/users');

$form_data = (object)[
    'uname' => trim($_POST['uname'] ?? ''),
    'pword' => $_POST['pword'] ?? ''
];

$user = $user_storage->findOne(['uname' => $form_data->uname]);

// a user storage nem objecktumot ad vissza, hanem asszociatív tömböt
// theát az elemei $elem['valami'] nem pedig $elem->valami
// ez átírható a functions_storage.php-ban ha valakit zavar
if (password_verify($form_data->pword, $user['pword'])) {
    $_SESSION['user_id'] = $user['id'];
    redirect('index.php');
} else {
    $_SESSION['errors'] = 'No matching username-password pair!';
    redirect('page-authenticate.php');
}
