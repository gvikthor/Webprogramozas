<?php
$logikai = false;

if($logikai){
    $valtozo = 'Almafa';
}else if(true){
    $valtozo = 'Körtefa';
}else{
    $valtozo = 'Szilvafa';
}

/*for($i = 0; $i < 10; $i++){
    echo '<p style="font-size: ' . ($i*10) . 'px;">Erdő</p>';
}*/
$tomb1 = ['sziveg', 4512, true, ['asd',7,'rgf',true,false]];
$tomb1[] = 'valami új elem';
//var_dump($tomb1);
$elteAsszTomb = [
    'nev' => 'Eötvös Loránd Tudományegyetem',
    'oktatasiIntezmeny' => true,
    'halgatokSzama' => 40000,
    'karok' => [
        'ÁJK', 'BGGyK', 'BTK', 'GTI', 'IK', 'PPK', 'TáTK', 'TTK' 
    ]
];
$elteAsszTomb['karok'][] = 'TÓK';
$elteAsszTomb['cim'] = 'Szerb utca 5.';
//var_dump($elteAsszTomb);
//echo $elteAsszTomb['nev'];

$elteObj = (object)[
    'nev' => 'Eötvös Loránd Tudományegyetem',
    'oktatasiIntezmeny' => true,
    'halgatokSzama' => 40000,
    'karok' => [
        'ÁJK', 'BGGyK', 'BTK', 'GTI', 'IK', 'PPK', 'TáTK', 'TÓK', 'TTK' 
    ]
];
$elteObj->cim = 'Szerb utca 5.';
//var_dump($elteObj);
//echo $elteObj->nev;

function fuggveny($p1, $p2){
    $p1++;
    return $p1*$p2;
}
//echo fuggveny(4,5);

function ertekSzerint($parameter){
    $parameter += 10;
}

$valtozo2 = 5;
ertekSzerint($valtozo2);
echo $valtozo2;

function cimSzerint(&$parameter){
    $parameter += 10;
}
cimSzerint($valtozo2);
echo $valtozo2;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP 1. Gyak</title>
</head>
<body>
    Szerveren vagyok! <br>
    <?=$valtozo?>
    <?php for($i = 0; $i < 10; $i++): ?>
        <p style="font-size: <?=$i*2?>px;">Erdő</p>
    <?php endfor ?>

    <br><br>

    <?=$i?>

    <br><br>

    <!--< ?php if($elteObj->oktatasiIntezmeny): ?>
        <ul>
            < ?php for($i = 0; $i < count($elteObj->karok); $i++): ?>
                <li>< ?=$elteObj->karok[$i]?></li>
            < ?php endfor ?>
        </ul>
    < ?php endif ?>-->

    <?php if($elteObj->oktatasiIntezmeny): ?>
        <ul>
            <?php foreach($elteObj->karok as $kar): ?>
                <li><b><?=$kar?></b></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>