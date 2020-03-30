<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    Sikerült!
    <?php

        echo 'Hello there!<br>';
        $nev = 'General Kenobi!';
        echo $nev;

    ?>
    Sikerült!
    <?php /*echo 'Almafa!<br>';
    
        if(true){
            echo 'Alma';
        }else{
            echo 'Körte';
        }

        for($i = 0; $i < 10; $i++){
            echo '<br>alma<br>';
        }*/
        $j = 0.0;
        /*while($j < 10){
            echo '<br>körte '.$j;
            $j++;
        }*/
    ?>

    <br><br>

    Lorem ipsum.... ksdjhflkdsjfh lkjfhasdlkjhlksjhg lkajghlkhglkhds.<br>
    
    <?php if(true): ?>
        <div>Alma<p> almafa </p></div>
    <?php else: ?>
        Körte
    <?php endif ?>

    <?php for($i = 0; $i < 10; $i++): ?>
        Az aktuális iteráció <?=$i?> <br>
    <?php endfor ?>

    <?php while($j < 10): ?>

        Az aktuális iteráció j=<?=$j?> <br>

        <?php $j++; ?>

    <?php endwhile ?>

    <?php
    
    $tomb = ['elme1','elem2','elem3'];
    echo $tomb[1].'<br>';
    echo count($tomb);

    array_push($tomb,'elem4');
    var_dump($tomb);
    array_push($tomb,'elem5','elem6','elem7');
    var_dump($tomb);

    $tomb[] = 'elem8';
    var_dump($tomb);
    ?>

    <br>
    A tömb elemei:<br>
    <?php for($i = 0; $i < count($tomb); $i++): ?>
        A tömb <?=$i?>. eleme: <?=$tomb[$i]?>.<br>
    <?php endfor ?>
    <br>
    A tömb elemei:<br>
    <?php foreach($tomb as $elem): ?>
        A tömb aktuális eleme: <?=$elem?>.<br>
    <?php endforeach ?>
    <br>

    <?php
    $objektum = [
        'nev' => 'Valaki Béla',
        'kor' => 30,
        'ferfi' => true,
        'gyerekek' => ['Éva','Ádám']
    ];
    var_dump($objektum);
    echo $objektum['nev'].'<br>';

    $objektum2 = (object)[
        'nev' => 'Chris Hemsworth',
        'kor' => 35,
        'ferfi' => true,
        'gyerekek' => ['egy','ketto']
    ];
    var_dump($objektum2);
    echo $objektum2->nev;

    ?>

    <?php
        function alma(){
            echo 'Almafa 1234567';
        }
        alma();

        function paros($p){
            return $p % 2 == 0;
        }

        function boolToString($b){
            /*if($b){
                return 'igaz';
            }else{
                return 'hamis';
            }*/
            return $b ? 'igaz' : 'hamis';
        }
    ?>

    Van ez a számunk, hogy 2, és ez vajon páros? <?=boolToString(paros(2))?>

    <br>
    A dátum:<br>
    <?= date('Y,m.d (l) H:i-s') ?>

</body>
</html>