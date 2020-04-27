<?php
//PHP Data Objects - PDO
/*
$pdo = new PDO("sqlite:peldaAdatok.db");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$utasitas = $pdo->query("SELECT * FROM `data`");
$eredmeny = $utasitas->fetchAll();
//var_dump($eredmeny);
echo $eredmeny[0]["nev"];*/

function kapcsolodas($cel, $username = '', $password = ''){
    $pdo = new PDO($cel, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function lekerdez_egyszeru($pdo, $sql){
    $eredmeny = $pdo->query($sql);
    return $eredmeny;
}

//SELECT * FROM data WHERE id = :param AND nev = :masikparam
//[
//  "param" => 2,
//  "masikparam" => "Kortefa"
//]
function lekerdez($pdo, $sql, $param = []){
    $utasitas = $pdo->prepare($sql);
    $utasitas->execute($param);
    return $utasitas->fetchAll();
}

$kapcsolat = kapcsolodas("sqlite:peldaAdatok.db");
$eredmeny = lekerdez($kapcsolat, "SELECT * FROM `data` WHERE nev = \"paradicsom\"");
echo $eredmeny[0]["szin"];

$eredmeny = lekerdez($kapcsolat, "SELECT * FROM `data` WHERE nev = :nev", [ "nev" => "paradicsom" ]);
echo $eredmeny[0]["szin"];

echo "<br><br>";

$gyumolcslekerdezes = "SELECT * FROM `data` WHERE nev = :nev";
$eredmeny = lekerdez($kapcsolat, $gyumolcslekerdezes, [ "nev" => "paradicsom" ]);
echo $eredmeny[0]["szin"];

////////////////////////////////////////

/*$lekerdezes = $kapcsolat->prepare("INSERT INTO `data` (`nev`, `szin`) VALUES (:nev, :szin)");
$lekerdezes->execute([ 
        "nev" => "paprika",
        "szin" => "sárga"
]);*/

/*lekerdez($kapcsolat, "INSERT INTO `data` (`nev`, `szin`) VALUES (:nev, :szin)", [ 
    "nev" => "padlizsan",
    "szin" => "lila"
]);*/

$eredmeny = lekerdez($kapcsolat, $gyumolcslekerdezes, [ "nev" => "padlizsan" ]);
echo $eredmeny[0]["szin"];