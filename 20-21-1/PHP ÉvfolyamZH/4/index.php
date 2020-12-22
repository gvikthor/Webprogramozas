<?php

session_start();
if(!isset($_SESSION['arany'])) $_SESSION['arany'] = 10;
if(!isset($_SESSION['ezust'])) $_SESSION['ezust'] = 0;

?>


<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4. feladat</title>
</head>
<body>
    <h1>4. feladat</h1>

    <h2>Új tranzakció</h2>
    Arany: <input type="number" id="gold" min="0" max="99" step="1" value="0"><br>
    Ezüst: <input type="number" id="silver" min="0" max="11" step="1" value="0"><br>
    <button id="income">Bevétel</button>
    <button id="spend">Kiadás</button>
    
    <h2>Tranzakciós napló</h2>
    <table>
        <tr>
            <th>Időpont</th>
            <th>Egyenleg</th>
        </tr>
        <tr>
            <td> <?=date('Y.m.d. H:i:s')?> </td>
            <td> <?=$_SESSION['arany']?>g <?=$_SESSION['ezust']?>s </td>
        </tr>
    </table>
</body>
</html>

<script src="script.js"></script>