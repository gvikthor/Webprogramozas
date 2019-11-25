<?php if(isset($_GET["uname"])): 
require_once("adatkezeles.php");
$kepek = ukepek($_GET["uname"]); ?>

<table>
    <?php foreach($kepek as $kep): ?>
    <tr>
        <td><img src=<?=$kep->src?> width: 150px></td>
    </tr>
    <?php endforeach ?>
</table>




<?php else:
    header("Location: index.php");
    endif
?>