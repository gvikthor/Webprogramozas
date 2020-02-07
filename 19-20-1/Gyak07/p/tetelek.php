<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8"><title>Document</title>
</head>
<body>
    <?php
        $t = [1,4,76,4,23,45,7,4,23,6,7];
        $t1 = [356,765,56,567,3467,5578,776];
        $t2 = [1,5,1,5,4,1,6,4,8];
        $t3 = [643651453,64365413514,86541351435,64365143654,6584543645];
    ?>

    <h1>Összegzés</h1>
    <?php
    $osszeg = 0;
    foreach($t as $elem){
        if($elem % 2 == 0){
            $osszeg += $elem;
        }
    }
    echo "Az összegzés ereménye: $osszeg";   
    ?>
    <h1>Keresés</h1>
    <?php
    $talalt = false;
    $i = 0;
    while($i < count($t) && !$talalt){
        $talalt = ($t[$i] == 115);
        $i++;
    }
    if($talalt){
        echo "Volt ilyen elem.";
    }else{
        echo "Nem volt ilyen elem.";
    }
    ?>

    <h1>Eldöntés</h1>
    <?php
    if(true){
        echo "Eldöntöttük";
    }
    ?>

    <h1>Átlag</h1>
    <?php
        function atlag($tomb){
            $osszeg = 0;
            foreach($tomb as $e){
                $osszeg += $e;
            }
            return $osszeg/count($tomb);
        }
        echo "Az első tömb átlaga: " . atlag($t) . "<br>";
        echo "A második tömb átlaga: " . atlag($t1) . "<br>";
        echo "A harmadik tömb átlaga: " . atlag($t2) . "<br>";
        echo "A negyedik tömb átlaga: " . atlag($t3) . "<br>";
    ?>

    <h1>Function</h1>
    <?php
        function a($i){
            $i = 5;
        }
        function b(&$i){
            $i = [5];
        }

        $alma = 1;
        $belma = [1];
        echo $alma . "<br>";
        echo var_dump($belma) . "<br>";
        a($alma); b($belma);
        //$belma = b($belma);
        echo $alma . "<br>";
        echo var_dump($belma) . "<br>";
    ?>
</body>
</html>