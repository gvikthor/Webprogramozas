<?php
require_once 'functions.php';

$example_storage = new_storage('data/example');

/*
$person = (object)[
    "name" => "Andris",
    "age" => 29,
    "color" => "pink"
];

$example_storage->add($person);
*/

$example_storage->delete('69f9ff3d88abc');

// NE ÍGY HASZNÁLD: $example_storage->update('69f9fe07257eb', ['age' => 31]); // veszélyes, mert felülírja a teljes objektumot és csak annyi lesz benne, hogy age. tehát ez nem a jó megoldás.


$peter = $example_storage->findById('69f9fe07257eb');
//$peter['age'] = 31; // ez jó, így használd, ezt a két sort együt
//$example_storage->update('69f9fe07257eb', $peter);
var_dump($peter);

echo '<hr>';

$all_29_years_olds = $example_storage->findAll(['age' => 29]);
var_dump($all_29_years_olds);

echo '<hr>';

$first_29_years_old = $example_storage->findOne(['age' => 29]);
var_dump($first_29_years_old);

echo '<hr>';

$all_30_yo_or_older = $example_storage->findMany(function($person){ return $person["age"] >= 30; });
var_dump($all_30_yo_or_older);