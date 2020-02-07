<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>Document</title>
</head>
<body>
    Hello
    <?php
        $i = "alma";

        echo $i;
        if(true){
            echo "hi";
        }
        for($j = 10; $j < 50; $j+=10){
            echo "<div style=\"font-size: {$j}px\">aaa</div>";
        }
        //for(elem of tomb)
        $tomb = ["asdfasd",4576,true,"sdtrghdgh"];
        foreach($tomb as $elem){
            echo $elem;
        }
        echo "<br><br>";
        echo var_dump($tomb);
        echo "<br><br>";
        for($i = 0; $i < count($tomb); $i++ ){
            echo $tomb[$i];
        }
        $atomb = [
            "alma" => "korte",
            "bvalami" => 67676,
            "qqq" => true
        ];
        echo "<br>";
        foreach($atomb as $index => $elem){
            echo "A $index indexű elem értéke: $elem<br>";
        }
    ?>
    valami
    <br><br>

    <?php for($j = 10; $j < 50; $j+=10): ?>
        <div style="font-size:<?=$j?>px">a</div>
    <?php endfor ?>

    <?php foreach($atomb as $index => $elem): ?>
        A <?=$index?> indexű elem értéke: <?=$elem?><br>
    <?php endforeach ?>

    <?php if(true): ?>
        Alma
    <?php endif ?>
</body>
</html>