<?php
die;

$uj_film = (object)[
    'title' => 'Dune 2',
    'year' => 2024,
    'director' => 'Dennis Vilelenlelneve',
    'actors' => ['Thimothee Chalagmange', 'Zendaya'],
    'description' => 'Paul gets high on spice. Zendaya is angry.'
];

$filmek = json_decode(file_get_contents('filmek.json'));
$filmek[] = $uj_film;
file_put_contents('filmek.json', json_encode($filmek, JSON_PRETTY_PRINT));
