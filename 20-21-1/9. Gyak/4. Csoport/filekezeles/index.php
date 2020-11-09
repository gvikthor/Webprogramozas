<?php

echo file_get_contents('pelda.txt');

file_put_contents('pelda.txt', 'Szakad az eső, de süt a nap, sok a szivárvány.');


$adatok = json_decode(file_get_contents('adatok.json'));
//var_dump($adatok);

echo $adatok[0]->beszamolok[1]->nev;

$adatok[0]->beszamolok[1]->nev = 'Búzai Tamás ",';

file_put_contents('adatok.json', json_encode($adatok, JSON_PRETTY_PRINT));