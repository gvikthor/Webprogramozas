<?php
require_once('adatkezeles.php');

$adatok = new JsonStorage('adat.json');

/*
$ember = [
    "nev" => "Fantás Ákos",
    "kor" => 21
];

$id = $adatok->add($ember);
$ember['id'] = $id;
$adatok->update($id, $ember);
*/

var_dump($adatok->findById('5fbbc7591558c'));

echo '<br><br>';

var_dump($adatok->findAll());

echo '<br><br>';

var_dump($adatok->findAll(['kor' => 21]));

echo '<br><br>';

var_dump(
    $adatok->query(function ($elem){
        /*
            bonyolultabb logika
        */
        return $elem['kor'] > 20;
    })
);

$adatok->delete('5fbbc7c1f034a');