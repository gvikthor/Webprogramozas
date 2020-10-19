<?php

$cegek = [
    [
        'nev' => 'Buthan-ski',
        'leiras' => 'Meleg ruhák',
        'szekhely' => 'Budapest',
        'bevetel' => 'Állami fenntarát',
        'alkalmazattoak' => [
            [
                'nev' => 'Tomika',
                'fizetes'=> 15000
            ],
            [
                'nev'=> 'Misike',
                'fizetes'=> 15000
            ]
        ],
        'alapitva' => 1996
    ],
    [
        'nev' => 'Vector Media',
        'leiras' => 'Nikon kamerák Canon objektívekkel',
        'szekhely' => 'Érd',
        'bevetel' => 'Bankártyás fizetések',
        'alkalmazattoak' => [
            [
                'nev'=> 'Viktor',
                'fizetes'=> 15000
            ]
        ],
        'alapitva' => 1997
    ],
    [
        'nev' => 'Nábor Tábor',
        'leiras' => 'Kiskorúak táboroztatása',
        'szekhely' => 'Budapest',
        'bevetel' => 'Kiskorúak ebédpénze',
        'alkalmazattoak' => [
            [
                'nev'=> 'Józsi',
                'fizetes'=> 15000
            ]
        ],
        'alapitva' => 2000
    ],
    [
        'nev' => 'Fent az Auron',
        'leiras' => 'Sokkal melegebb, mint a Buthan-ski',
        'szekhely' => 'Etyek',
        'bevetel' => 'Nemzeti Általános Tartalék',
        'alkalmazattoak' => [
            [
                'nev'=> 'Ákos',
                'fizetes'=> 15000
            ],
            [
                'nev'=> 'Áron',
                'fizetes'=> 15000
            ],
            [
                'nev'=> 'Gergő',
                'fizetes'=> 15000
            ]
        ],
        'alapitva' => 1999
    ],
    [
        'nev' => 'István a Király',
        'leiras' => 'WoW accountok',
        'szekhely' => 'Debrecen',
        'bevetel' => 'Gyerekek, akik megveszik a magas szintű accountokat',
        'alkalmazattoak' => [
            [
                'nev'=> 'Nándor',
                'fizetes'=> 15000
            ],
            [
                'nev'=> 'István',
                'fizetes'=> 15000
            ]
        ],
        'alapitva' => 2000
    ]
];

$budapesti = 0;
$videki = 0;
foreach($cegek as $ceg){
    if($ceg['szekhely'] == 'Budapest'){
        $budapesti++;
    }else{
        $videki++;
    }
}

$budapestiSzazalek = floor(($budapesti/($budapesti+$videki))*100);
$videkiSzazalek = floor(($videki/($budapesti+$videki))*100);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emberek</title>
</head>
<body>
    <table>
        <tr>
            <th>Cég neve</th>
            <th>Cég leírása</th>
            <th>Cég székhelye</th>
            <th>Cég legnagyobb bveételi forrása</th>
            <th>Cég alkalmazottai</th>
            <th>Cég kora</th>
        </tr>
        <?php foreach($cegek as $ceg): ?>
            <tr>
                <td><?=$ceg['nev']?></td>
                <td><?=$ceg['leiras']?></td>
                <td><?=$ceg['szekhely']?></td>
                <td><?=$ceg['bevetel']?></td>
                <td>
                    <ul>
                    <?php foreach($ceg['alkalmazattoak'] as $alkalmazott): ?>
                        <li><?=$alkalmazott['nev']?> (<?=$alkalmazott['fizetes']?>)</li>
                    <?php endforeach ?>
                    </ul>
                </td>
                <td>
                    <?=intval(date('Y'))-$ceg['alapitva']?>
                </td>
            </tr>
        <?php endforeach ?>
    </table>

    <p style="background-color: lightblue; width: <?=$budapestiSzazalek?>%;">Budapesti cégek: <?=$budapestiSzazalek?>%</p>
    <p style="background-color: pink; width: <?=$videkiSzazalek?>%;">Vidéki cégek: <?=$videkiSzazalek?>%</p>
</body>
</html>