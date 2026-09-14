<?php
require_once 'functions_storage.php';
require_once 'functions_pages.php';

function redirect($target) {
    header("Location: $target");
    die;
}

/*
  function add($record): string;
  function findById(string $id);
  function findAll(array $params = []);
  function findOne(array $params = []);
  function update(string $id, $record);
  function delete(string $id);

  function findMany(callable $condition);
*/
function new_storage($filename)
{
    $json_kezelo = new JsonIO("$filename.json");
    return new Storage($json_kezelo);
}