<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Űrlap</title>
</head>
<style>
    #hibak{
        background-color: "red";
    }
</style>
<body>
    <?php if($_SERVER["REQUEST_METHOD"] != "POST"): ?> <!-- Első betöltés, csak a form megjelenítése -->
        <form method="post">
            Név
            <input name="felhasznalonev">

            <br><br>

            Életkor
            <input name="eletkor">

            <br><br>

            Nem<br>
            <input type="radio" name="nem" value="no"> Nő<br>
            <input type="radio" name="nem" value="ffi"> Férfi<br>

            Város<br>
            <select name="lakohely">
                <option value="">Kérlek válassz várost...</option>
                <option value="Budapest">Budapest</option>
                <option value="Szombathely">Szombathely</option>
                <option value="Egyéb">Egyéb</option>
            </select>

            <br><br>

            Egyéb megjegyzés<br>
            <textarea name="egyeb"></textarea>

            <input type="submit">
        </form>
    <?php else: ?>
        <?php
            $eredmeny = [];
            $eredmeny["felhasznalonev"] = new stdClass();
            $eredmeny["eletkor"] = new stdClass();
            $eredmeny["nem"] = new stdClass();
            $eredmeny["lakohely"] = new stdClass();

            function isSelected($varos, $eredmeny){
                if($eredmeny["lakohely"]->ertek == $varos){
                    return "selected";
                }
                return "";
            }

            function isChecked($nem, $eredmeny){
                if($eredmeny["nem"]->ertek == $nem){
                    return "checked";
                }
                return "";
            }

            $hiba = false;
            if($_POST["felhasznalonev"] != ""){
                $eredmeny["felhasznalonev"]->ertek = $_POST["felhasznalonev"];
                $eredmeny["felhasznalonev"]->hiba = "";
            }else{
                $hiba = true;
                $eredmeny["felhasznalonev"]->ertek = "";
                $eredmeny["felhasznalonev"]->hiba = "A név megadása kötelező";
            }

            if($_POST["eletkor"] != ""){
                if(is_numeric($_POST["eletkor"])){
                    $eredmeny["eletkor"]->ertek = $_POST["eletkor"];
                    $eredmeny["eletkor"]->hiba = "";
                }else{
                    $hiba = true;
                    $eredmeny["eletkor"]->ertek = "";
                    $eredmeny["eletkor"]->hiba = "A életkor szám kell hogy legyen";
                }

            }else{
                $hiba = true;
                $eredmeny["eletkor"]->ertek = "";
                $eredmeny["eletkor"]->hiba = "A életkor megadása kötelező";
            }

            if(isset($_POST["nem"]) && $_POST["nem"] != ""){
                if($_POST["nem"] == "no" || $_POST["nem"] == "ffi"){
                    $eredmeny["nem"]->ertek = $_POST["nem"];
                    $eredmeny["nem"]->hiba = "";
                }else{
                    $hiba = true;
                    $eredmeny["nem"]->ertek = "";
                    $eredmeny["nem"]->hiba = "A nem értéke hibás.";
                }
            }else{
                $hiba = true;
                $eredmeny["nem"]->ertek = "";
                $eredmeny["nem"]->hiba = "A nem megadása kötelező";
            }

            if($_POST["lakohely"] != ""){
                $eredmeny["lakohely"]->ertek = $_POST["lakohely"];
                $eredmeny["lakohely"]->hiba = "";
            }else{
                $eredmeny["lakohely"]->ertek = "";
                $eredmeny["lakohely"]->hiba = "A lakóhely megadása kötelező.";
            }
        ?>


        <?php if($hiba): ?>
            <form method="post">
                Név<br>
                <input name="felhasznalonev" value="<?=$eredmeny["felhasznalonev"]->ertek?>">

                <br><br>

                Életkor<br>
                <input name="eletkor" value="<?=$eredmeny["eletkor"]->ertek?>">

                <br><br>

                Nem<br>
                <!--< ?php if($eredmeny["nem"]->ertek == "no"): ?>
                    <input type="radio" name="nem" value="no" checked> Nő<br>
                    <input type="radio" name="nem" value="ffi"> Férfi<br>
                < ?php elseif($eredmeny["nem"]->ertek == "ffi"): ?>
                    <input type="radio" name="nem" value="no"> Nő<br>
                    <input type="radio" name="nem" value="ffi" checked> Férfi<br>
                < ?php else: ?>
                    <input type="radio" name="nem" value="no"> Nő<br>
                    <input type="radio" name="nem" value="ffi"> Férfi<br>
                < ?php endif ?>-->
                <input type="radio" name="nem" value="no" <?=isChecked("no", $eredmeny)?>> Nő<br>
                <input type="radio" name="nem" value="ffi" <?=isChecked("ffi", $eredmeny)?>> Férfi<br>

                Város<br>
                <select name="lakohely">
                    <!--option value="" < ?php if($eredmeny["lakohely"]->ertek == ""): ?> selected < ?php endif ?>>Kérlek válassz várost...</option-->
                    <option value="" <?=isSelected("", $eredmeny)?>>Kérlek válassz várost...</option>
                    <option value="Budapest" <?=isSelected("Budapest", $eredmeny)?>>Budapest</option>
                    <option value="Szombathely" <?=isSelected("Szombathely", $eredmeny)?>>Szombathely</option>
                    <option value="Egyéb" <?=isSelected("Egyéb", $eredmeny)?>>Egyéb</option>
                </select>

                <br><br>

                Egyéb megjegyzés<br>
                <textarea name="egyeb"></textarea>

                <input type="submit">
            </form>

            <div id="hibak">
                <?=$eredmeny["felhasznalonev"]->hiba?><br>
                <?=$eredmeny["eletkor"]->hiba?><br>
                <?=$eredmeny["nem"]->hiba?><br> 
                <?=$eredmeny["lakohely"]->hiba?><br>
            </div>
        <?php else: ?>
            Sikeres adatbevitel.
        <?php endif ?>

    <?php endif ?>
</body>
</html>