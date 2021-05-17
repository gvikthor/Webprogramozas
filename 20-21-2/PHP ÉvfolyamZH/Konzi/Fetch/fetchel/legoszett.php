<?php

function jsonBeolvas($filenev){
    return json_decode(file_get_contents($filenev));
}

$legok = jsonBeolvas("lego.json");
$id = $_GET["id"];
$akt_lego = $legok->$id;
echo json_encode($akt_lego);