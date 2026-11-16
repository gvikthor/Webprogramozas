<?php
function sqlite_connect($db_file_name){
    $pdo = new PDO("sqlite:$db_file_name");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

/**
 * Ez a SELECT-re jó
 */
function query($pdo, $sql_query, $parameters = []) {
    $prepared_query = $pdo->prepare($sql_query);
    $ready_query = $prepared_query->execute($parameters);
    return $ready_query->fetchAll();
}

/**
 * Ez az INSERT, DELETE-re jó
 */
function execute($pdo, $sql_query, $parameters = []) {
    $prepared_query = $pdo->prepare($sql_query);
    $ready_query = $prepared_query->execute($parameters);
    return $pdo->lastInsertId();
}