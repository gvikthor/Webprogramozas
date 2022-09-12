<?php

/*
$nyersadat = file_get_contents("alma.txt");
echo $nyersadat . "<br>";

$adat = json_decode($nyersadat);
*/

$adat = json_decode(file_get_contents("alma.json"));
var_dump($adat);

$adat[] = (object)[
    "nev" => "Laura",
    "kor" => 24,
    "hajszin" => "lila"
];

file_put_contents("alma.json", json_encode($adat, JSON_PRETTY_PRINT));
// nem felejtünk el jogot adni a file írására