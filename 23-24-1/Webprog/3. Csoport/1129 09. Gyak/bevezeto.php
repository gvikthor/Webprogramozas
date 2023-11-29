<?php
require_once 'Storage.php';

$storage = new Storage(new JsonIO('data.json'));
$newElement = (object)[
    'name' => 'Programozás',
    'teacher' => 'Báthory Gergő'
];
//$storage->add($newElement);
var_dump(
    $storage->findAll()
);

// CRUD