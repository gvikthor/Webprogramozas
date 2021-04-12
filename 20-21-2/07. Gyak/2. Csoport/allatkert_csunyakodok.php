<?php
    foreach($allatok as $allat){
        echo '<tr>';
        echo '<td>' . $allat->nev . '</td>';
        echo '<td>' . $allat->faj . '</td>';
        echo '<td>' . $allat->suly . 'kg</td>';
        echo '<tr>';
    }
?>



<?php foreach($allatok as $allat){ ?>
    <tr>
        <td><?php echo $allat->nev; ?></td>
        <td><?php echo $allat->faj; ?></td>
        <td><?php echo $allat->suly; ?>kg</td>
    </tr>
<?php } ?>


<?php echo valami; ?>
<?=valami?>

<thead>
    <tr>
        <?php foreach($allatok[0] as $index => $elem): ?>
            <th><?=$index?></th>
        <?php endforeach ?>
    </tr>
</thead>


<?php
    $color = 'white';
    if($allat->suly > 200){
        $color = 'red';
    }
?>
<tr style="background-color: <?=$color?>;">

<?php foreach($allatok as $allat): ?>
    <tr <?php if($allat->suly > 200){echo 'style="background-color: red;"';}?>>