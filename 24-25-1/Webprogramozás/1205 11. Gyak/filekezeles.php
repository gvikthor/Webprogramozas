<?php
require_once 'storage.php';

$film_json_kezelo = new JsonIO('filmek.json');
$film_file_kezelo = new Storage($film_json_kezelo);

/* visszaadja az id-t
var_dump(
    $film_file_kezelo->add([
        'cim' => 'Inception',
        'rendezo' => 'Christopher Nolan',
        'ev' => 2010
    ])
);
*/

/*
// 6751c5547f849 <-- ez amit nekem generált, neked más lesz
var_dump(
    $film_file_kezelo->findById('6751c5547f849')
);
*/

/*
$film_file_kezelo->add([
    'cim' => 'Tenet',
    'rendezo' => 'Christopher Nolan',
    'ev' => 2023
]);

$film_file_kezelo->add([
    'cim' => 'Star Wars',
    'rendezo' => 'George Lucas',
    'ev' => 1977
]);

$film_file_kezelo->add([
    'cim' => 'Interstellar',
    'rendezo' => 'Christopher Nolan',
    'ev' => 2014
]);
*/

/*
var_dump(
    $film_file_kezelo->findAll([
        'rendezo' => 'Christopher Nolan'
    ])
);
*/

/*
var_dump(
    $film_file_kezelo->findOne([
        'rendezo' => 'Christopher Nolan'
    ])
);
*/

/* vigyázz, felülírja az egész objektumot/tömböt
$film_file_kezelo->update('6751c672a14dd', [
    'ev' => 2012
]);
*/

/*
$film_file_kezelo->delete('6751c672a14dd');
*/

// JS filter függvényx
/*
var_dump(
    $film_file_kezelo->findMany(function ($film) {
        return $film['ev'] > 2000;
    })
);*/

/* Így nézne ki a form hozzáadás oldal
$form_assoc = [
    'cim' => trim($_GET['cim'] ?? '')
];
$hibak = [];

// ellenőrzések
if($_GET['cim']){
    ...
}

if(count($hibak) == 0) {
    $film_file_kezelo->add($form_assoc);
}
*/