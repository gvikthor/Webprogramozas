<?php function filmekListaz($filmek, $bejelentkezve){ ?>
    <table>
        <tr>
            <th>Cím</th>
            <th>Megjelenés</th>
            <th>Like/Dislike</th>
            <th></th>
        </tr>
        <?php foreach($filmek as $film): ?>
            <tr>
                <td><?=$film->cim?></td>
                <td><?=$film->megjelenes?></td>
                <td>
                    <?php if($bejelentkezve): ?>
                        <form action="keres_like.php">
                            <input type="hidden" value="<?=$film->id?>" name="id">
                            <input type="submit" value="<?=in_array($_SESSION['username'], $film->likes) ? '👍🏿' : '👍'?>">
                        </form>
                    <?php endif ?>
                    <?=count($film->likes)?>
                    /
                    <?=count($film->dislikes)?>
                    <?php if($bejelentkezve): ?>
                        <form action="keres_dislike.php">
                            <input type="hidden" value="<?=$film->id?>" name="id">
                            <input type="submit" value="<?=in_array($_SESSION['username'], $film->dislikes) ? '👎🏿' : '👎'?>">
                        </form>
                    <?php endif ?>
                </td>
                <?php if($bejelentkezve && $film->hozzaadta == $_SESSION["username"]): ?>
                    <td><a href="keres_torol.php?id=<?=$film->id?>">❌</a></td>
                <?php endif ?>
            </tr>
        <?php endforeach ?>
    </table>
<?php } ?>