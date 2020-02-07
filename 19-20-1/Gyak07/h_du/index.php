<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    sdfkfjvhsdfjkfdkjhdfjk<br><br>
    
    <?php
        $a = "szoveg";
    ?>
    <!-- html -->

    Valami <?=$a?> hvkj sdfkdjvhkydfjhdk udhfg vf<br>
    
    kljsdfhgvlksdfjhvkdfjv,vhj<br>

    <?php if(false): ?>
        Egy
    <?php elseif(false): ?>
        Kettő
    <?php else: ?>
        Három
    <?php endif ?>

    <?php for($i = 10; $i < 50; $i+=5): ?>
        <p style="font-size: <?=$i?>px">Valami</p>
    <?php endfor ?>

    <?php
        $tomb = ["skdjfhsfkj", 3566, true];
        var_dump($tomb);

        foreach($tomb as $elem){
            echo $elem . ' ';
        }

        $atomb = [
            "index" => "érték",
            "alma" => 3456476,
            "valami" => false
        ];
        $atom[] = "újelem";
        echo count($atomb);
        $object = (object)[
            "index" => "érték",
            "alma" => 3456476,
            "valami" => false
        ];
        echo $tomb[0];
        echo $atomb["index"];
        echo $object->index;

        foreach($atomb as $index => $elem){
            echo "$index: $elem <br>";
        }
    ?>

    <?php foreach($atomb as $index => $elem): ?>
        <p>Index: <?=$index?>, Érték: <?=$elem?></p>
    <?php endforeach ?>
</body>
</html>