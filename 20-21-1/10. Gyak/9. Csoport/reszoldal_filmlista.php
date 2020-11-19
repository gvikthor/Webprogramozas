<?php
require_once('adatkezeles.php');
function filmlista($bejelentkezve){
    $filmek = filmek();
?>
    <style>
        table input{
            background: none;
            border: none;
            cursor: pointer;
        }
        table form{
            display: inline-block;
        }
        table a{
            text-decoration: none;
        }
    </style>
    <table>
        <tr>
            <th>Cím</th>
            <th>Megjelenés</th>
            <th>Tetszik/Nem tetszik</th>
            <th><th>
        </tr>
        <?php foreach($filmek as $film): ?>
            <tr>
                <td><?=$film->cim?></td>
                <td><?=$film->megjelenes?></td>
                <td>
                    <?php if($bejelentkezve): ?>
                        <form action="keres_tetszik.php">
                            <input type="hidden" name="id" value="<?=$film->id?>">
                            <input type="submit" value="<?=in_array($_SESSION["fnev"], $film->tetszikelesek) ? '👍🏿' : '👍'?>">
                        </form>
                    <?php endif ?>
                    <?=count($film->tetszikelesek)?>
                    /
                    <?=count($film->nemtetszikelesek)?>
                    <?php if($bejelentkezve): ?>
                        <a href="keres_nemtetszik.php?id=<?=$film->id?>">
                            <?=in_array($_SESSION["fnev"], $film->nemtetszikelesek) ? '👎🏿' : '👎'?>
                        </a>
                    <?php endif ?>
                </td>
                <td>
                    <?php if($film->fnev == $_SESSION["fnev"]): ?>
                        <a href="keres_torles.php?id=<?=$film->id?>">Töröl</a>
                    <?php endif ?>
                <td>
            </tr>
        <?php endforeach ?>
    </table>

<?php } ?>