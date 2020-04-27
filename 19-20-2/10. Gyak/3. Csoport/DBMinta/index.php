<?php
//PHP Data Objects -> PDO
/*
$kapcsolat = new PDO("sqlite:valami.db");
$kapcsolat->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$lekerdezes = $kapcsolat->query("SELECT * FROM `emberkek`");
$eredmeny = $lekerdezes->fetchAll();

//var_dump($eredmeny);
echo $eredmeny[0]["lakhely"];
*/
//////////////////////////////////////////////////

function kapcsolodas($cel, $uname = '', $password = ''){
    $pdo = new PDO($cel, $uname, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function lekerdez_egyszeru($pdo, $sql){
    $lekerdezes = $pdo->query($sql);
    return $lekerdezes->fetchAll();
}

function lekerdez($pdo, $sql, $param = []){
    $lekerdezes = $pdo->prepare($sql);
    $lekerdezes->execute($param);
    return $lekerdezes->fetchAll();
}

$kapcsolat = kapcsolodas("sqlite:valami.db");
$eredmeny = lekerdez_egyszeru($kapcsolat, "SELECT * FROM `emberkek`");
echo $eredmeny[0]["lakhely"] . "<br><br>";

/*
"SELECT * FROM `emberkek` WHERE nev = :nev OR lakhely = :lakhely"

[
    "nev" => "Gergő",
    "lakhely" => "Debrecen"
]
*/

/*$lekerdezes = $kapcsolat->prepare("SELECT * FROM `emberkek` WHERE nev = :nev OR lakhely = :lakhely");
$lekerdezes->execute([
    "nev" => "Gergő",
    "lakhely" => "Debrecen"
]);
$eredmeny = $lekerdezes->fetchAll();*/

$utasitas = "SELECT * FROM `emberkek` WHERE nev = :nev OR lakhely = :lakhely";

$eredmeny = lekerdez(
    $kapcsolat,
    $utasitas,
    [
        "nev" => "Gergő",
        "lakhely" => "Debrecen"
    ]
);
var_dump($eredmeny);

$eredmeny = lekerdez($kapcsolat, "SELECT * FROM `emberkek` WHERE nev = \"Áron\"");
var_dump($eredmeny);

/*lekerdez(
    $kapcsolat,
    "INSERT INTO `emberkek` (`nev`, `lakhely`) VALUES (:nev, :lakhely)",
    [
        "nev" => "Nándor",
        "lakhely" => "Debrecen"
    ]
);*/

echo "<br><br>";
$eredmeny = lekerdez($kapcsolat, "SELECT * FROM `emberkek`");
?>

<table>
    <tr><th>Név</th><th>Lakhely</th></tr>
    <?php foreach($eredmeny as $elem): ?>
        <tr>
            <td><?=$elem["nev"]?></td>
            <td><?=$elem["lakhely"]?></td>
        </tr>
    <?php endforeach ?>
</table>

<br><br>

<?php

$eredmeny = lekerdez($kapcsolat, "SELECT lakhely FROM emberkek WHERE nev = \"István\"");
var_dump($eredmeny);