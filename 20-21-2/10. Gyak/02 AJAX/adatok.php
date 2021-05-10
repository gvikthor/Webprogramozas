<?php

function jsonBeolvas($filenev){
    return json_decode(file_get_contents($filenev));
}

$adatok = jsonBeolvas("filmek.json");

echo json_encode($adatok, JSON_PRETTY_PRINT);

?>