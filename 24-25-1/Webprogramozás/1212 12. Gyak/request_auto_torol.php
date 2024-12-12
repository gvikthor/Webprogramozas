<?php
require_once 'support_fuggvenyek.php';
session_start();
$fid = $_SESSION['felhasznalo_id'] ?? null;

if (!isset($fid)) {
    atiranyit('page_login.php');
}

$felhasznalo_storage = uj_storage('adatok/felhasznalok');
$felhasznalo = $felhasznalo_storage->findById($fid);

if(!$felhasznalo['admin']){
    atiranyit('index.php');
}

$form_data = [
    'id' => $_GET['id'] ?? ''
];

// $hibak = [];
// végigellenőriz ifekkel
// if count hiba == 0

uj_storage('adatok/autok')->delete($form_data['id']);
atiranyit('index.php');