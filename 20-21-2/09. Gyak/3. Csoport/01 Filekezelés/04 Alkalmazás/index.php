<?php
require_once("fuggvenyek.php");

$allatok = jsonBeolvas("allatkert.json");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Állatkert</title>
</head>
<style>
td{
    text-align: center;
}
    td, input{
        width: 150px;
    }
    input[type="submit"]{
        width: 30px;
    }
</style>
<body>
    <table>
        <tr>
            <th>Név</th>
            <th>Faj</th>
            <th>Súly</th>
        </tr>
        <?php foreach($allatok as $allat): ?>
            <tr>
                <td><?=$allat->nev?></td>
                <td><?=$allat->faj?></td>
                <td><?=$allat->suly?>kg</td>
            </tr>
        <?php endforeach ?>
    </table>
    <form action="hozzaad.php">
            <input name="nev">
            <input name="faj">
            <input name="suly">
            <input type="submit" value="+">
    </form>
</body>
</html>