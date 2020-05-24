<?php

$emberek = [
    [
        "nev" => "Ávdolozó Péter",
        "egyenleg" => 420000
    ],
    [
        "nev" => "Brendó István",
        "egyenleg" => -69000
    ],
    [
        "nev" => "Gyorskocsi Viktor",
        "egyenleg" => 200100
    ],
    [
        "nev" => "Esidisi Béla",
        "egyenleg" => 1101
    ],
    [
        "nev" => "Jean-Pierre Nándor",
        "egyenleg" => 1138
    ],
    [
        "nev" => "Jónás-Csillag Gergő",
        "egyenleg" => -2187
    ],
    [
        "nev" => "Karsai Laura",
        "egyenleg" => -123456
    ],
    [
        "nev" => "Liza-Lizzi Júlia",
        "egyenleg" => 0
    ],
    [
        "nev" => "Noriáki Áron",
        "egyenleg" => 1821
    ],
    [
        "nev" => "Vamú Balázs",
        "egyenleg" => 1444
    ]
];


$kod = "";
$nev = "";
$tipus = "";
        
function stringBenneVan($string, $keres){
    return strpos($string, $keres) !== false;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Délelőtti ZH</title>
</head>
<body>
    
    <?php if($_SERVER["REQUEST_METHOD"] == "POST"): ?>
        <?php
            $hibak = [];
            $voltHiba = false;


            if(!isset($_POST["kod"])){
                $voltHiba = true;
                $hibak[] = "A biztonsági kód megadása kötelező!";
            }else if(strlen($_POST["kod"]) < 5){
                $voltHiba = true;
                $hibak[] = "A biztonsági kód legalább 5 karakter.";
                $kod = $_POST["kod"];
            }else{
                $kod = $_POST["kod"];
            }

            if(isset($_POST["nev"])){
                $nev = $_POST["nev"];
            }

            if(!isset($_POST["tipus"]) || $_POST["tipus"] == ""){
                $voltHiba = true;
                $hibak[] = "A típus megadása kötelező!";
            }else{
                $tipus = $_POST["tipus"];
            }
        ?>

        <form method="post">
            Biztonsági kód: <input name="kod" value="<?=$kod?>"> <br>
            Keresés: <input name="nev" value="<?=$nev?>"> <br>
            <input type="radio" name="tipus" value="mind"        <?php if($tipus == "mind"){ echo "checked"; } ?>> Mindenki <br>
            <input type="radio" name="tipus" value="tartozik"    <?php if($tipus == "tartozik"){ echo "checked"; } ?>> Tartozik <br>
            <input type="radio" name="tipus" value="nemtartozik" <?php if($tipus == "nemtartozik"){ echo "checked"; } ?>> Nem tartozik <br>
            <input type="submit">
        </form>
        <?php if($voltHiba): ?>
            <div>
                <?php foreach($hibak as $hiba): ?>
                    <p><?=$hiba?></p>
                <?php endforeach ?>
            </div>
        <?php else: ?>
            <table>
                <tr>
                    <th>Név</th>
                    <th>Egyenleg</th>
                </tr>
                <?php foreach($emberek as $ember): ?>
                    <?php if(
                        ($nev == "" || stringBenneVan(strtolower($ember["nev"]),strtolower($nev))) &&
                        ($tipus == "mind" || ($tipus == "tartozik" && $ember["egyenleg"] < 0) || ($tipus == "nemtartozik" && $ember["egyenleg"] >= 0))                
                    ): ?>
                        <tr style="background-color: <?php if($ember["egyenleg"] > 0){ echo "green"; }else if($ember["egyenleg"] < 0){ echo "red"; }else{ echo "yellow"; } ?>">
                            <td><?=$ember["nev"]?></td>
                            <td><?=$ember["egyenleg"]?></td>
                        </tr>
                    <?php endif ?>
                <?php endforeach ?>
            </table>
        <?php endif ?>
    <?php else: ?>
        <form method="post">
            Biztonsági kód: <input name="kod" value=""> <br>
            Keresés: <input name="nev"> <br>
            <input type="radio" name="tipus" value="mind"> Mindenki <br>
            <input type="radio" name="tipus" value="tartozik"> Tartozik <br>
            <input type="radio" name="tipus" value="nemtartozik"> Nem tartozik <br>
            <input type="submit">
        </form>
    <?php endif ?>
</body>
</html>