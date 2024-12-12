<?php
require_once 'support_fuggvenyek.php';
session_start();

$form_data = [
    'fnev' => $_POST['fnev'] ?? '',
    'jszo' => $_POST['jszo'] ?? ''
];

$felhasznalo_storage = uj_storage('adatok/felhasznalok');
$felhasznalo = $felhasznalo_storage->findOne([
    'nev' => $form_data['fnev']
]);

$hibak = [];

if(
    !isset($felhasznalo) ||
    !password_verify($form_data['jszo'], $felhasznalo['jelszo'])
){
    $hibak[] = 'Hibás felhasználónév vagy jelszó!';
}


if(count($hibak) == 0){
    $_SESSION['felhasznalo_id'] = $felhasznalo['id'];
    atiranyit('index.php');
}else{
    $_SESSION['hibak'] = $hibak;
    atiranyit('page_login.php');
}