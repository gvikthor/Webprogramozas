<?php

echo file_get_contents("alma.txt");
file_put_contents("alma.txt","Milyen szép ez az almafa.");

echo "<br>";

$adat = json_decode(file_get_contents("adat.json"));
echo $adat->Bela->kor;
$adat->Bela->kor = ($adat->Bela->kor)+1;

file_put_contents("adat.json",json_encode($adat, JSON_PRETTY_PRINT));