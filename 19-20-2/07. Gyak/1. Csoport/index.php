<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    Oldal yaay

    <?php
        echo "Hello There!";

        $valtozo = "General Kenobi!";
        $valtozo2 = "Your move!";

        echo "{$valtozo}alma $valtozo2";

        echo "<br><br>";
        for($i = 0; $i < 10; $i++){
            echo "Jelenleg ez a $i. iteráció<br>";
        }

        echo "<br><br>";
        $j = 0;
        while($j < 10){
            echo "Jelenleg ez a $j. iteráció<br>";
            $j++;
        }

        if(false){
            echo "Alma";
        }else{
            echo "Körte";
        }
    ?>

    ajkdfhlksadjh lsdkajfhlsakjhflsakfjghlkasd lakh<br> dkljfhsalkhfsalkh <br>

    <?php for($i = 0; $i < 10; $i++): ?>
        Jelenleg ez a <?=$i?>. iteráció.<br>
    <?php endfor ?> <!-- endwhile -->

    <?php if(true): ?>
        Alma
    <?php else: ?>
        Körte
    <?php endif ?>

    <?php
        $tomb = ["alma","körte","szilva"];
        var_dump($tomb);
    ?>

    A tömb elemei:<br>
    <?php for($i = 0; $i < count($tomb); $i++): ?>
        A tömb <?=$i?>. eleme: <?=$tomb[$i]?><br>
    <?php endfor ?>
    <br>
    A tömb elemei foreach-csel:<br>
    <?php foreach($tomb as $elem): ?>
        A tömb aktuális eleme: <?=$elem?><br>
    <?php endforeach ?>

    <br><br>

    <?php
        $fakeobjektum = [
            "nev" => "Chris Evans",
            "eletkor" => 30,
            "ferfi" => true,
            "gyerekek" => ["Bucky","Steve"]
        ];
        var_dump($fakeobjektum);

        echo $fakeobjektum["nev"];
    ?>

    <br><br>

    <?php
        $objektum = (object)[
            "nev" => "Chris Evans",
            "eletkor" => 30,
            "ferfi" => true,
            "gyerekek" => ["Bucky","Steve"]
        ];
        var_dump($objektum);

        echo $objektum->nev;
    ?>

    <br><br>

    <?php
        function osszegParosE($a,$b){
            if(($a+$b)%2 == 0){
                return "páros";
            }else{
                return "páratlan";
            }
        }
    ?>

    Az 4 és a 6 összege <?=osszegParosE(4,6)?>.

    <br><br>

    <?php
        echo date('Y,m-d (D) :) s:H-i');
    ?>

</body>
</html>