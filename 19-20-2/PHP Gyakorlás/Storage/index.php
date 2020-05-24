<?php
require_once('adatkezeles.php');
require_once('etel.php');

$filekezelo = new JsonStorage("adatok.json");

function addWithId($filekezelo, $elem){
    $id = $filekezelo->add($elem);
    $elem["id"] = $id;
    $filekezelo->update($id, $elem);
}

/*$ember = [
    "nev" => "Gergő",
    "lakhely" => "Budapest",
    "kor" => 25,
    "etelek" => ["párolt zöldség", "alma"]
];
$id = $filekezelo->add($ember);
echo $id;*/

/*$ember = [
    "nev" => "Gergő",
    "lakhely" => "Budapest",
    "kor" => 25,
    "etelek" => ["párolt zöldség", "alma"]
];
$id = $filekezelo->add($ember);
$ember["id"] = $id;
$filekezelo->update($id, $ember);*/

/*
addWithId($filekezelo, [
    "nev" => "Gergő",
    "lakhely" => "Budapest",
    "kor" => 25,
    "etelek" => ["párolt zöldség", "alma"]
]);

addWithId($filekezelo, [
    "nev" => "Nándor",
    "lakhely" => "Budapest",
    "kor" => 19,
    "etelek" => ["körte", "szilva", "banán"]
]);
addWithId($filekezelo, [
    "nev" => "István",
    "lakhely" => "Debrecen",
    "kor" => 19,
    "etelek" => []
]);
addWithId($filekezelo, [
    "nev" => "Áron",
    "lakhely" => "Etyek",
    "kor" => 20,
    "etelek" => ["eper"]
]);*/

/*
$ember = $filekezelo->findOne(["nev" => "István"]);
$ember["lakhely"] = "Budapest";
$filekezelo->update($ember["id"], $ember);*/

/*
addEtel(
    $filekezelo,
    $filekezelo->findOne(["nev" => "Áron"]),
    "spagetti"
);
*/
/*
deletel(
    $filekezelo,
    $filekezelo->findOne(["nev" => "Áron"]),
    "spagetti"
);
*/
/*
ujEtelek(
    $filekezelo,
    $filekezelo->findOne(["nev" => "Áron"]),
    ["BigMac","ChikieNuggie"]
);
*/
echo "<h1>Összes ember</h1>";
$emberek = $filekezelo->findAll();
foreach($emberek as $ember){
    echo $ember["nev"] . "<br>";   
}

echo "<h1>Budapestiek</h1>";
$emberek = $filekezelo->findAll([ "lakhely" => "Budapest" ]);
foreach($emberek as $ember){
    echo $ember["nev"] . "<br>";
}

echo "<h1>20 év alattiak</h1>";

$emberek = $filekezelo->query(function ($elem){
    return $elem["kor"] < 20;
});

foreach($emberek as $ember){
    echo $ember["nev"] . "<br>";
}