<?php

$emberek = [
    [
        "nev" => "Ávdolozó Péter",
        "stadionok" => ["AA","GS"]
    ],
    [
        "nev" => "Brendó István",
        "stadionok" => ["MES","W","MK"]
    ],
    [
        "nev" => "Gyorskocsi Viktor",
        "stadionok" => ["AA","CN","MK"]
    ],
    [
        "nev" => "Esidisi Béla",
        "stadionok" => ["CN","W"]
    ],
    [
        "nev" => "Jean-Pierre Nándor",
        "stadionok" => ["GS"]
    ],
    [
        "nev" => "Jónás-Csillag Gergő",
        "stadionok" => ["MES","CN","W"]
    ],
    [
        "nev" => "Karsai Laura",
        "stadionok" => ["MK","AA"]
    ],
    [
        "nev" => "Liza-Lizzi Júlia",
        "stadionok" => ["AA"]
    ],
    [
        "nev" => "Noriáki Áron",
        "stadionok" => ["MK","W","AA","CN"]
    ],
    [
        "nev" => "Vamú Balázs",
        "stadionok" => ["AA","GS"]
    ]
];
        
function stringBenneVan($string, $keres){
    return strpos($string, $keres) !== false;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Délutáni ZH</title>
</head>
<body>

    <?php

        $stadionnev = "";
        $keres = "";
        $jegyszam = "";
    ?>

    <?php if($_SERVER["REQUEST_METHOD"] == "POST"): ?>

        <?php
            
            $voltHiba = false;
            $hibak = [];

            if(!isset($_POST["stadion"]) || trim($_POST["stadion"]) == ""){
                $voltHiba = true;
                $hibak[] = "A stadion megadása kötelező!";
            }else{
                $stadionnev = $_POST["stadion"];
                if(!($stadionnev == "AA" || $stadionnev == "GS" || $stadionnev == "MES" || $stadionnev == "CN" || $stadionnev == "W" || $stadionnev == "MK")){
                    $voltHiba = true;
                    $hibak[] = "A negadott stadion nem megfelelő!";
                }
            }

            if(isset($_POST["kereses"])){
                $keres = $_POST["kereses"];
            }

            if(!isset($_POST["jegyek"]) || trim($_POST["jegyek"]) == ""){
                $voltHiba = true;
                $hibak[] = "Add meg a keresés csoportját!";
            }else{
                $jegyszam = $_POST["jegyek"];
            }

        ?>

        <form method="post">
            Stadion: <input name="stadion" value="<?=$stadionnev?>"> <br>
            Keresés: <input name="kereses"  value="<?=$keres?>"> <br>
            <input type="radio" name="jegyek" value="mind"  <?php if($jegyszam == "mind") echo "checked"; ?>> Mindenki<br>
            <input type="radio" name="jegyek" value="keves" <?php if($jegyszam == "keves") echo "checked"; ?>> Kevesebb mint 3<br>
            <input type="radio" name="jegyek" value="sok" <?php if($jegyszam == "sok") echo "checked"; ?>> Több mint 3<br>
            <input type="submit">
        </form>

        <?php if($voltHiba): ?>
            <div>
                <?php foreach($hibak as $hiba): ?>
                    <?=$hiba?> <br>
                <?php endforeach ?>
            </div>
        <?php else: ?>
            <div>
                <?php foreach($emberek as $ember): ?>
                    <?php if(
                        in_array($stadionnev,$ember["stadionok"]) &&
                        ($keres == "" || stringBenneVan($ember["nev"],$keres)) &&
                        ($jegyszam == "mind" || ($jegyszam == "keves" && count($ember["stadionok"]) < 3) || ($jegyszam == "sok" && count($ember["stadionok"]) >= 3))
                    ):?>
                        <p style="background-color: <?php if(count($ember["stadionok"]) < 3){ echo "red"; }else{ echo "green"; } ?>"><?=$ember["nev"]?></p>
                    <?php endif ?>
                <?php endforeach ?>
            </div>
        <?php endif ?>

    <?php else: ?>

        <form method="post">
            Stadion: <input name="stadion"> <br>
            Keresés: <input name="kereses"> <br>
            <input type="radio" name="jegyek" value="mind"> Mindenki<br>
            <input type="radio" name="jegyek" value="keves"> Kevesebb mint 3<br>
            <input type="radio" name="jegyek" value="sok"> Több mint 3<br>
            <input type="submit">
        </form>

    <?php endif ?>


</body>
</html>