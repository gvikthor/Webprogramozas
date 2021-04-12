<?php

$allatok = [
    (object)[
        'nev' => 'Vilmos',
        'faj' => 'medve',
        'suly' => 250,
        'baratok' => ['Malacka', 'Micimackó', 'Kanga', 'Regő'],
        'el' => true
    ],
    (object)[
        'nev' => 'Regő',
        'faj' => 'oroszlán',
        'suly' => 120,
        'baratok' => ['Vilmos', 'Alex'],
        'el' => true
    ],
    (object)[
        'nev' => 'Timi',
        'faj' => 'mókus',
        'suly' => 0.5,
        'baratok' => ['Mort', 'Remy'],
        'el' => true
    ],
    (object)[
        'nev' => 'Harambe',
        'faj' => 'gorilla',
        'suly' => 160,
        'baratok' => [],
        'el' => false
    ]
];

function osszsuly($tomb){
    $osszeg = 0;
    foreach($tomb as $elem){
        $osszeg += $elem->suly;
    }
    return $osszeg;
}

$osszsuly = osszsuly($allatok);

function legtobbBarat($tomb){
    $maxelem = $tomb[0];
    $maxertek = count($tomb[0]->baratok);
    foreach($tomb as $elem){
        if(count($elem->baratok) > $maxertek){
            $maxelem = $elem;
            $maxertek = count($elem->baratok);
        }
    }

    return $maxelem;
}

function elokAranya($tomb){
    $el = 0;
    foreach($tomb as $elem){
        if($elem->el){
            $el++;
        }
    }

    return (object)[
        'el' => $el,
        'nemel' => count($tomb) - $el
    ];
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Állatkert</title>
</head>
<style>
    table, tr, th, td{
        border: 1px solid black;
        border-collapse: collapse;
    }
</style>
<body>
    <table>
        <thead>
            <tr>
                <th>Név</th>
                <th>Faj</th>
                <th>Tömeg</th>
                <th>Barátok</th>
                <th>Osszsúly százalék</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($allatok as $allat): ?>
                <tr style="background-color: <?=$allat->suly > 200 ? 'red' : 'white'?>;";>
                    <td><?=$allat->nev?></td>
                    <td><?=$allat->faj?></td>
                    <td><?=$allat->suly?>kg</td>
                    <td>
                        <ul>
                            <?php foreach($allat->baratok as $barat): ?>
                                <li><?=$barat?></li>
                            <?php endforeach ?>
                        </ul>
                    </td>
                    <td><?=($allat->suly/$osszsuly)*100?>%</td>
                </tr>
            <?php endforeach ?>
        </tbody>
    </table>
    Az állatok összsúlya: <?=$osszsuly?>kg <br>

    A legtöbb barátja neki van: <?=legtobbBarat($allatok)->nev?> <br>

    <?php $arany = elokAranya($allatok); ?>
    <div style="background-color:deeppink; width:   <?=$arany->el/count($allatok)*100?>%;"   >Élők: <?=$arany->el?></div>
    <div style="background-color:goldenrod;  width: <?=$arany->nemel/count($allatok)*100?>%;">Nem élők: <?=$arany->nemel?></div>
</body>
</html>