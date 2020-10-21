<?php
//$valtozo = 'Angol Királyság';
//echo $valtozo;
$valtozo2 = 'Francia Királyság';

$logikai = false;

if($logikai){
    $valtozo = 'Német-Rómia Birodalom';
}else if(true){
    $valtozo = 'Magyar Királyság';
}else{
    $valtozo = 'Kasztília';
}

/*for($i = 0; $i < 10; $i++){
    echo '<p style="font-size:' . ($i*10) . 'px">Ciklus<p>';
}

var_dump($i);*/

$tomb = ['Lajos', 'Lajos', 'Lajos', 'Lajos'];

$asszociativTomb = [
    'nev' => 'Henry',
    'sorszam' => 8,
    'felesegek' => ['elvált',false,false,'elvált',false,1]
];
$asszociativTomb['almafa'] = 2;
//echo $asszociativTomb['nev'];
var_dump($asszociativTomb);

echo '<br>';

$objektum = (object)[
    'nev' => 'Lajos',
    'sorszam' => 27,
    'felesegek' => ['boldog kapcsolat <3']
];
$objektum->almafa = 2;
//echo $objektum->nev;
var_dump($objektum);

echo '<br><br>';

function fuggveny($parameter1, $parameter2){
    $parameter1++;
    return $parameter1*$parameter2;
}

function novel1($p){
    $p++;
}
function novel2(&$p){
    $p++;
}

$a = 0;
novel1($a);
echo $a;
novel2($a);
echo $a;

echo '<br><br>';

function hozzafuz1($tomb){
    $tomb[] = 'almafa';
}

function hozzafuz2(&$tomb){
    $tomb[] = 'almafa';
}

$t = ['kortefa', 'szilvafa'];
hozzafuz1($t);
var_dump($t);
echo '<br>';
hozzafuz2($t);
var_dump($t);

echo '<br><br>';


$nrb = [
    [
        'nev' => 'Ausztria',
        'hadsereg' => 25000,
        'valaszto' => false,
    ],
    [
        'nev' => 'Cseh Királyság',
        'hadsereg' => 20000,
        'valaszto' => true,
    ],
    [
        'nev' => 'Bajorország',
        'hadsereg' => 10000,
        'valaszto' => false,
    ],
    [
        'nev' => 'Brandenburg',
        'hadsereg' => 10000,
        'valaszto' => true,
    ],
    [
        'nev' => 'Hamburg',
        'hadsereg' => 2000,
        'valaszto' => false,
    ],
    [
        'nev' => 'Mainz',
        'hadsereg' => 7000,
        'valaszto' => true,
    ],
    [
        'nev' => 'Szilézia',
        'hadsereg' => 1000,
        'valaszto' => false,
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
<body>
    Szerveren vagyok! <br>
    <?=$valtozo?> <br>
    <?=fuggveny(5,7)?> <br>
    <?php for($i = 0; $i < 10; $i++): ?>
        A(z) <?=$i?>. keresztes hadjárat sikertelen volt. <br>
    <?php endfor ?>

    <h1>Német-Római választófejedelmek</h1>
    <ul>
        <?php foreach($nrb as $hercegseg): ?>
            <?php if($hercegseg['valaszto']): ?>
                <li>- <?=$hercegseg['nev']?></li>
            <?php endif ?>
        <?php endforeach ?>
    </ul>

    <?php
    var_dump(5*'6.5');
    var_dump('5.5'*6);
    var_dump(5+'6.5');
    var_dump('5.5'+6);
    var_dump(floor('5.5'));
    var_dump(intval('5'));
    ?>

    <!--<ul>
        < ?php for($i = 0; $i < count($nrb); $i++): ?>
            < ?php if($nrb[$i]['valaszto']): ?>
                <li>< ?=$nrb[$i]['nev']?></li>
            < ?php endif ?>
        < ?php endfor ?>
    </ul>-->
</body>
</html>