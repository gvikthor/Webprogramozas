<?php

$hibak = [];
$adatok = [];
$adatok['kepviselok'] = [];

$elnokjeloltek = [
    'trombitas',
    'bitos',
    'hegyi',
    'barack'
];

$kepviselojeloltek = [
    'szuts',
    'nagy',
    'hokas',
    'dekas'
];

$szavazok = [
    [
        'nev' => 'Kiss Ádám',
        'szavazott' => true
    ],
    [
        'nev' => 'Magyar Dániel',
        'szavazott' => false
    ],
    [
        'nev' => 'Feinti Erika',
        'szavazott' => true
    ],
    [
        'nev' => 'Borász Péter',
        'szavazott' => false
    ]
];

if(isset($_GET['elkuldve']) && $_GET['elkuldve'] == 'igen'){
    if(isset($_GET['szavazonev']) && trim($_GET['szavazonev']) != ''){
        $i = 0;
        $talalt = false;
        while($i < count($szavazok) && !$talalt){
            $talalt = ($szavazok[$i]['nev'] == $_GET['szavazonev'] && !$szavazok[$i]['szavazott']);
            $i++;
        }

        if(!$talalt){
            $hibak[] = 'Nem találtunk ilyen nevű szavazót, aki még nem szavazott.';
        }
    }else{
        $hibak[] = 'A szavazó nevének megadása kötelező! Ez nem kerül összekötésre a szavazattal!';
    }

    if(isset($_GET['szig']) && trim($_GET['szig']) != '' && isset($_GET['szigveg']) && trim($_GET['szigveg']) != ''){
        if(is_numeric($_GET['szig'])){
            if($_GET['szigveg'] == 'MA' || $_GET['szigveg'] == 'SH' || $_GET['szigveg'] == 'HK'){
                //ellenőrizzük a szig számot
            }else{
                $hibak[] = 'A személyigazolványvégződés nem érvényes!  Ez nem kerül összekötésre a szavazattal!';
            }
        }else{
            $hibak[] = 'A személyigazolvány első mezője csak szám lehet!  Ez nem kerül összekötésre a szavazattal!';
        }
    }else{
        $hibak[] = 'A személyigazolványszám megadása kötelező!  Ez nem kerül összekötésre a szavazattal!';
    }

    if(isset($_GET['elnok'])){
        if(in_array($_GET['elnok'], $elnokjeloltek)){
            $adatok['elnok'] = $_GET['elnok'];
        }else{
            $hibak[] = 'A megadott elnökjlelöt nem érvényes induló!';
        }
    }else{
        $hibak[] = 'Valamelyik jelöltre muszáj szavaznod!';
    }

    if(isset($_GET['kepviselok'])){
        foreach($_GET['kepviselok'] as $kepviselo){
            if(in_array($kepviselo, $kepviselojeloltek)){
                $adatok['kepviselok'][] = $kepviselo;
            }else{
                $hibak[] = 'Érvénytelen képviselő: ' . $kepviselo;
            }
        }
    }else{
        $hibak[] = 'Legalább egy képviselőre kötelező szavazni!';
    }

    if(isset($_GET['megjegyzes'])){
        $adatok['megjegyzes'] = $_GET['megjegyzes'];
    }

    if(isset($_GET['adatvedelem']) && $_GET['adatvedelem'] == 'on'){
        $adatok['adatvedelem'] = 'elfogadva';
    }else{
        $hibak[] = 'Az adatkezelési és adatvédelmi szabályzat elfogadása kötelező!';
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

function szigveg($ertek){
    return (isset($_GET['szigveg']) && $_GET['szigveg'] == $ertek) ? 'selected' : '';
}

function elnok($ertek){
    return (isset($_GET['elnok']) && $_GET['elnok'] == $ertek) ? 'checked' : '';
}

function kepviselo($ertek){
    return (isset($_GET['kepviselok']) && in_array($ertek, $_GET['kepviselok'])) ? 'checked' : '';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Választások</title>
</head>
<body>
    <h1>Választások</h1>
    <form>
        <h2>Szavazó neve</h2>
        <input name="szavazonev" value="<?=isset($_GET['szavazonev']) ? $_GET['szavazonev'] : ''?>">

        <h2>Szavazó személyigazolvány száma</h2>
        <input name="szig" value="<?=isset($_GET['szig']) ? $_GET['szig'] : ''?>">
        <select name="szigveg">
            <option value="MA" <?=szigveg('MA')?>>MA</option>
            <option value="SH" <?=szigveg('SH')?>>SH</option>
            <option value="HK" <?=szigveg('HK')?>>HK</option>
        </select>

        <h2>Elnökjelölt</h2>
        <input type="radio" name="elnok" value="trombitas"  <?=elnok('trombitas')?>> Trombitás Dénes <br>
        <input type="radio" name="elnok" value="bitos"      <?=elnok('bitos')?>> Bitós Jónás <br>
        <input type="radio" name="elnok" value="hegyi"      <?=elnok('hegyi')?>> Hegyi Klára <br>
        <input type="radio" name="elnok" value="barack"     <?=elnok('barack')?>> Barack Almafa

        <h2>Képviselők</h2>
        <input type="checkbox" name="kepviselok[]" value="szuts"    <?=kepviselo('szuts')?>> Szűts Natalie<br>
        <input type="checkbox" name="kepviselok[]" value="nagy"     <?=kepviselo('nagy')?>> Nagy Gesztenye<br>
        <input type="checkbox" name="kepviselok[]" value="hokas"    <?=kepviselo('hokas')?>> Hókás Réka<br>
        <input type="checkbox" name="kepviselok[]" value="dekas"    <?=kepviselo('dekas')?>> Dekás Anna Mária

        <h2>Megjegyzés</h2>
        <textarea name="megjegyzes"><?=isset($_GET['megjegyzes']) ? $_GET['megjegyzes'] : ''?></textarea>

        <h2>Adatvédelem</h2>
        <input type="checkbox" name="adatvedelem"> Elfogadom az adatkezelési és adatvédelmi szabályzatot.

        <br><br>
        <input type="hidden" name="elkuldve" value="igen">
        <input type="submit">
    </form>

    <?php if(isset($_GET['elkuldve']) && $_GET['elkuldve'] == 'igen'): ?>
        <?php if(count($hibak) > 0): ?>
            <ul>
                <?php foreach($hibak as $hiba): ?>
                    <li><?=$hiba?></li>
                <?php endforeach ?>
            </ul>
        <?php else: ?>
            <div>
                Sikeres szavazatleadás: <?php var_dump($adatok); ?>
            </div>
        <?php endif ?>
    <?php endif ?>
</body>
</html>