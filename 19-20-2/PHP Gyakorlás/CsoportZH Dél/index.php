<?php

$emberek = [
    [
        "nev" => "Ávdolozó Péter",
        "csalad" => "Habsburg",
        "kozeli" => true
    ],
    [
        "nev" => "Brendó István",
        "csalad" => "Romanoff",
        "kozeli" => false
    ],
    [
        "nev" => "Gyorskocsi Viktor",
        "csalad" => "Romanoff",
        "kozeli" => true
    ],
    [
        "nev" => "Esidisi Béla",
        "csalad" => "Bourbon",
        "kozeli" => true
    ],
    [
        "nev" => "Jean-Pierre Nándor",
        "csalad" => "Habsburg",
        "kozeli" => true
    ],
    [
        "nev" => "Jónás-Csillag Gergő",
        "csalad" => "Habsburg",
        "kozeli" => false
    ],
    [
        "nev" => "Karsai Laura",
        "csalad" => "Romanoff",
        "kozeli" => true
    ],
    [
        "nev" => "Liza-Lizzi Júlia",
        "csalad" => "Bourbon",
        "kozeli" => true
    ],
    [
        "nev" => "Noriáki Áron",
        "csalad" => "Romanoff",
        "kozeli" => true
    ],
    [
        "nev" => "Vamú Balázs",
        "csalad" => "Bourbon",
        "kozeli" => true
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
    <title>Déli ZH</title>
</head>
<body>

    <?php

        $csaladnev = "";
        $keres = "";
        $kozeli = "";
    ?>

    <?php if($_SERVER["REQUEST_METHOD"] == "POST"): ?>

        <?php
            
            $voltHiba = false;
            $hibak = [];

            if(!isset($_POST["csaladnev"]) || trim($_POST["csaladnev"]) == ""){
                $voltHiba = true;
                $hibak[] = "Az ősi család megadása kötelező!";
            }else{
                $csaladnev = $_POST["csaladnev"];
                if(!($csaladnev == "Habsburg" || $csaladnev == "Bourbon" || $csaladnev == "Romanoff")){
                    $voltHiba = true;
                    $hibak[] = "A családnév nem elég ősi!";
                }
            }

            if(isset($_POST["kereses"])){
                $keres = $_POST["kereses"];
            }

            if(!isset($_POST["kozeli"]) || trim($_POST["kozeli"]) == ""){
                $voltHiba = true;
                $hibak[] = "Add meg a keresés csoportját!";
            }else{
                $kozeli = $_POST["kozeli"];
            }

        ?>

        <form method="post">
            Család: <input name="csaladnev" value="<?=$csaladnev?>"> <br>
            Keresés: <input name="kereses"  value="<?=$keres?>"> <br>
            <input type="radio" name="kozeli" value="mind"  <?php if($kozeli == "mind") echo "checked"; ?>> Mindenki<br>
            <input type="radio" name="kozeli" value="közel" <?php if($kozeli == "közel") echo "checked"; ?>> Csak közeli rokonok<br>
            <input type="radio" name="kozeli" value="távol" <?php if($kozeli == "távol") echo "checked"; ?>> Csak távoli rokonok<br>
            <input type="submit">
        </form>

        <?php if($voltHiba): ?>
            <div>
                <?php foreach($hibak as $hiba): ?>
                    <?=$hiba?> <br>
                <?php endforeach ?>
            </div>
        <?php else: ?>
            <ul>
                <?php foreach($emberek as $ember): ?>
                    <?php if(
                        $ember["csalad"] == $csaladnev &&
                        (trim($keres) == "" || stringBenneVan($ember["nev"],$keres)) &&
                        ($kozeli == "mind" || ($kozeli == "közel" && $ember["kozeli"]) || ($kozeli == "távol" && !$ember["kozeli"]))
                    ): ?>
                        <li style="background-color: <?php if($ember["kozeli"]){ echo "green"; }else{ echo "red"; } ?>"><?=$ember["nev"]?></li>
                    <?php endif ?>
                <?php endforeach ?>
            </ul>
        <?php endif ?>

    <?php else: ?>

        <form method="post">
            Család: <input name="csaladnev"> <br>
            Keresés: <input name="kereses"> <br>
            <input type="radio" name="kozeli" value="mind"> Mindenki<br>
            <input type="radio" name="kozeli" value="közel"> Csak közeli rokonok<br>
            <input type="radio" name="kozeli" value="távol"> Csak távoli rokonok<br>
            <input type="submit">
        </form>

    <?php endif ?>


</body>
</html>