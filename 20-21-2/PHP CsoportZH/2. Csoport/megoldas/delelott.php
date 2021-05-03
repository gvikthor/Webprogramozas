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

$darab = -1;
if(isset($_GET["ev"])){
    $darab = 0;
    foreach($adatok as $adat){
        if($adat->ev == $_GET["ev"] && $adat->kibertamadas){
            $darab++;
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
    table, tr, th, td{
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td{
        text-align: center;
    }
    .keskeny{
        width: 150px;
    }
    .szeles{
        width: 300px;
    }
</style>
<body>
    <table>
        <tr>
            <th class="keskeny">Év</th>
            <th class="keskeny">Hónap</th>
            <th class="szeles">Megjegyzés</th>
        </tr>
        <?php foreach($adatok as $adat): ?>
            <?php $class = $adat->kibertamadas ? 'kibertamadas' : 'nem-tamadas'; ?>
            <tr class="<?=$class?>">
                <td><?=$adat->ev?></td>
                <td><?=$adat->honap?></td>
                <td><?=$adat->megjegyzes?></td>
            </tr>
        <?php endforeach ?>
    </table>

    <br>

    <form>
        <input name="ev">
        <input type="submit" value="Számol">
    </form>
    <?php if($darab != -1): ?>
        <div><?=$_GET["ev"]?> évben <?=$darab?> kibertámadás történt.</div>
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