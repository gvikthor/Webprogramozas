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
    'marka' => $_GET['marka'] ?? '',
    'tipus' => $_GET['tipus'] ?? '',
    'evjarat' => $_GET['evjarat'] ?? '',
    'hasznalt' => isset($_GET['hasznalt']),
    'tulajdonos' => 'SYSTEM'
];

// $hibak = [];
// végigellenőriz ifekkel
// if count hiba == 0

uj_storage('adatok/autok')->add($form_data);
atiranyit('index.php');