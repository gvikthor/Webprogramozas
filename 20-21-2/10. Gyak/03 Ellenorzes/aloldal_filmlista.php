<?php
function aloldal_filmlista($bejelntkezve){
    require_once "fuggvenyek.php";
    $filmek = jsonBeolvas("filmek.json");
?>

<table>
<tr>
    <th>Cím</th>
    <th>Megjelenés</th>
    <th>Like</th>
    <th>Dislike</th>
</tr>
<?php foreach($filmek as $film): ?>
    <tr class="film">
        <td><?=$film->cim?></td>
        <td><?=$film->megjelenes?></td>
        <td>
            <?php
            $tetszik = (object)[
                "film" => false,
                "tetszik" => false
            ];
            $nemtetszik = (object)[
                "film" => false,
                "nemtetszik" => false
            ];
            if($bejelntkezve){
                $tetszik = user_tetszik($_SESSION['nev'], $film->id);
                $nemtetszik = user_nemtetszik($_SESSION['nev'], $film->id); 
            }               
            ?>
            <a href="<?=$bejelntkezve ? 'like.php?id='.($film->id).'&like=igen' : 'autentikacio.php'?>">
            <?= $tetszik->film && $tetszik->tetszik ? '👍🏿' : '👍' ?><?=count($film->like)?>
            </a>
        </td>
        <td>
            <a href="<?=$bejelntkezve ? 'like.php?id='.($film->id).'&like=nem' : 'autentikacio.php'?>">
            <?= $nemtetszik->film && $nemtetszik->nemtetszik ? '👎🏿' : '👎' ?><?=count($film->dislike)?>
            </a>
        </td>
    </tr>
<?php endforeach ?>
</table>
    
<?php } ?>

