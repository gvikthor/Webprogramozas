<?php

$egyetemek = [
    [
        'nev' => 'Eötvös Loránd Tudományegyetem',
        'allami' => true,
        'karok' => [
            [
                'nev' => 'IK',
                'hallgatok' => 3500
            ],
            [
                'nev' => 'TTK',
                'hallgatok' => 10000
            ],
            [
                'nev' => 'TáTK',
                'hallgatok' => 2500
            ]
        ]
    ],
    [
        'nev' => 'Budapesti Műszaki és Gazdaságtudományi Egyetem',
        'allami' => true,
        'karok' => [
            [
                'nev' => 'VIK',
                'hallgatok' => 3500
            ],
            [
                'nev' => 'GTK',
                'hallgatok' => 4000
            ]
        ]
    ],
    [
        'nev' => 'Budapesti Corvinus Egyetem',
        'allami' => false,
        'karok' => [
            [
                'nev' => 'Corvinus Kar 1',
                'hallgatok' => 4500
            ],
            [
                'nev' => 'Corvinus Kar 2',
                'hallgatok' => 3000
            ],
            [
                'nev' => 'Corvinus Kar 3',
                'hallgatok' => 7000
            ],
            [
                'nev' => 'Corvinus Kar 4',
                'hallgatok' => 1500
            ]
        ]
    ],
    [
        'nev' => 'Debreceni Egyetem',
        'allami' => true,
        'karok' => [
            [
                'nev' => 'Informatikai Kar',
                'hallgatok' => 1500
            ]
        ]
    ],
    [
        'nev' => 'Milton Friedman Egyetem',
        'allami' => false,
        'karok' => [
            [
                'nev' => 'Kar pénz++',
                'hallgatok' => 4000
            ]
        ]
    ]
];

function hallgatokSzama($egyetem){
    $sum = 0;
    foreach($egyetem['karok'] as $kar){
        $sum += $kar['hallgatok'];
    }
    return $sum;
}

$allami = 0;
$magan = 0;
foreach($egyetemek as $egyetem){
    if($egyetem['allami']){
        $allami++;
    }else{
        $magan++;
    }
}
$allamiSzazalek = floor(($allami/($allami+$magan))*100);
$maganSzazalek  = floor(($magan/($allami+$magan))*100);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Egyetemek</title>
</head>
<body>
    <table>
        <tr>
            <th>Egyetem neve</th>
            <th>Állami fenntartású?</th>
            <th>Karok</th>
            <th>Hallgatók száma</th>
        </tr>
        <?php foreach($egyetemek as $egyetem): ?>
            <tr style="background-color: <?= $egyetem['allami'] ? 'lightgreen' : 'pink' ?>;">
                <td><?=$egyetem['nev']?></td>
                <td>
                    <?php if($egyetem['allami']): ?>
                        Állami
                    <?php else: ?>
                        Magán
                    <?php endif ?>
                </td>
                <td>
                    <ul>
                        <?php foreach($egyetem['karok'] as $kar): ?>
                            <li><?=$kar['nev']?></li>
                        <?php endforeach ?>
                    </ul>
                </td>
                <td><?=hallgatokSzama($egyetem)?></td>
            </tr>
        <?php endforeach ?>
    </table>

    <p style="width: <?=$allamiSzazalek?>%; background-color: lightgreen;">Állami egyetemek: <?=$allami?> (<?=$allamiSzazalek?>%)</p>
    <p style="width: <?=$maganSzazalek?>%; background-color: pink;">Magánegyetemek: <?=$magan?> (<?=$maganSzazalek?>%)</p>
</body>
</html>