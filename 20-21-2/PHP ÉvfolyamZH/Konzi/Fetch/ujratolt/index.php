<?php

function jsonBeolvas($filenev){
    return json_decode(file_get_contents($filenev));
}

function jsonKiir($filenev, $adat){
    file_put_contents($filenev, json_encode($adat, JSON_PRETTY_PRINT));
}

$legok = jsonBeolvas("lego.json");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEGO</title>
</head>
<body>
    <ul>
        <?php foreach($legok as $id => $lego): ?>
            <li><a href="index.php?id=<?=$id?>"><?=$lego->nev?></a></li>
        <?php endforeach ?>
    </ul>

    <?php if(isset($_GET["id"])): ?>
    <div>
        <?php
        $id = $_GET["id"];
        $akt_lego = $legok->$id;
        ?>
        <h1><?=$akt_lego->nev?> (<?=$akt_lego->szam?>)</h1>
        <p><?=$akt_lego->leiras?></p>
    </div>
    <?php endif ?>
</body>
</html>