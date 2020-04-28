<?php

$a = file_get_contents("alma.txt");
var_dump($a);
file_put_contents("alma.txt","Esik az eső, hajlik a vessző");

echo "<br>";

$b = json_decode(file_get_contents("adat.json"));
var_dump($b);
$b->Bela->kor = $b->Bela->kor + 1;
echo $b->Bela->kor;
file_put_contents("adat.json", json_encode($b, JSON_PRETTY_PRINT));