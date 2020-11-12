<?php

echo file_get_contents('pelda.txt');

file_put_contents('pelda.txt', 'Esik az eső, sok a szivárvány.');

$adatok = json_decode(file_get_contents('adat.json'));

//var_dump($adatok);

echo $adatok[0]->nev;

/*
$adatok[1]->targyak[] = (object)[
    "targynev" => "Analízis 2.",
    "targykod" => "IP18-ANAL2EA"
];
*/

$adatok[1]->nev = 'Szuts Nandi"';

file_put_contents('adat.json', json_encode($adatok, JSON_PRETTY_PRINT));
