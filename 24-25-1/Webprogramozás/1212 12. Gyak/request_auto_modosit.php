<?php
require_once 'support_fuggvenyek.php';
session_start();
$fid = $_SESSION['felhasznalo_id'] ?? null;

if (!isset($fid)) {
    atiranyit('page_login.php');
}

$felhasznalo_storage = uj_storage('adatok/felhasznalok');
$felhasznalo = $felhasznalo_storage->findById($fid);

$aid = $_GET['id'] ?? '';
// $_GET['id'] ellenőrzése, meg megnézni, hogy létezik-e ez az autó.

if(!$felhasznalo['admin']){
    atiranyit('index.php');
}

$form_data = [
    'id' => $aid,
    'marka' => $_GET['marka'] ?? '',
    'tipus' => $_GET['tipus'] ?? '',
    'evjarat' => $_GET['evjarat'] ?? '',
    'hasznalt' => isset($_GET['hasznalt']),
    'tulajdonos' => 'SYSTEM' // !!!! ha át lehetne állítani a tulajdonost, erre figyelni kéne!!!!
];

// $hibak = [];
// végigellenőriz ifekkel
// if count hiba == 0

uj_storage('adatok/autok')->update($aid, $form_data);
atiranyit("page_auto_reszletek.php?id=$aid");