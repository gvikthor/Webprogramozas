<?php

$something = [
    (object)[
        'name' => 'Susan',
        'age' => 25
    ],
    (object)[
        'name' => 'Michael',
        'age' => 25
    ],
    (object)[
        'name' => 'George',
        'age' => 25
    ]
];

echo(json_encode($something));