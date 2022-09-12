<?php

function tartalmaz($nagyString, $eztTartalmazza){
    return strpos($nagyString, $eztTartalmazza) !== false;
    // PHP7-ben így kell használni, PHP8-ban már van rá szebb függvény
}

$napok = json_decode(file_get_contents('adatok.json'));
/*$napok = [
    (object)[
        'vadasz'=> 'Regő',
        'allat'=> 'őz',
        'suly' => 15
    ],
    (object)[
        'vadasz'=> 'Vilmos',
        'allat'=> 'vadkan',
        'suly' => 12
    ],
    (object)[
        'vadasz'=> 'Regő',
        'allat'=> 'kecske',
        'suly' => 7
    ],
    (object)[
        'vadasz'=> 'Regő',
        'allat'=> 'nyúl',
        'suly' => 2
    ],
    (object)[
        'vadasz'=> 'Vilmos',
        'allat'=> 'sárkány',
        'suly' => 480
    ],
    (object)[
        'vadasz'=> 'Regő',
        'allat'=> 'teknős',
        'suly' => 4
    ]
];*/

$vadaszok = [];
$nehezAllatok = [
    (object)[
        'suly' => -1,
        'faj' => ''
    ],
    (object)[
        'suly' => -1,
        'faj' => ''
    ],
    (object)[
        'suly' => -1,
        'faj' => ''
    ]
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
    .Vilmos{
        background-color: pink;
    }
    .Regő{
        background-color: lightblue;
    }
</style>
<body>
    <form>
        Állatfaj (részlet): <input name="allat"> <br>
        <input type="radio" name="vadasz" value="Vilmos"> Vilmos <br>
        <input type="radio" name="vadasz" value="Regő"> Regő <br>
        <input type="submit" value="Keres">
    </form>
    <table>
        <tr>
            <th>Vadász</th>
            <th>Állat</th>
            <th>Súly</th>
        </tr>
        <?php foreach($napok as $nap): ?>
            <?php if(!isset($_GET['allat']) || trim($_GET['allat']) == '' || tartalmaz($nap->allat, $_GET['allat'])): ?>
                <tr class="<?=$nap->vadasz?>">
                    <td><?=$nap->vadasz?></td>
                    <td><?=$nap->allat?></td>
                    <td><?=$nap->suly?></td>
                </tr>
                <?php
                    if(isset($vadaszok[$nap->vadasz])){
                        $vadaszok[$nap->vadasz]->suly += $nap->suly;
                        $vadaszok[$nap->vadasz]->db += 1;
                    }else{
                        $vadaszok[$nap->vadasz] = (object)[
                            'nev' => $nap->vadasz,
                            'suly' => $nap->suly,
                            'db' => 1
                        ];
                    }
                    
                    //ezt persze lehetne szebben, csak így biztos mindenki átlátja
                    if($nap->suly > $nehezAllatok[2]->suly){
                        if($nap->suly > $nehezAllatok[1]->suly){
                            if($nap->suly > $nehezAllatok[0]->suly){
                                $nehezAllatok[2]->suly = $nehezAllatok[1]->suly;
                                $nehezAllatok[2]->faj  =  $nehezAllatok[1]->faj;
                                $nehezAllatok[1]->suly = $nehezAllatok[0]->suly;
                                $nehezAllatok[1]->faj  =  $nehezAllatok[0]->faj;
                                $nehezAllatok[0]->suly = $nap->suly;
                                $nehezAllatok[0]->faj  = $nap->allat;
                            }else{
                                $nehezAllatok[2]->suly = $nehezAllatok[1]->suly;
                                $nehezAllatok[2]->faj  =  $nehezAllatok[1]->faj;
                                $nehezAllatok[1]->suly = $nap->suly;
                                $nehezAllatok[1]->faj  = $nap->allat;
                            }
                        }else{
                            $nehezAllatok[2]->suly = $nap->suly;
                            $nehezAllatok[2]->faj = $nap->allat;
                        }
                    }
                ?>
            <?php endif ?>
        <?php endforeach ?>
    </table>

    <ul>
    <?php foreach($vadaszok as $vadasz): ?>
        <?php if(!isset($_GET['vadasz']) || $_GET['vadasz'] == $vadasz->nev): ?>
            <li>
                <?=$vadasz->nev?>:<?=($vadasz->suly)/($vadasz->db)?>                
            </li>
        <?php endif ?>
    <?php endforeach ?>
    </ul>

    <ul>
    <?php foreach($nehezAllatok as $allat): ?>
        <?php if($allat->suly > -1): ?>
            <li><?=$allat->faj?></li>
        <?php endif ?>
    <?php endforeach ?>
    </ul>
</body>
</html>