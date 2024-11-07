<?php
$🌈 = 'Petike';

function ➕($🅰️, $🅱️)
{
    return $🅰️ + $🅱️;
}

//////////////////////////

$állatok = ['cica', 'kutya', 'hörcsög'];

// for($i = 0; $i < count($állatok); $i++){...}
// foreach($állatok as $állat){...}

/*
    const emberek = [
        {nev: 'Peti', kor: 27},
        {nev: 'Gergő', kor: 29 }
    ]
    */

// asszociatív tömb 
$pelda_ember_asszoc = [
    'nev' => 'Peti',
    'kor' => 27
];

// objektum
$pelda_ember_objektum = (object)[
    'nev' => 'Peti',
    'kor' => 27
];

////////////////////////////////////////////////////////

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
    <h1>Első oldalunk</h1>

    <h2>Bevezető</h2>
    <div>Heló <?= $🌈 ?>!</div>
    <div><?= $🌈 ?> <?= ➕(10, 17) ?></div>

    <h2>Ciklus</h2>
    <ul>
        <?php foreach ($állatok as $állat): ?>
            <li><?= $állat ?></li>
        <?php endforeach //állatok 
        ?>
    </ul>

    <h2>Tömb vs objektum</h2>

    <div>Asszoc tömb: <?= $pelda_ember_asszoc['nev'] ?></div>
    <div>Objektum: <?= $pelda_ember_objektum->nev ?></div>

    <div> <?= "alma" . "fa" ?> </div>
    <div> Nem stringösszefűzés, mint JS-ben: <?= "5" + "7" ?> </div>

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

        <input type="submit">
    </form>
</body>
</html>