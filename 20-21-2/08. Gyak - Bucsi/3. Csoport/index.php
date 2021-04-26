<?php

/**
 * Ellenőrzi, hogy adott paraméter létezik-e a GET requestben, és értelmezhető-e (nem üres).
 * @param String $param ebből egy `$_GET[$param]` értéket csinál belül a függvény, és ellenőrzi.
 * @return bool igaz, ha nem üres az adat.
 */
function letezik($param)
{
    return isset($_GET[$param]) && strlen(trim($_GET[$param])) > 0;
}

letezik("ilyen nincs");

//van-e egyáltalán adat?
if (count($_GET) > 0) {
    $hibak = [];
    $eredmeny = [];

    //szöveg
    if (!letezik("szoveg")) {
        $hibak[] = "Nem adtál meg szöveget!";
    } else if (count(explode(" ", $_GET["szoveg"])) < 2) {
        $hibak[] = "A szöveg legalább két, szóközzel elválasztott szó kell hogy legyen!";
    } else {
        $eredmeny["szoveg"] = $_GET["szoveg"];
    }

    //egész szám
    if (!letezik("egesz")) {
        $hibak[] = "Nem adtál meg egész számot!";
    } else if (!is_numeric($_GET["egesz"])) {
        $hibak[] = "Nem számértéket adtál meg egésznek";
    } else if (intval($_GET["egesz"]) !=  floatval($_GET["egesz"])) {
        $hibak[] = "Nem egész számot adtál meg!";
    } else {
        $eredmeny["egesz"] = intval($_GET["egesz"]);
    }

    //tört
    if (!letezik("tort")) {
        $hibak[] = "Nem adtál meg törtszámot!";
    } else if (!is_numeric($_GET["tort"])) {
        $hibak[] = "Nem számértéket adtál meg törtnek";
    } else {
        $eredmeny["tort"] = floatval($_GET["tort"]);
    }

    //hírlevél
    if (!letezik("hirlevel")) {
        $eredmeny["hirlevel"] = false; // csak akkor nem hiba, ha megengedem, hogy ne fogadja el!
    } else if ($_GET["hirlevel"] != "on") {
        $hibak[] = "A hírlevél váratlan érték (" . $_GET["hirlevel"] . ") volt, próbáld újra!";
    } else {
        $eredmeny["hirlevel"] = true;
    }

    //radio btn
    if (!letezik("allat")) {
        $hibak[] = "Nem válaszottál állatot!";
    } else if (array_search($_GET["allat"], ["cat", "dog"]) === false) { //! fontos a tripla =, mert 0 == false
        $hibak[] = "Ilyen állatot (" . $_GET["allat"] . ") nem lehet választani!";
    } else {
        $eredmeny["allat"] = $_GET["allat"];
    }

    //multiple
    //itt nem lehet letezik()-et használni
    //ha kell az, hogy legalább 1-et kiválasztott: isset() + count
    if (!isset($_GET["multiple"])) {
        $eredmeny["multi"] = [];
    } else {
        $eredmeny["multi"] = [];
        foreach ($_GET["multiple"] as $adat) {
            if (array_search($adat, ["a", "b", "c"]) === false) {
                $hibak[] = "Érvénytelen adat (" . $adat . ") a multiple choice bemeneten kihagyva";
            } else {
                $eredmeny["multi"][] = $adat;
            }
        }
    }
}

//szöveg
// - egyéb szabályok a szövegre (egyedi), pl: legalább 2 szóból áll, szóközzel elválasztva

//egész
// - szám-e
// - eleme Z

//tört
// - szám-e
// - opcionálisan: tényleg tört, nem egész?
// hírlevél
// - létezik-e -> nem releváns, mert megengedjük hogy ne iratkozzon fel
// - ha van, tényleg ON az értéke?
//radio button | option
// - olyat válaszott-e, amit lehet

//multiple checkbox | option multiple
// - létezik-e -> nem releváns, mert megengedjük hogy ne iratkozzon fel
// olyanokat választott-e, amik léteznek



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
        <label for="szoveg-mezo">Egy szöveg: </label><input type="text" name="szoveg" id="szoveg-mezo"><br>

        Egész szám: <input type="number" name="egesz" id=""><br>
        Törtszám: <input type="number" name="tort" id="" step="0.1"><br>

        <input type="checkbox" name="hirlevel" id="hirlevel"><label for="hirlevel">Feliratkozom a hírlevélre</label><br>

        Válassz egy állatot:<br> <!-- select..option -->
        <input type="radio" name="allat" id="macska" value="cat"><label for="macska">Macska</label><br>
        <input type="radio" name="allat" id="kutya" value="dog"><label for="kutya">Kutya</label><br>

        Válassz valahány opciót:<br> <!-- select multiple -->
        <input type="checkbox" name="multiple[]" value="a" id="a"><label for="a">A opció</label><br>
        <input type="checkbox" name="multiple[]" value="b" id="b"><label for="b">B opció</label><br>
        <input type="checkbox" name="multiple[]" value="c" id="c"><label for="c">C opció</label><br>

        <input type="submit">
    </form>
    <textarea name="" id="" cols="60" rows="10">
    ========== GET adatok ================
    <?php var_dump($_GET) ?>

    ========= Hibák ======================
    <?php print_r($hibak) ?>

    ========= Eredmény ===================
    <?php var_dump($eredmeny) ?>
    </textarea>


















    <h2>POST űrlap</h2>
    <form action="index.php" method="POST">
        <input type="text" name="szoveg" id="">
        <input type="submit">
    </form>
    <textarea name="" id="" cols="30" rows="10">
    <?php var_dump($_POST) ?>
    </textarea>


</body>

</html>