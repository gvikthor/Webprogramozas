<?php

// file beolvasás
$data = [
    (object)[
        'name' => 'Peter',
        'age' => 25
    ],
    (object)[
        'name' => 'Steve',
        'age' => 20
    ],
    (object)[
        'name' => 'George',
        'age' => 30
    ],
    (object)[
        'name' => 'Laure',
        'age' => 24
    ]
];

echo  json_encode($data);