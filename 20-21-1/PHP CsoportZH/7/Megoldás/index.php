<?php

function tartalmaz($nagyString, $eztTartalmazza){
    return strpos($nagyString, $eztTartalmazza) !== false;
    // PHP7-ben így kell használni, PHP8-ban már van rá szebb függvény
}

$diakok = json_decode(file_get_contents('adatok.json'));

/*
$diakok = [
    (object)[
        'nev' => 'Danka Dénes Ausztrália',
        'ora' => 45,
        'feladatkor' => 'általános ügyek',
        'besorolas' => 'adminisztratív'
    ],
    (object)[
        'nev' => 'Broncó Lajos Palindrom',
        'ora' => 30,
        'feladatkor' => 'logisztikai feladatok',
        'besorolas' => 'operatív'
    ],
    (object)[
        'nev' => 'Gereblyés Vilmos Agathachristie',
        'ora' => 35,
        'feladatkor' => 'általános ügyek',
        'besorolas' => 'adminisztratív'
    ],
    (object)[
        'nev' => 'Agancsos Milán',
        'ora' => 25,
        'feladatkor' => 'vidékfejlesztés',
        'besorolas' => 'operatív'
    ],
    (object)[
        'nev' => 'Ingecelős Orella',
        'ora' => 40,
        'feladatkor' => 'általános ügyek',
        'besorolas' => 'adminisztratív'
    ],
    (object)[
        'nev' => 'Szuncsernyák Iván Mordekaiser',
        'ora' => 35,
        'feladatkor' => 'vidékfejlesztés',
        'besorolas' => 'operatív'
    ],
    (object)[
        'nev' => 'Hentes Gabriella',
        'ora' => 30,
        'feladatkor' => 'fordítás',
        'besorolas' => 'adminisztratív'
    ],
    (object)[
        'nev' => 'Foltos Zalán',
        'ora' => 35,
        'feladatkor' => 'logisztikai feladatok',
        'besorolas' => 'operatív'
    ],
    (object)[
        'nev' => 'Felegés Erika',
        'ora' => 60,
        'feladatkor' => 'ügyfélregisztráció',
        'besorolas' => 'adminisztratív'
    ]
];
*/


$feladatkorok = [];
$besorolasok = [
    'adminisztratív' => 0,
    'operatív' => 0
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .adminisztratív{
        background-color: pink;
    }
    .operatív{
        background-color: lightblue;
    }
</style>
<body>
    <form>
        <input name="kereso"> <br>
        <input name="besorolas[]" type="checkbox" value="adminisztratív"> Adminisztratív <br>
        <input name="besorolas[]" type="checkbox" value="operatív"> Operatív <br>
        <input type="submit" value="Keres">
    </form>

    <table>
        <tr>
            <th>Név</th>
            <th>Munkaóra</th>
            <th>Feladatkör</th>
            <th>Besorolás</th>
        </tr>
        <?php foreach($diakok as $diak): ?>
            <?php if(
                (!isset($_GET['kereso']) || trim($_GET['kereso']) == '' || tartalmaz($diak->feladatkor,$_GET['kereso'])) &&
                (!isset($_GET['besorolas']) || in_array($diak->besorolas, $_GET['besorolas']))
            ): ?>
                <tr class="<?=$diak->besorolas?>">
                    <td><?=$diak->nev?></td>
                    <td><?=$diak->ora?></td>
                    <td><?=$diak->feladatkor?></td>
                    <td><?=$diak->besorolas?></td>
                </tr>
                <?php
                    $besorolasok[$diak->besorolas] += $diak->ora;
                    if(!isset($feladatkorok[$diak->feladatkor])){
                        $feladatkorok[$diak->feladatkor] = (object)[
                            'fk' => $diak->feladatkor,
                            'db' => 1
                        ];
                    }else{
                        $feladatkorok[$diak->feladatkor]->db++;
                    }
                ?>
            <?php endif ?>
        <?php endforeach ?>
    </table>

    <br><br>

    Feladatkörök:
    <table>
    <?php foreach($feladatkorok as $feladatkor): ?>
        <tr>
            <td><?=$feladatkor->fk?></td>
            <td><?=$feladatkor->db?></td>
        </tr>
    <?php endforeach ?>
    </table>

    <br><br>

    Besorolások:
    <ul>
        <li>Adminisztratív: <?=$besorolasok['adminisztratív']*950?>Ft</li>
        <li>Operatív: <?=$besorolasok['operatív']*950?>Ft</li>
    </ul>
</body>
</html>