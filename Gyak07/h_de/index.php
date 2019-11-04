<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        function b($logikai){
            if($logikai){
                return "igaz";
            }else{
                return "hamis";
            }
        }

        $valtozo = "Valaki";
    ?>

    html<br>
    html<br>
    html<br>
    html<br>

    <?php if(true): ?>
        <?php for($i = 0; $i < 10; $i++):?>
                <p style="font-size: <?php echo (10+$i); ?>px;"><?=$valtozo?></p>
        <?php endfor ?>
    <?php endif ?>

    <?php
        $a = ['a',2, true];
        var_dump($a);
        $a[] = 'alma';
        echo b(false);
    ?>

    <br>

    <?php
    $b = [
        "a" => "alma",
        "b" => 2,
        "c" => true
    ];
    var_dump($b);
    echo $b["a"] . '<br>';

    $o = (object)[
        "ahgfhgf" => "alma",
        "bjztfjzt" => 2,
        "cjtff" => true
    ];
    var_dump($o);
    echo $o->ahgfhgf . '<br>';

?>
hjgfvkjfshgjgvdjfshgvfdjshgvvg<br><br>
    <?php foreach($o as $index => $elem):?>
        A válzotó indexe: <?=$index?> és az értéke: <?=$elem?><br>
    <?php endforeach ?>
</body>
</html>