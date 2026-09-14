<?php
require_once 'functions_storage.php';

function redirect($target) {
    header("Location: $target");
    die; // mivel a header location nem állítja le a script futását, nekünk meg kell ezt még tenni
}

/*
  function add($record): string;
  function findById(string $id);
  function findAll(array $params = []); --> tömböt ad vissza
  function findOne(array $params = []); --> egy elemet ad vissza
  function update(string $id, $record);
  function delete(string $id);

  function findMany(callable $condition);
  function updateMany(callable $condition, callable $updater);
  function deleteMany(callable $condition);
 */
function new_storage($filename)
{
    $json_kezelo = new JsonIO("$filename.json");
    return new Storage($json_kezelo);
}