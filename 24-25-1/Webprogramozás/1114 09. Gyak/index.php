<?php
require_once 'filmek.php';
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
                <th>Rendező</th>
                <th>Színészek</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($filmek as $index => $film): ?>
            <tr>
                <td>
                    <a href="film.php?id=<?=$index?>">
                        <?=$film->title?>
                    </a>
                </td>
                <td><?=$film->year?></td>
                <td><?=$film->director?></td>
                <td>
                    <ul>
                        <?php foreach($film->actors as $actor): ?>
                        <li><?=$actor?></li>
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
        <input name="cim">

        <br><br>

        <label>Év</label>
        <input name="ev">

        <br><br>
        
        <h3>Besorolás</h3>
        <input type="radio" name="besorolas" value="nincs" id="be-nincs"><label for="be-nincs">Nincs</label> <br>
        <input type="radio" name="besorolas" value="12" id="be-12"><label for="be-12">12</label> <br>
        <input type="radio" name="besorolas" value="16" id="be-16"><label for="be-16">16</label> <br>
        <input type="radio" name="besorolas" value="18" id="be-18"><label for="be-18">18</label> <br>

        <h3>Származás</h3>
        <select name="szarmazas">
            <option value="usa">USA</option>
            <option value="eur">EU</option>
            <option value="chn">China</option>
            <option value="nam">Other NA</option>
            <option value="oth">Other</option>
        </select>

        <h3>Kategóriák</h3>
        <input type="checkbox" name="kategoria[]" value="akc"><label>Akció</label> <br>
        <input type="checkbox" name="kategoria[]" value="rom"><label>Romantikus</label> <br>
        <input type="checkbox" name="kategoria[]" value="kal"><label>Kaland</label> <br>
        <input type="checkbox" name="kategoria[]" value="dra"><label>Dráma</label> <br>

        <input type="submit">
    </form>
</body>
</html>