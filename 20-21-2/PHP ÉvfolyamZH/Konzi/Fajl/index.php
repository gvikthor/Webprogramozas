<?php
require_once "functions.php";

$legok = jsonBeolvas("lego.json");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEGO</title>
</head>
<body>
    <table>
        <?php foreach($legok as $id => $lego): ?>
            <tr>
                <td><?=$lego->nev?></td>
                <td><?=$lego->szam?></td>
                <td>
                    <ul>
                    <?php foreach($lego->cimkek as $cimke): ?>
                        <li>
                            <a href="del.php?id=<?=$id?>&cimke=<?=$cimke?>">
                                <?=$cimke?>
                            </a>
                        </li>
                    <?php endforeach ?>
                    </ul>
                </td>
                <td>
                    <form action="add.php">
                        <input name="cimke">
                        <input name="id" value="<?=$id?>" type="hidden">
                        <input type="submit" value="+">
                    </form>
                </td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>