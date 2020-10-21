<?php

$europa = [
    [
        'nev'=> 'Angol Királyság',
        'hadsereg'=> 25000,
        'vazallus'=> [
        ],
        'birodalom'=> false
    ],
    [
        'nev'=> 'Francia Királyság',
        'hadsereg'=> 30000,
        'vazallus'=> [
            [
                'nev'=> 'Aquitánia',
                'hadsereg'=> 2000
            ],
            [
                'nev'=> 'Poitiou',
                'hadsereg'=> 3000
            ],
            [
                'nev'=> 'Marseille',
                'hadsereg'=> 1000
            ]
        ],
        'birodalom'=> false
    ],
    [
        'nev'=> 'Német-Római Birodalom',
        'hadsereg'=> 0,
        'vazallus'=> [
            [
                'nev'=> 'Ausztria',
                'hadsereg'=> 1000
            ],
            [
                'nev'=> 'Bajorország',
                'hadsereg'=> 2000
            ],
            [
                'nev'=> 'Cseh Királyság',
                'hadsereg'=> 500
            ],
            [
                'nev'=> 'Brandenburg',
                'hadsereg'=> 0
            ]
        ],
        'birodalom'=> true
    ],
    [
        'nev'=> 'Magyar Királyság',
        'hadsereg'=> 19000,
        'vazallus'=> [
            [
                'nev'=> 'Horvát Királyság',
                'hadsereg'=> 7000
            ]
        ],
        'birodalom'=> false
    ],
    [
        'nev'=> 'Oszmán Birodalom',
        'hadsereg'=> 50000,
        'vazallus'=> [
        ],
        'birodalom'=> true
    ]
];

function hadsereg($orszag){
    $sum = $orszag['hadsereg'];
    foreach($orszag['vazallus'] as $vazallus){
        $sum += $vazallus['hadsereg'];
    }
    return $sum;
}

$birodalmak = 0;
$kiralysagok = 0;
foreach($europa as $orszag){
    if($orszag['birodalom']){
        $birodalmak += hadsereg($orszag);
    }else{
        $kiralysagok += hadsereg($orszag);
    }
}

$birSzazalek = floor(($birodalmak/($birodalmak+$kiralysagok))*100);
$kirSzazalek = floor(($kiralysagok/($birodalmak+$kiralysagok))*100);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Európa</title>
</head>
<body>
    <table>
        <tr>
            <th>Ország</th>
            <th>Hadsereg</th>
            <th>Vazallusok</th>
        </tr>
        <?php foreach($europa as $orszag): ?>
            <tr>
                <td><?=$orszag['nev']?></td>
                <td><?=hadsereg($orszag)?></td>
                <td>
                    <ul>
                        <?php foreach($orszag['vazallus'] as $vazallus): ?>
                            <li><?=$vazallus['nev']?></li>
                        <?php endforeach ?>
                    </ul>
                </td>
            </tr>
        <?php endforeach ?>
    </table>

    <p style="background: lightblue;  width: <?=$birSzazalek?>%;">Birodalmak seregei: <?=$birodalmak?></p>
    <p style="background: lightgreen; width: <?=$kirSzazalek?>%;">Királyságok seregei: <?=$kiralysagok?></p>
</body>
</html>