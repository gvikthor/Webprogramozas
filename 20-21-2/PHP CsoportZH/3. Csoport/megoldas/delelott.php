<?php
require_once "fuggvenyek.php";

$adatok = jsonBeolvas("adatok.json");
/*$adatok = [
    (object)[
        "ev" => "2019",
        "honap" => "január",
        "megjegyzes" => "Hekkerek támadták meg a szervereinket!",
        "kibertamadas" => true
    ],
    (object)[
        "ev" => "2019",
        "honap" => "június",
        "megjegyzes" => "Célzottan és szándékosan akadályozták a munkánkat a hekkerek!",
        "kibertamadas" => true
    ],
    (object)[
        "ev" => "2019",
        "honap" => "augusztus",
        "megjegyzes" => "Szerverfrissítés 2007-es keretrendszerre.",
        "kibertamadas" => false
    ],
    (object)[
        "ev" => "2019",
        "honap" => "november",
        "megjegyzes" => "Valaki el akarta lopni a fagyit",
        "kibertamadas" => true
    ],
    (object)[
        "ev" => "2020",
        "honap" => "március",
        "megjegyzes" => "Nem a mi hibánk volt igazából.",
        "kibertamadas" => false
    ],
    (object)[
        "ev" => "2020",
        "honap" => "október",
        "megjegyzes" => "Tervezett leállás.",
        "kibertamadas" => false
    ],
    (object)[
        "ev" => "2020",
        "honap" => "december",
        "megjegyzes" => "A Mikulás elvitte a sávszélességet.",
        "kibertamadas" => false
    ],
    (object)[
        "ev" => "2021",
        "honap" => "április",
        "megjegyzes" => "Meghirdettünk kétszázezer ingyen fagylatot, és rögtön utána kiberbűnözők támadtak meg minket, és ez az egyetlen oka, hogy lehalt a szerver!",
        "kibertamadas" => true
    ]
];*/

$tobb = false;
$darab = -1;
if(letezik("ev")){
    $darab = 0;
    for($i = 0; $i < count($adatok) && !$tobb; $i++){
        if($adatok[$i]->ev == $_GET["ev"] && $adatok[$i]->kibertamadas){
            $darab++;
            $tobb = $darab > 2;
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Szerverleállások</title>
</head>
<style>
    .nem-tamadas{
        background-color: #7bb9d4;
    }
    .kibertamadas{
        background-color: #d16275;
    }



    body{
        font-family: Arial, Helvetica, sans-serif;
    }
    h2, p, div{
        margin-bottom: 0;
        margin-top: 0;
        padding-left: 1px;
    }
</style>
<body>
    <h1>Leállások</h1>
    <?php foreach($adatok as $adat): ?>
        <?php $class = $adat->kibertamadas ? 'kibertamadas' : 'nem-tamadas'; ?>
        <div class="<?=$class?>">
            <h2><?=$adat->ev?> <?=$adat->honap?></h2>
            <p><?=$adat->megjegyzes?></p>
        </div>
    <?php endforeach ?>

    <br>

    <form>
        <input name="ev">
        <input type="submit" value="Számol">
    </form>
    <?php if($darab != -1): ?>
        <div><?=$_GET["ev"]?> évben <?=$tobb ? 'sok' : 'kevés' ?> kibertámadás történt.</div>
    <?php endif ?>

    <br>

    
    <form action="add.php">
        Év <br>
        <input name="ev"> <br>

        Hónap <br>
        <input name="honap"> <br>

        Megjegyzés <br>
        <input name="megjegyzes"> <br>

        Kibertámadás <input name="kibertamadas" type="checkbox"> <br>

        <input class="hozzafuz" type="submit" value="Hozzáad">
    </form>
</body>
</html>