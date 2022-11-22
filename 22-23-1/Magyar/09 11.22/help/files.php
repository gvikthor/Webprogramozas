<?php

/*var_dump(
    file_get_contents('help/minta.txt')
);*/

//file_put_contents('help/minta.txt','Borús az idő.');

$data = json_decode(file_get_contents('help/minta.json'));

//var_dump($data->tantargyak[0]);

$data->nev = '"';
file_put_contents('help/minta.json', json_encode($data, JSON_PRETTY_PRINT));