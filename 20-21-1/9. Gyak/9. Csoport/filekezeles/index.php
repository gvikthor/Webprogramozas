<?php

echo file_get_contents('input.txt');

file_put_contents('input.txt', 'Csepereg az eső, lefolyik az arcomon');


$elnokjeloltek = json_decode(file_get_contents('adat.json'));
//var_dump($elnokjeloltek);

echo $elnokjeloltek[0]->kabinet[0];
$elnokjeloltek[1]->kabinet[] = 'Valaki ",';

file_put_contents('adat.json', json_encode($elnokjeloltek, JSON_PRETTY_PRINT));