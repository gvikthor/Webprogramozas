<?php
require_once 'functions.php';

$city_id = $_GET['city_id'];
$city_name = $_GET['city_name'];
$city_population = $_GET['city_population'];
$city_country = $_GET['city_country'];

$database = sqlite_connect('./data.sqlite');
execute($database,
    "INSERT INTO cities (id, name, population, country)
    VALUES (:city_id, :city_name, :city_population, :city_country)",
    [
        "city_id" => $city_id,
        "city_name" => $city_name,
        "city_population" => $city_population,
        "city_country" => $city_country
    ]
);

header("Location: index.php");
die;

/*
// https://webprogramozas.inf.elte.hu/webprog/lectures/10/#/param%C3%A9teres-lek%C3%A9rdez%C3%A9sek-1
// segédfüggvényben:
function query(PDO $connection, string $sql, $parameters = []) {
  $stmt = $connection->prepare($sql);
  $stmt->execute($parameters);
  return $stmt->fetchAll();
}

// használata
$zeneszamok = query($kapcsolat, 
  "SELECT * from zeneszamok where album_id = :album_id", 
  [ "album_id" => 1 ]
);
*/