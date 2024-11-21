<?php
require_once 'fuggvenyek.php';
session_start();
$hibak = munkamenet_valtozo('hibak');
$urlap_adat = munkamenet_valtozo('adatok', (object)[]);

$filmek = json_beolvas('filmek');
$kategoria_nevek = json_beolvas('kategoriak');
$orszag_nevek = json_beolvas('orszagok');

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Filmek</h1>

    <table>
        <thead>
            <tr>
                <th>Cím</th>
                <th>Év</th>
                <th>Besorolás</th>
                <th>Ország</th>
                <th>Címkék</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($filmek as $index => $film): ?>
            <?php $orszag_index = $film->szarmazas?>
            <tr>
                <td>
                    <a href="film.php?id=<?=$index?>">
                        <?=$film->cim?>
                    </a>
                </td>
                <td><?=$film->ev?></td>
                <td><?=$film->besorolas?></td>
                <td><?=$orszag_nevek->usa?></td>
                <td>
                    <ul>
                        <?php foreach($film->kategoria as $kategoria): ?>
                        <li><?=$kategoria_nevek->$kategoria?></li>
                        <?php endforeach // színészek ?>
                    </ul>
                </td>
            </tr>
            <?php endforeach // filmek ?>
        </tbody>
    </table>

    <h2>Űrlapok</h2>

    Új film:
    <form action="feldolgoz.php">
        <label>Cím</label>
        <input name="cim" value="<?=$urlap_adat->cim ?? ''?>">

        <br><br>

        <label>Év</label>
        <input name="ev" value="<?=$urlap_adat->ev ?? ''?>">

        <br><br>
        
        <h3>Besorolás</h3>
        <input
            type="radio" name="besorolas" value="nincs" id="be-nincs"
            <?=($urlap_adat->besorolas??'')=='nincs'?'checked':''?>
        ><label for="be-nincs">Nincs</label> <br>
        <input
            type="radio" name="besorolas" value="12" id="be-12"
            <?=($urlap_adat->besorolas??'')=='12'?'checked':''?>
        ><label for="be-12">12</label> <br>
        <input
            type="radio" name="besorolas" value="16" id="be-16"
            <?=($urlap_adat->besorolas??'')=='16'?'checked':''?>
        ><label for="be-16">16</label> <br>
        <input
            type="radio" name="besorolas" value="18" id="be-18"
            <?=($urlap_adat->besorolas??'')=='18'?'checked':''?>
        ><label for="be-18">18</label> <br>

        <h3>Származás</h3>
        <select name="szarmazas">
            <option value="usa" <?=($urlap_adat->szarmazas??'')=='usa'?'selected':''?>>USA</option>
            <option value="eur" <?=($urlap_adat->szarmazas??'')=='eur'?'selected':''?>>EU</option>
            <option value="chn" <?=($urlap_adat->szarmazas??'')=='chn'?'selected':''?>>China</option>
            <option value="nam" <?=($urlap_adat->szarmazas??'')=='nam'?'selected':''?>>Other NA</option>
            <option value="oth" <?=($urlap_adat->szarmazas??'')=='oth'?'selected':''?>>Other</option>
        </select>

        <h3>Kategóriák</h3>
        Állapottartás ugyanúgy checked-el.<br>
        <input type="checkbox" name="kategoria[]" value="akc"><label>Akció</label> <br>
        <input type="checkbox" name="kategoria[]" value="rom"><label>Romantikus</label> <br>
        <input type="checkbox" name="kategoria[]" value="kal"><label>Kaland</label> <br>
        <input type="checkbox" name="kategoria[]" value="dra"><label>Dráma</label> <br>

        <input type="submit">
    </form>
    <?php if(count($hibak) > 0): ?>
        <ul>
            <?php foreach($hibak as $hiba): ?>
                <li><?=$hiba?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>