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
            <li data-id="<?=$id?>"><?=$lego->nev?></li>
        <?php endforeach ?>
    </ul>

    <div style="display: none;">
        <h1></h1>
        <p></p>
    </div>
</body>
<script src="script.js"></script>
</html>