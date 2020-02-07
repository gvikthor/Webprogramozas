<?php if(isset($szabalyos) && $szabalyos): ?>
    <form action="upload.php"> 
        Kép linkje: <input name="link">
        Tagek (szóközökkel elválasztva): <input name="tagek">
        <input type="submit" name="feltolt" value="Feltölt">
    </form>

<?php
$kepek = [];
if(isset($_GET["szuro"])):
    $kepek = tkepek($_GET["szuro"]);
?>
    <form action="index.php">
        <input type="submit" value="Szűrők ürítése">
    </form>
<?php
else:
    $kepek = kepek();
endif
?>

<table>
    
    <?php foreach($kepek as $kep): ?>
    <tr
        <?php if(in_array($kep->id, ulikes($_SESSION["uname"]))): ?>
            style="background: green;"
        <?php endif ?>
    >
        <td><img src=<?=$kep->src?> width="150px"></td>
        <td><a href="profile.php?uname=<?=$kep->tulajdonos?>"><?=$kep->tulajdonos?></a></td>
        <td>
            <ul>
            <?php foreach($kep->tags as $tag): ?>
                <li><a href="index.php?szuro=<?=$tag?>"><?=$tag?></a></li>
            <?php endforeach ?>
            </ul>
        </td>
        <td>
            <form action="like.php">
                <input style="display: none;" name="id" value=<?=$kep->id?>>
                <input type="submit" name="like" value="like">
            </form>
        </td>
    </tr>
    <?php endforeach ?>
</table>




<?php else:
    header("Location: index.php");
    endif
?>