<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    Betöltöttem.

    <?php
        $alma = "fa";
        $korte = "alma";

        if(false){
            echo $alma;
        }else{
            echo $korte;
        }

        echo "<br>";
        for($i = 0; $i < 10; $i++){
            echo "Jelenleg a $i iterációban járunk.<br>";
        }

        echo "<br>";
        $j = 0;
        while($j < 10){
            echo "Jelenleg a $j iterációban járunk.<br>";
            $j++;
        }
    ?>

    safkjhaslkjh aslkjfghsaflkjghlkfdsjghlkdfjh glksdfjghlksfdjhglkdsfjhg lksdj
    <br> rkgjhlkjghlks fglkjsdfhglk jdsg
    <br> akjshflksjhglksdfghlksdfj

    <br>
    <?php if(false): ?>
        Alma
    <?php endif ?>
    <br>

    afkjhaslkjh aslkjfghsaflkjghlkfdsjghlkdfjh glksdfjghlksfdjhglkdsfjhg lksdj
    <br> rkgjhlkjghlks fglkjsdfhglk jdsg
    <br> akjshflksjhglksdfghlksdfj
    <br>

    <?php for($i = 0; $i < 10; $i++): ?>
        <div>Szoveg <i>i értéke:</i> <?=$i?> mégvalami</div>
    <?php endfor ?> <!-- endwhile -->

    <br>
    afkjhaslkjh aslkjfghsaflkjghlkfdsjghlkdfjh glksdfjghlksfdjhglkdsfjhg lksdj
    <br> rkgjhlkjghlks fglkjsdfhglk jdsg
    <br> akjshflksjhglksdfghlksdfj

    <?php
        $tomb = ["alma","körte","szilva"];
    ?>

    <br><br>

    A tömb elemei:<br>
    <?php for($i = 0; $i < count($tomb); $i++): ?>
        A tömb <?=$i?>. eleme: <?=$tomb[$i]?>.<br>
    <?php endfor ?>

    <br>
    Most megváltoztatom a tömb elemeit valahogy.<br>
    <?php
        $tomb[1] = "barack";
        array_push($tomb,"kenyér","citrom","dinnye");
        //var_dump($tomb);
        $tomb[] = "saláta";
    ?>
    <br>

    <?php foreach($tomb as $elem): ?>
        A tömb aktuális eleme: <?=$elem?>.<br>
    <?php endforeach ?>

    <br><br><br>

    <?php
        $objektumfele = [
            "nev" => "Chris Pratt",
            "eletkor" => 30,
            "nem" => "ferfi",
            "marvel" => true,
            "gyerek" => ["Peter","Gamorra"]
        ];
        var_dump($objektumfele);
        echo $objektumfele["nev"];
    ?>

    <br>

    <?php
        $objektum = (object)[
            "nev" => "Chris Pratt",
            "eletkor" => 30,
            "nem" => "ferfi",
            "marvel" => true,
            "gyerek" => ["Peter","Gamorra"]
        ];
        var_dump($objektum);
        echo $objektum->nev;
    ?>

    <br><br><br>

    <?php
        function fuggveny1($p){
            echo "Almafa $p 123";
            return "körte";
        }
        function nap($english){
            if($english == "Monday") return "Hétfő";
        }
    ?>

    djfhlksjaghlksfdjglksjdfghlsdjkghí ksjdfhsldkhj <?php fuggveny1("valami"); ?> klfjhlkdfjhlkdf 

    <br><br><br>

    <?php
        echo date("Y, m-d | (D) H-i,s");
    ?>
</body>
</html>