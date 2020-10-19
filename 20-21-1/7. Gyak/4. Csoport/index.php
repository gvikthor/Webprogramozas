<?php

$eletkor = 20;
$logikai = false;

if($logikai){
    $valtozo = 'István';
}else if(false){
    $valtozo = 'Péter';
}else{
    $valtozo = 'Gergő';
}

for($i = 0; $i < 10; $i++){
    echo 'Ciklus<br>';
}

$tomb = ['István', 'Péter', 'Gergő'];
/*for($i = 0; $i < count($tomb); $i++){
    echo 'Az egyik név: ' . $tomb[$i] . '<br>';
}*/

$tomb1 = ['String', 15, true, [15,15,'valami']];

$objektum = [
    'nev' => 'Nándor',
    'kor' => 9
];
$objektum['kor'] = 10;
var_dump($objektum);

$objektum2 = (object)[
    'nev' => 'Dalma',
    'kor' => 82
];
$objektum2->kor = 83;
var_dump($objektum2);

function fuggvenynev($param1, $param2){
    $param1++;
    return $param1*$param2;
}

$emberek = [
    [
        'nev' => 'István',
        'kor' => 1030
    ],
    [
        'nev' => 'Péter',
        'kor' => 12
    ],
    [
        'nev' => 'Gergő',
        'kor' => 25
    ],
    [
        'nev' => 'Nandor',
        'kor' => 9
    ],
    [
        'nev' => 'Dalma',
        'kor' => 83
    ]
];


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4. Gyakorlat</title>
</head>
<body>
    <?php for($i = 0; $i < count($tomb); $i++): ?>
        Az egyik név: <?=$tomb[$i]?> <br>
    <?php endfor ?>

    Nándor kora: <?=$objektum['kor']?> <br>
    Dalma kora : <?=$objektum2->kor?>  <br>
    Szerveren vagyok! A nevem <?=$valtozo?>! <?=$eletkor?> éves vagyok. <br><br>

    <?=fuggvenynev($objektum['kor'],$objektum2->kor)?>

    <br><br><br>

    <table>
        <tr>
            <th>Sorszám</th>
            <th>Név</th>
            <th>Kor</th>
        </tr>
        <!--
        < ?php for($i = 0; $i < count($emberek); $i++): ?>
            <tr>
                <td>< ?=$emberek[$i]['nev']?></td>
                <td>
                    < ?php if($emberek[$i]['kor'] >= 18): ?>
                        < ?=$emberek[$i]['kor']?>
                    < ?php else: ?>
                        Kiskorú
                    < ?php endif ?>
                </td>
            </tr>
        < ?php endfor ?>
        -->
        <?php foreach($emberek as $index => $ember): ?>
            <tr>
                <td><?=$index?>.</td>
                <td><?=$ember['nev']?></td>
                <td>
                    <?php if($ember['kor'] >= 18): ?>
                        <?=$ember['kor']?>
                    <?php else: ?>
                        Kiskorú
                    <?php endif ?>
                </td>
            </tr>
        <?php endforeach ?>
    </table>

    <br><br>

    <h1>Dátumok</h1>
    Az aktuális év: <?=date('Y')?> <br>
    Az aktuális év: <?=date('y')?> <br>
    Az aktuális hónap: <?=date('M')?> <br>
    Az aktuális hónap: <?=date('m')?> <br>
    Az aktuális nap: <?=date('D')?> <br>
    Az aktuális nap: <?=date('d')?> <br>
    Az aktuális nap: <?=date('l')?> <br> <!--kis L-->
    Az aktuális óra: <?=date('H')?> <br>
    Az aktuális óra: <?=date('h')?> <br>
    Az aktuális napszak: <?=date('a')?> <br>
    Az aktuális perc: <?=date('i')?> <br>
    Az aktuális másodperc: <?=date('s')?> <br>

    Dátum: <?=date('Ymd')?> <br>
    Dátum: <?=date('Y m. d.')?> <br>
    Dátum: <?=date('Y-m-d')?> <br>
    Pontos idő: <?=date('Y M d. (l) H:i:s')?> <br>


    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</body>
</html>