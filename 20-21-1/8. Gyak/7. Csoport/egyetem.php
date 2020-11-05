<?php

$elkuldve = isset($_GET['elkuldve']);

$hibak = [];
$egyetem = [];

if( $elkuldve ){

    if(isset($_GET['egyetemnev']) && trim($_GET['egyetemnev']) != ''){
        $egyetem['egyetemnev'] = $_GET['egyetemnev'];
    }else{
        $hibak[] = 'Az egyetem nevének megadása kötelező!';
    }

    if(isset($_GET['alapitva']) && trim($_GET['alapitva']) != ''){
        if(is_numeric($_GET['alapitva'])){
            $alapitasEve = intval($_GET['alapitva']);
            if($alapitasEve > 0 && $alapitasEve < 2021){
                $egyetem['alapitva'] = $alapitasEve;
            }else{
                $hibak[] = 'Az alapítási év csak 0 és 2021 közti szám lehet!';
            }
        }else{
            $hibak[] = 'Az egyetem alapításának éve csak szám lehet!';
        }
    }else{
        $hibak[] = 'Az egyetm alapítási évének megadása kötelező!';
    }

    if(isset($_GET['varos'])){
        if( in_array($_GET['varos'], ['budapest', 'debrecen', 'miskolc', 'siofok']) ){
            $egyetem['varos'] = $_GET['varos'];
        }else{
            $hibak[] = 'Ebbe a községbe nem alapítható egyetem.';
        }
    }else{
        $hibak[] = 'A székhely megadása kötelező!';
    }

    if(isset($_GET['fenntartas'])){
        if($_GET['fenntartas'] == 'allami' || $_GET['fenntartas'] == 'magan'){
            $egyetem['fenntartas'] = $_GET['fenntartas'];
        }else{
            $hibak[] = 'Ilyen fenntartói forma nem létezik!';
        }
    }else{
        $hibak[] = 'A fenntartás megadása kötelező!';
    }

    if(isset($_GET['kepzesek']) && count($_GET['kepzesek']) > 0){
        foreach($_GET['kepzesek'] as $kepzes){
            if(in_array($kepzes , ['foszk', 'bsc', 'ba', 'msc', 'ma', 'phd'])){
                $egyetem['kepzesek'][] = $kepzes;
            }else{
                $hibak[] = 'Nem létező képzési forma: ' . $kepzes;
            }
        }
    }else{
        $hibak[] = 'Legalább egy képzési forma megadása kötelező!';
    }

    if(isset($_GET['leiras']) && trim($_GET['leiras']) != ''){
        if(strlen($_GET['leiras']) > 20){
            $egyetem['leiras'] = $_GET['leiras'];
        }else{
            $hibak[] = 'A leírás legalább 20 karakter legyen!';
        }
    }else{
        $hibak[] = 'A leírás megadása kötelező!';
    }

    if(isset($_GET['adatkezeles']) && $_GET['adatkezeles'] == 'igen'){
        $egyetem['adatkezeles'] = true;
    }else{
        $hibak[] = 'Az adatkezelési szabályzat elfogadása kötelező!';
    }

}

/*
if(feltetel){
    return a;
}else{
    return b;
}

feltetel ? a : b;
*/

function varos($varosnev){
    return isset($_GET['varos']) && $_GET['varos'] == $varosnev ? 'selected' : '';
}

function fenntartas($fenntartas){
    return isset($_GET['fenntartas']) && $_GET['fenntartas'] == $fenntartas ? 'checked' : '';
}

function kepzesek($kepzes){
    return isset($_GET['kepzesek']) && in_array($kepzes, $_GET['kepzesek']) ? 'checked' : '';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Egyetem regisztráció</title>
</head>
<body>
    <h1>Egyetem regisztráció</h1>
    <form>
        <h2>Egyetem neve</h2>
        <input name="egyetemnev" value="<?= isset($_GET['egyetemnev']) ? $_GET['egyetemnev'] : '' ?>">

        <h2>Alapítás éve</h2>
        <input name="alapitva" value="<?= isset($_GET['alapitva']) ? $_GET['alapitva'] : '' ?>">

        <h2>Székhely</h2>
        <select name="varos">
            <option value="budapest" <?=varos('budapest')?>>Budapest</option>
            <option value="debrecen" <?=varos('debrecen')?>>Debrecen</option>
            <option value="miskolc"  <?=varos('miskolc' )?>>Miskolc</option>
            <option value="siofok"   <?=varos('siofok'  )?>>Siófok</option>
        </select>

        <h2>Fenntartás</h2>
        <input name="fenntartas" type="radio" value="allami" <?=fenntartas('allami')?>> Állami <br>
        <input name="fenntartas" type="radio" value="magan"  <?=fenntartas('magan')?>> Magán

        <h2>Képesítések</h2>
        <input name="kepzesek[]" type="checkbox" value="foszk" <?=kepzesek('foszk')?>> Felsőoktatási Szakképzés <br>
        <input name="kepzesek[]" type="checkbox" value="bsc"   <?=kepzesek('bsc')?>>   BSc <br>
        <input name="kepzesek[]" type="checkbox" value="ba"    <?=kepzesek('ba')?>>    BA <br>
        <input name="kepzesek[]" type="checkbox" value="msc"   <?=kepzesek('msc')?>>   MSc <br>
        <input name="kepzesek[]" type="checkbox" value="ma"    <?=kepzesek('ma')?>>    MA <br>
        <input name="kepzesek[]" type="checkbox" value="phd"   <?=kepzesek('phd')?>>   PhD

        <h2>Leírás</h2>
        <textarea name="leiras"><?=isset($_GET['leiras']) ? $_GET['leiras'] : ''?></textarea>

        <h2>Adatkezelés</h2>
        <input name="adatkezeles" type="checkbox" value="igen"> Elfogadom az adatkezelési szabályzatot.

        <br><br>

        <input name="elkuldve" type="hidden" value="igen">
        <input type="submit">
    </form>

    <?php if($elkuldve): ?>
        <?php if(count($hibak) > 0): ?>
            <ul>
                <?php foreach($hibak as $hiba): ?>
                    <li><?=$hiba?></li>
                <?php endforeach ?>
            </ul>
        <?php else: ?>
            Sikeres adatküldés!
            <br>
            <?php var_dump($egyetem); ?>
        <?php endif ?>
    <?php endif ?>

</body>
</html>