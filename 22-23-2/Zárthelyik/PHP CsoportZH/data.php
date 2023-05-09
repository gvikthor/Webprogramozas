<?php

// Ha objektumokkal szerenél dolgozni
$o_tasks = [
    (object)[
        'id' => 1,
        'description' => 'Az A és B halmazokról tudjuk, hogy A = {2; 3; 5}, A ∩ B = {2; 3}, A ∪ B = {1; 2; 3; 4; 5}. Elemei felsorolásával adja meg a B halmazt!',
        'image' => '',
        'max_points' => 2,
        'answer' => '1,2,3,4'
    ],
    (object)[
        'id' => 2,
        'description' => 'Hány éle van egy tízpontú teljes gráfnak?',
        'image' => '',
        'max_points' => 2,
        'answer' => '45'
    ],
    (object)[
        'id' => 3,
        'description' => 'Melyik az a szám, amely 10-zel kisebb az ellentettjénél?',
        'image' => '',
        'max_points' => 2,
        'answer' => '-5'
    ],
    (object)[
        'id' => 4,
        'description' => 'Válassza ki az alábbiak közül a valós számok halmazán értelmezett x -> (x - 2)² függvény grafikonját!',
        'image' => 'task4.png',
        'max_points' => 2,
        'answer' => 'C'
    ]
];

// Ha tömbbel szeretnél dolgozni
$a_tasks = [
    [
        'id' => 1,
        'description' => 'Az A és B halmazokról tudjuk, hogy A = {2; 3; 5}, A ∩ B = {2; 3}, A ∪ B = {1; 2; 3; 4; 5}. Elemei felsorolásával adja meg a B halmazt!',
        'image' => '',
        'max_points' => 2,
        'answer' => '1,2,3,4'
    ],
    [
        'id' => 2,
        'description' => 'Hány éle van egy tízpontú teljes gráfnak?',
        'image' => '',
        'max_points' => 2,
        'answer' => '45'
    ],
    [
        'id' => 3,
        'description' => 'Melyik az a szám, amely 10-zel kisebb az ellentettjénél?',
        'image' => '',
        'max_points' => 2,
        'answer' => '-5'
    ],
    [
        'id' => 4,
        'description' => 'Válassza ki az alábbiak közül a valós számok halmazán értelmezett x -> (x - 2)² függvény grafikonját!',
        'image' => 'task4.png',
        'max_points' => 2,
        'answer' => 'C'
    ]
];