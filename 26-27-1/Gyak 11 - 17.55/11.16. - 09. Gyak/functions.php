<?php

// "./database.sqlite"
function connect($database_path){
    $pdo = new PDO("sqlite:$database_path");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}


// "SELECT * FROM cities WHERE population >= :kiscica"
// [ 'kiscica' => 2000000 ]
function query($db, $query_string, $params = []) {
    $prepared_statement = $db->prepare($query_string);
    $prepared_statement->execute($params);
    return $prepared_statement->fetchAll();
}

function execute($db, $query_string, $params = []) {
    $prepared_statement = $db->prepare($query_string);
    $prepared_statement->execute($params);
    return $db->lastInsertId();
}

function redirect($page){
    header("Location: $page");
    die;
}