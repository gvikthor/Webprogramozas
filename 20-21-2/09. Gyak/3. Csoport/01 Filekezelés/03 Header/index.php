<?php

require_once("fuggvenyek.php");

$adat = jsonBeolvas("alma.json");
var_dump($adat);

$adat[] = (object)[
    "nev" => "Laura",
    "kor" => 24,
    "hajszin" => "lila"
];

jsonKiir("alma.json", $adat);
// nem felejtünk el jogot adni a file írására