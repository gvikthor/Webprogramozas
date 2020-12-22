<?php
$activities = [
    1 => [
        "name" => "alvás",
        "difficulty" => 0.05
    ],
    2 => [
        "name" => "bányászás",
        "difficulty" => 0.6
    ],
    3 => [
        "name" => "család",
        "difficulty" => 0.4
    ],
    4 => [
        "name" => "programozás",
        "difficulty" => 0.95
    ],
    5 => [
        "name" => "zsákmányolás",
        "difficulty" => 0.7
    ],
    6 => [
        "name" => "vadászat",
        "difficulty" => 0.6
    ],
    7 => [
        "name" => "játék",
        "difficulty" => 0.0
    ],
    8 => [
        "name" => "főzés",
        "difficulty" => 0.6
    ]
];
$goblins = [
    "WEB'LIN" => [
        [
            "startHour" => 0,
            "activityKey" => 3
        ],
        [
            "startHour" => 1,
            "activityKey" => 3
        ],
        [
            "startHour" => 3,
            "activityKey" => 5
        ],
        [
            "startHour" => 4,
            "activityKey" => 4
        ],
        [
            "startHour" => 5,
            "activityKey" => 4
        ],
        [
            "startHour" => 7,
            "activityKey" => 1
        ]
    ],
    "HUN'TER" => [
        [
            "startHour" => 0,
            "activityKey" => 1
        ],
        [
            "startHour" => 1,
            "activityKey" => 6
        ],
        [
            "startHour" => 3,
            "activityKey" => 3
        ],
        [
            "startHour" => 4,
            "activityKey" => 3
        ],
        [
            "startHour" => 5,
            "activityKey" => 6
        ],
        [
            "startHour" => 7,
            "activityKey" => 6
        ]
    ],
    "MOT'HER" => [
        [
            "startHour" => 0,
            "activityKey" => 3
        ],
        [
            "startHour" => 1,
            "activityKey" => 3
        ],
        [
            "startHour" => 3,
            "activityKey" => 6
        ],
        [
            "startHour" => 4,
            "activityKey" => 8
        ],
        [
            "startHour" => 5,
            "activityKey" => 8
        ],
        [
            "startHour" => 7,
            "activityKey" => 3
        ]
    ],
    "GOB'KID" => [
        [
            "startHour" => 0,
            "activityKey" => 7
        ],
        [
            "startHour" => 1,
            "activityKey" => 7
        ],
        [
            "startHour" => 3,
            "activityKey" => 7
        ],
        [
            "startHour" => 4,
            "activityKey" => 7
        ],
        [
            "startHour" => 5,
            "activityKey" => 7
        ],
        [
            "startHour" => 7,
            "activityKey" => 7
        ]
    ]
];

?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1. feladat</title>
    <style>
        table, td, th {
            border: 1px black solid;
            border-collapse: collapse;
        }
        td { text-align: center; }
    </style>
</head>

<body>
    <h1>1. feladat</h1>
    <h2>Időbeosztás</h2>
    <table>
        <!-- Fejlécsor -->
        <tr>
            <th>Óra</th>
            <?php foreach($goblins as $nev => $tevekenysegek): ?>
                <th><?=$nev?></th>
            <?php endforeach ?>
        </tr>

        <!-- Adatsorok == órák -->
        <?php for($ora = 0; $ora < 8; $ora++): ?>
            <tr>
                <!-- Első oszlop  -->
                <td><?=$ora?></td>
                
                <!-- Családtagok oszlopai  -->
                <?php foreach($goblins as $nev => $tevekenysegek): ?>
                    <?php
                        // Lineáris keresés az adott goblin tevékenységeire, hogy a startHour-ja az aktuális óra-e.
                        // Nyilván lehet szépen függvénnyel, ternary operátorral, korábban kilépéssel (while), csak ez a legstraightforwardabb, legérthetőbb.
                        $eredmeny = '';
                        $szin = '';
                        foreach($tevekenysegek as $tevekenyseg){
                            if($tevekenyseg['startHour'] == $ora){ //ha a startHour az aktuális óra
                                $feladat = $activities[$tevekenyseg['activityKey']];
                                $eredmeny = $feladat['name'];
                                if($feladat['difficulty'] > 0.8){
                                    $szin = 'red';
                                }else if($feladat['difficulty'] > 0.5){
                                    $szin = 'orange';
                                }else{
                                    $szin = 'lightgreen';
                                }
                            }
                        }
                    ?>
                    
                    <td style="background-color: <?=$szin?>;"><?=$eredmeny?></td>
                <?php endforeach ?>
            </tr>
        <?php endfor ?>
    </table>
</body>

</html>