<?php
require_once 'functions.php';

execute(
    connect('./data.sqlite'),
    "INSERT INTO cities (id, name, population, country)
    VALUES (:city_id, :city_name, :city_population, :city_country)",
    [
        "city_id" => $_GET['city_id'],
        "city_name" => $_GET['city_name'],
        "city_population" => $_GET['city_population'],
        "city_country" => $_GET['city_country'],
    ]
);

redirect('index.php');