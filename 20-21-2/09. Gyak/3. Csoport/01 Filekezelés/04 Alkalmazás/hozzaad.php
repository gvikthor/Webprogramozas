<?php
require_once("fuggvenyek.php");

$ujallat = (object)[
    "nev" => $_GET["nev"],
    "faj" => $_GET["faj"],
    "suly" => $_GET["suly"]
];
jsonUjelem("allatkert.json", $ujallat);

atiranyit("index");