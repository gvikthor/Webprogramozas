<?php

// ez valami adatbázis lekérés lenne
$games = [
    ['title' => 'Super Mario', 'year' => 1960],
    ['title' => 'Alma', 'year' => 2000],
    ['title' => 'Körte', 'year' => 1999],
    ['title' => 'Szilva', 'year' => 2024]
];

echo json_encode($games);