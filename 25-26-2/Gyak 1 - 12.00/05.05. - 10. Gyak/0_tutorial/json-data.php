<?php

//file_put_contents('kiscica.txt', 'A cica nyávog');

/*
$example_data = (object)[
    'name' => 'Peti',
    'age' => 29,
    'friends' => ['Gergő', 'Andi', 'Áron']
];

file_put_contents('data.json', json_encode($example_data)); // a json_encode ugyanaz, mint javascirptben volt a JSON.stringify

$new_example_data = json_decode(file_get_contents('data.json'));
var_dump($new_example_data);
*/

/*
$example_data = (object)[
    0 => (object)[
        'name' => 'Peti',
        'age' => 29,
        'friends' => ['Gergő', 'Andi', 'Áron']
    ],
    1 => (object)[
        'name' => 'Bálint',
        'age' => 25,
        'friends' => ['Máté']
    ]
];
file_put_contents('data.json', json_encode($example_data));
*/

$data = json_decode(file_get_contents('data.json'), associative: true);
$data[0]['name'] = 'Péter';
file_put_contents('data.json', json_encode($data));