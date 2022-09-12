<?php 

function tartalmaz($nagyString, $eztTartalmazza){
    return strpos(mb_strtolower($nagyString), mb_strtolower($eztTartalmazza)) !== false;
}

/*
function tartalmaz($nagyString, $eztTartalmazza){
    return strpos($nagyString, $eztTartalmazza) !== false;
}
*/

/*$adatok = [
    (object)[
        'kerulet' => 1,
        'nev'=> 'Deák Ferenc Dániel',
        'part'=> 'NUK',
        'szavazatok' => 25345
    ],
    (object)[
        'kerulet' => 1,
        'nev'=> 'Feling Erika',
        'part'=> 'KCsSK',
        'szavazatok' => 27486
    ],
    (object)[
        'kerulet' => 2,
        'nev'=> 'Borász Lázár Petrezselyem',
        'part'=> 'NUK',
        'szavazatok' => 29415
    ],
    (object)[
        'kerulet' => 2,
        'nev'=> 'Szűcsné Szucsogó Isabella',
        'part'=> 'KCsSK',
        'szavazatok' => 21735
    ],
    (object)[
        'kerulet' => 3,
        'nev'=> 'Gerlei Andrea',
        'part'=> 'NUK',
        'szavazatok' => 23811
    ],
    (object)[
        'kerulet' => 3,
        'nev'=> 'Illés Patrícia',
        'part'=> 'KCsSK',
        'szavazatok' => 24719
    ],
    (object)[
        'kerulet' => 4,
        'nev'=> 'Fakanál Árpád',
        'part'=> 'NUK',
        'szavazatok' => 2
    ],
    (object)[
        'kerulet' => 4,
        'nev'=> 'Morgó, a kutya',
        'part'=> 'KCsSK',
        'szavazatok' => 57815
    ]
];*/

$adatok = json_decode(file_get_contents('adatok.json'));

$nuk = 0;
$kcs = 0;
$keruletek = [];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Választás</title>
</head>
<style>
    .nuk{ background: pink; }
    .kcs{ background: lightblue; }
</style>
<body>
    <form>
        Név: <input name="nev"> <br>
        <input type="checkbox" name="statisztika"> Statisztikai adatok <br>
        <input type="submit" value="Keres">
    </form>

    <table>
        <tr>
            <th>Kerület</th>
            <th>Név</th>
            <th>Szavazatok</th>
        </tr>
        <?php foreach($adatok as $adat): ?>
            <?php if(
                !isset($_GET['nev']) ||
                trim($_GET['nev']) == '' ||
                tartalmaz($adat->nev, $_GET['nev'])
            ): ?>
                <tr>
                    <td class="<?=$adat->part == 'NUK' ? 'nuk':'kcs' ?>"><?=$adat->kerulet?></td>
                    <td class="<?=$adat->part == 'NUK' ? 'nuk':'kcs' ?>"><?=$adat->nev?></td>
                    <td class="<?=$adat->part == 'NUK' ? 'nuk':'kcs' ?>"><?=$adat->szavazatok?></td>
                </tr>
                
            <?php endif ?>
            <?php
                if($adat->part == 'NUK'){
                    $nuk += $adat->szavazatok;
                }else{
                    $kcs += $adat->szavazatok;
                }

                if(isset($keruletek[$adat->kerulet])){
                    if($keruletek[$adat->kerulet]->szavazatok < $adat->szavazatok){
                        $keruletek[$adat->kerulet] = $adat;
                    }
                }else{
                    $keruletek[$adat->kerulet] = $adat;
                }
            ?>
        <?php endforeach ?>
    </table>

    <?php if(isset($_GET['statisztika'])): ?>
        <div>
            NUK szavazók: <?=$nuk?> <br>
            KCsSK szavazók: <?=$kcs?>
            <ul>
            <?php foreach($keruletek as $kerulet): ?>
                <li><?=$kerulet->kerulet?>. kerület: <?=$kerulet->part?></li>
            <?php endforeach ?>
            </ul>
        </div>
    <?php endif ?>

</body>
</html>