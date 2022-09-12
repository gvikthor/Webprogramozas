<?php

function lista($bejelentkezve){ 
    require_once('adatkezeles.php');
    $karakterek = karakterek();
?>
<style>
    .tetszesek form{
        display: inline-block;
    }
    .tetszesek input{
        background: none;
        border: none;
    }
</style>
<table>
    <tr>
        <th>Név</th>
        <th>Előfordulás</th>
        <th>Like/Dislike</th>
    </tr>
    <?php foreach($karakterek as $karakter): ?>
        <tr>
            <td><?=$karakter->nev?></td>
            <td>
                <ul>
                    <?php foreach($karakter->elofordulas as $elofordulas): ?>
                        <li><?=$elofordulas?></li>
                    <?php endforeach ?>
                </ul>
            </td>
            <td class="tetszesek">
                <?php if($bejelentkezve): ?>
                    <form action="keres_like.php">
                        <input type="hidden" name="id" value="<?=$karakter->id?>">
                        <input type="submit" value="<?=tetszike($karakter->id, $_SESSION['fnev']) ? '👍🏿' : '👍'?>">
                    </form>                
                <?php endif ?>
                <?=count(likeok($karakter->id))?> / <?=count(dislikeok($karakter->id))?>
                <?php if($bejelentkezve): ?>
                    <form action="keres_dislike.php">
                        <input type="hidden" name="id" value="<?=$karakter->id?>">
                        <input type="submit" value="<?=nemtetszike($karakter->id, $_SESSION['fnev']) ? '👎🏿' : '👎'?>">
                    </form>                
                <?php endif ?>
            </td>
        </tr>
    <?php endforeach ?>
</table>

<?php } ?>