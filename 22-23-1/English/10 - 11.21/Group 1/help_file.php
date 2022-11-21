<?php

var_dump(file_get_contents('help.txt'));

file_put_contents('help.txt', 'Apple apple apple');

var_dump(file_get_contents('localization/english/errors.json'));
var_dump(json_decode(file_get_contents('localization/english/errors.json')));

echo '<hr>';

$error_dict = json_decode(file_get_contents('localization/english/errors.json'));
echo $error_dict->uname_exists;

$error_dict->something_new = 'Something new';

//file_put_contents('localization/english/errors.json', json_encode($error_dict, JSON_PRETTY_PRINT));
file_put_contents(
    'localization/english/errors.json',
    json_encode([4,6,8,4,2,1], JSON_PRETTY_PRINT)
);