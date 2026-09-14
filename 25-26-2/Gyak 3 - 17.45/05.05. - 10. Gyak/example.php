<?php
require_once "functions.php";

$example_storage = new_storage('data/example');

/*
  function add($record): string;
  function findById(string $id);
  function findAll(array $params = []);
  function findOne(array $params = []);
  function update(string $id, $record);
  function delete(string $id);

  function findMany(callable $condition);
*/

/*
$example_storage->add([
    "name" => "Peti",
    "age" => 29
]);
$example_storage->add([
    "name" => "Gergő",
    "age" => 31
]);
$example_storage->add([
    "name" => "Máté",
    "age" => 25
]);
$example_storage->add([
    "name" => "Áron",
    "age" => 25
]);
*/

// NE ÍGY: $example_storage->update('69fa14569adec', ['age' => 30]); // vigyázz, ez nem jó, felülírja egész Petit, nem csak az életkorát!!
$peti = $example_storage->findById('69fa14569adec');
$peti["age"] = 30;
$example_storage->update('69fa14569adec', $peti);

// $example_storage->delete('69fa14569adec');


var_dump($example_storage->findById('69fa14569adec'));
echo '<hr>';

var_dump($example_storage->findById('almafa'));
echo '<hr>';

var_dump($example_storage->findAll(['age' => 25]));
echo '<hr>';

var_dump($example_storage->findOne(['age' => 25]));
echo '<hr>';

var_dump($example_storage->findMany(function($person) {
    return $person['age'] > 27;
}));
echo '<hr>';