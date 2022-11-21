<?php

var_dump(
    file_get_contents('help/something.txt')
);

file_put_contents('help/something.txt', 'What a nice day!');

var_dump(
    json_decode(file_get_contents('help/something.json'))
);

$array = [
    1,2,3,4,6,86,4453,34,536,67,7,65
];

$data = json_decode(file_get_contents('help/something.json'));
$data->name = 'Michael';
file_put_contents('help/something.json',json_encode($data, JSON_PRETTY_PRINT));