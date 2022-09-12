<?php

$kepviselok = [
    (object)[
        'nev' => 'Ormos Ferenc',
        'nepszeruseg' => 1000,
        'kormanyparti' => true,
        'facebookfan' => [
            'Lohonyai Lászlóné',
            'Csepregi-Nagy Annané Kovács János',
            'Tatati Kis Emília Ferenc'
        ]
    ],
    (object)[
        'nev' => 'Gyulai Viktor',
        'nepszeruseg' => 1000,
        'kormanyparti' => false,
        'facebookfan' => [
            'Zsolti a Béka',
            'Alex a Totally Spiesból',
            'Rikki a H2O-ból'
        ]
    ],
    (object)[
        'nev' => 'Paprikáskrumpli Gergely',
        'nepszeruseg' => 534,
        'kormanyparti' => true,
        'facebookfan' => [
            'Elsa a Frozenből'
        ]
    ],
    (object)[
        'nev' => 'Asgardi Loki',
        'nepszeruseg' => 597,
        'kormanyparti' => false,
        'facebookfan' => [
            'Christoff a Frozenből',
            'Geralt of Rivia'
        ]
    ]
];

function arany($emberek){
    $eredmeny = (object)[
        'kormany' => 0,
        'ellenzek' => 0
    ];
    
    foreach($emberek as $ember){
        if($ember->kormanyparti){
            $eredmeny->kormany += $ember->nepszeruseg;
        }else{
            $eredmeny->ellenzek += $ember->nepszeruseg;
        }
        /*
        if($ember->kormanyparti):
            $eredmeny->kormany += $ember->nepszeruseg;
        else:
            $eredmeny->ellenzek += $ember->nepszeruseg;
        endif;
        */
    }

    return $eredmeny;
}

$nepszerusegek = arany($kepviselok);
$nepszK = ($nepszerusegek->kormany  / ($nepszerusegek->kormany + $nepszerusegek->ellenzek))*100;
$nepszE = ($nepszerusegek->ellenzek / ($nepszerusegek->kormany + $nepszerusegek->ellenzek))*100;

/*
foreach(adfadsf):

endforeach;

for():

endfor;

if():

endif;

if():

else:

endif;

<?php echo $valami; ?>
<?=$valami?>
*/

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Képviselőválasztás</title>
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
                <th>Népszerűség</th>
                <th>Facebook fanok</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($kepviselok as $kepviselo): ?>
                <tr style="background-color: #<?=$kepviselo->kormanyparti ? '12b82f' : 'ff00f7'?>;">
                    <td><?=$kepviselo->nev?></td>
                    <td><?=$kepviselo->nepszeruseg?> fő</td>
                    <td>
                        <ul>
                            <?php foreach($kepviselo->facebookfan as $fan): ?>
                                <li><?=$fan?></li>
                            <?php endforeach ?>
                        </ul>
                    </td>
                </tr>
            <?php endforeach ?>
        </tbody>
    </table>
    <div style="width: <?=$nepszK?>%; background-color: #12b82f;">A kormánypárt össznépszerűsége: <?=$nepszerusegek->kormany?>  (<?=$nepszK?>%)</div>
    <div style="width: <?=$nepszE?>%; background-color: #ff00f7;">Az ellenzék össznépszerűsége:   <?=$nepszerusegek->ellenzek?> (<?=$nepszE?>%)</div>
</body>
</html>