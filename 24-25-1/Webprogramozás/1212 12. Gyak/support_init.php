<?php
die;

require_once 'support_fuggvenyek.php';

$auto_storage = uj_storage('adatok/autok');
$auto_storage->add([
    'marka' => 'Opel',
    'tipus' => 'Astra H',
    'evjarat' => 2005,
    'hasznalt' => true,
    'tulajdonos' => 'SYSTEM'
]);

$felhasznalo_storage = uj_storage('adatok/felhasznalok');
$felhasznalo_storage->add([
    'nev' => 'admin',
    'jelszo' => password_hash('admin', PASSWORD_DEFAULT),
    'admin' => true
]);
$felhasznalo_storage->add([
    'nev' => 'peti',
    'jelszo' => password_hash('peti', PASSWORD_DEFAULT),
    'admin' => false
]);