<?php
$alma = json_decode(file_get_contents("file.json"));

$alma->nev = "Eperné";
$alma->munkahely = "ELTE";

file_put_contents("file.json",json_encode($alma, JSON_PRETTY_PRINT));