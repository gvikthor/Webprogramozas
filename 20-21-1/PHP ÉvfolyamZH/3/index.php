<?php

$kincsek = json_decode(file_get_contents('data.json'));

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3. feladat</title>
</head>
<body>
  <h1>3. feladat</h1>

  <h2>Űrlap</h2>
  <form action="data.php">
        Kincs neve: <input name="nev"> <br>
        Kincs értéke: <input name="ertek" type="number"> <br>
        Kincs színe: <select name="szin">
            <option value="piros">Piros</option>
            <option value="narancs">Narancs</option>
            <option value="sárga">Sárga</option>
            <option value="zöld">Zöld</option>
            <option value="kék">Kék</option>
            <option value="lila">Lila</option>
        </select> <br>
        Megtartjuk?<br>
        <input type="radio" name="megtart" value="i"> Igen <br>
        <input type="radio" name="megtart" value="n"> Nem <br>

        <input type="submit">
    </form>

  <h2>Kincslista</h2>
  <table>
        <tr>
            <th>Név</th>
            <th>Érték</th>
            <th>Szín</th>
            <th>Megtartjuk?</th>
        </tr>
        <?php foreach($kincsek as $kincs): ?>
            <tr>
                <td><?=$kincs->nev?></td>
                <td><?=$kincs->ertek?></td>
                <td><?=$kincs->szin?></td>
                <td><?=$kincs->megtart ? 'Megtartjuk': 'Eladományozzuk'?></td>
                <td><a href="del.php?id=<?=$kincs->id?>">Töröl</a></td>
            </tr>
        <?php endforeach ?>
    </table>

</body>
</html>