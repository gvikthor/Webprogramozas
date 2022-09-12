<?php

/**
 * Ellenőrzni, hogy a GET requestben létezik-e egy adott kulcsú adat, és nem csak üres karakterekből áll-e.
 * @param String $string A kulcs, amit ellenőrizni szeretnénk
 */
function letezik($string)
{
    return isset($_GET[$string]) && strlen(trim($_GET[$string])) != 0;
}

/**
 * Ha történt hiba az adatfeldolgozás során, de az adott kulcsú adat helyes, visszaadja az adatot.
 * @param Array $eredmeny A feldolgozott adatok
 * @param String $string A kulcs, amit a feldolgozott adatok között keresünk
 * @param String[] $hibak A talált hibák tömbje
 */
function perzisztencia($eredmeny, $string, $hibak)
{
    if (count($hibak) === 0) return;
    if (!isset($eredmeny[$string])) return;

    return $eredmeny[$string];
}

if (count($_GET) > 0) {

    $hibak = [];
    $eredmeny = [];

    if (!letezik("szoveg")) {
        $hibak[] = "Nem adtál meg szöveget!";
    } else if (count(explode(" ", $_GET["szoveg"])) < 2) {
        $hibak[] = "A szövegnek legalább két, szóközzel elválasztott szóból kell állnia!";
    } else {
        //feldolgozom a jó bemenetet
        $eredmeny["szoveg"] = $_GET["szoveg"];
    }


    if (!letezik("egesz")) {
        $hibak[] = "Nem adtál meg egész számot!";
    } else  if (!is_numeric($_GET["egesz"])) {
        $hibak[] = "Nem számot adtál meg egész számnak!";
    } else if (intval($_GET["egesz"]) != floatval($_GET["egesz"])) {
        $hibak[] = "Nem egész számot adtál emg egész számnak!";
    } else {
        $eredmeny["egesz"] = intval($_GET["egesz"]);
    }


    if (!letezik("tort")) {
        $hibak[] = "Nem adtál meg tört számot!";
    } else  if (!is_numeric($_GET["tort"])) {
        $hibak[] = "Nem számot adtál meg tört számnak!";
    } else {
        $eredmeny["tort"] = floatval($_GET["tort"]);
    }

    if (!letezik("hirlevel")) {
        $eredmeny["hirlevel"] = false;
    } else if ($_GET["hirlevel"] != "on") {
        $hibak[] = "Váratlan adat a hírlevélfeliratkozás checkboxból, próbáld újra!";
    } else {
        $eredmeny["hirlevel"] = true;
    }

    if (!letezik("allat")) {
        $hibak[] = "Nem válaszottál állatot!";
    } else if (array_search($_GET["allat"], ["dog", "cat"]) === false) { //jobb lenne egy globális változóban tárolni, és a radio gombokat ugyanabból generálni
        $hibak[] = "Érvénytelen opció az állatoknál, próbáld újra!";
    } else {
        $eredmeny["allat"] = $_GET["allat"];
    }

    if (isset($_GET["multiple"])) {
        $eredmeny["multi"] = [];
        foreach ($_GET["multiple"] as $adat) {
            if (array_search($adat, ["a", "b", "c"]) === false) {
                $hibak[] = "Érvénytelen adat (" . $adat . ") a multiple select bemeneten, kihagyva";
            } else {
                $eredmeny["multi"][] = $adat;
            }
        }
    }
}


?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>GET űrlap</h2>
    <form action="index.php" method="GET">
        <label for="szoveg-input">Írj be egy szöveget: </label>
        <input type="text" name="szoveg" id="szoveg-input" value="<?= perzisztencia($eredmeny, "szoveg", $hibak) ?>"><br>
        <input type="number" name="egesz" id="" value="<?= perzisztencia($eredmeny, "egesz", $hibak) ?>"><br>
        <input type="number" name="tort" id="" step="0.1" value="<?= perzisztencia($eredmeny, "tort", $hibak) ?>"><br>

        válassz egyet!<br>
        <input type="radio" name="allat" id="kutya" value="dog"><label for="kutya">Kutya</label><br>
        <input type="radio" name="allat" id="macska" value="cat"><label for="macska">Macska</label><br>

        <!-- select..optiom -->

        <input type="checkbox" name="hirlevel" id="hirlevel"><label for="hirlevel">Feliratkozok a hírlevélre</label><br>

        Válassz többet!<br>
        <input type="checkbox" name="multiple[]" id="A" value="a"><label for="A">A opció</label><br>
        <input type="checkbox" name="multiple[]" id="B" value="b"><label for="B">B opció</label><br>
        <input type="checkbox" name="multiple[]" id="C" value="c"><label for="C">C opció</label><br>

        <input type="submit">
    </form>
    <textarea name="" id="" cols="60" rows="30">
    ========== GET paraméterek =====================
    <?php var_dump($_GET); ?>


    ========= Hibák ===============================
    <?php print_r($hibak); ?>


    ======== Feldolgozott adatok =================
    <?php var_dump($eredmeny); ?>

    </textarea>



















    <h2>POST űrlap</h2>
    <form action="index.php" method="POST">
        <label for="szoveg-input">Írj be egy szöveget: </label><input type="text" name="szöveg" id="szoveg-input">
    </form>
    <textarea name="" id="" cols="30" rows="10">
    <?php var_dump($_POST); ?>
    </textarea>
</body>

</html>