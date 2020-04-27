<?php
//PHP Data Objects

/*$kapcsolat = new PDO("sqlite:mintaDB.db");
$kapcsolat->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$lekerdezes = $kapcsolat->query("SELECT * FROM hallgatok");

$eredmeny = $lekerdezes->fetchAll();*/

function kapcsolodas($cim, $uname = '', $pw = ''){
    $pdo = new PDO($cim, $uname, $pw);
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

$kapcsolat = kapcsolodas("sqlite:mintaDB.db");
$eredmeny = lekerdez_egyszeru($kapcsolat, "SELECT * FROM hallgatok WHERE nev = \"István\"");

/*
SELECT * FROM valami WHERE nev = :kiskutya OR neptun = :almafa

[
    "kiskutya" => "István",
    "almafa" => "ABC123"
]

*/

/*$lekerdezes = $kapcsolat->prepare("SELECT * FROM hallgatok WHERE nev = :valami");
$lekerdezes->execute([
    "valami" => "István"
]);
$eredmeny = $lekerdezes->fetchAll();*/

$eredmeny = lekerdez($kapcsolat, "SELECT * FROM hallgatok");
/*$eredmeny = lekerdez(
    $kapcsolat,
    "SELECT * FROM hallgatok WHERE nev = :name",
    [
        "name" => "Gergő"
    ]
);*/

/*lekerdez(
    $kapcsolat,
    "INSERT INTO hallgatok (`nev`, `neptun`) VALUES (:nev, :neptun)",
    [
        "nev" => "Péter",
        "neptun" => "HJK543"
    ]
);*/

/*lekerdez(
    $kapcsolat,
    "UPDATE hallgatok SET neptun = :neptun WHERE nev = :nev",
    [
        "nev" => "Áron",
        "neptun" => "FGG000"
    ]
);*/

?>

<table>
    <tr>
        <th>Név</th>
        <th>Neptun</th>
    </tr>
    <?php foreach($eredmeny as $hallgato): ?>
        <tr>
            <td><?=$hallgato["nev"]?></td>
            <td><?=$hallgato["neptun"]?></td>
        </tr>
    <?php endforeach ?>
</table>