<?php

$adat = file_get_contents("alma.txt");

echo $adat . "<br>";
var_dump($adat);

file_put_contents('alma.txt', 'Kint mégsincs sötét.');
// nem felejtünk el jogot adni a file írására