<?php
require_once 'functions.php';

$people_storage = new_storage('data/people'); // hozd létre előre a filet, nehogy op rendszer jogosultság hiba legyen


/*
  function add($record): string;
  function findById(string $id);
  function findAll(array $params = []);
  function findOne(array $params = []);
  function update(string $id, $record);
  function delete(string $id);

  function findMany(callable $condition);
  function updateMany(callable $condition, callable $updater);
  function deleteMany(callable $condition);
*/

$example_data = (object)[
    'name' => 'Andris',
    'age' => 29,
    'friends' => ['Tomi', 'Petra']
];
//$people_storage->add($example_data);

// NE ÍGY: $people_storage->update('69f9c8663d3db', ['age' => 28]); // vigyázz, ez nem jó, mert egész Petit felülírja és csak egy age-e lesz, minden más eltűnik belőle!

$peti = $people_storage->findById('69f9c8663d3db');
$peti['age'] = 28;
$people_storage->update('69f9c8663d3db', $peti);
$people_storage->delete('69f9c8fa6dabc');
?>

<h2>Find by ID</h2>
<?php var_dump($people_storage->findById('69f9c8663d3db')) ?>

<h2>Find All</h2>
<?php var_dump($people_storage->findAll(['age' => 29])) ?>

<h2>Find One</h2>
<?php var_dump($people_storage->findOne(['age' => 29])) ?>

<h2>Find Many</h2>
<?php $people_above_28 = $people_storage->findMany(function($person){ return $person['age'] > 28; }) ?>

<ul>
<?php foreach($people_above_28 as $person): ?>
    <li>
        <?= $person['name'] ?>
    </li>
<?php endforeach ?>
</ul>