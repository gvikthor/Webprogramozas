<?php
require_once 'support_fuggvenyek.php';
require_once 'support_oldalelemek.php';
session_start();
$fid = $_SESSION['felhasznalo_id'] ?? null;

if (!isset($fid)) {
    atiranyit('page_login.php');
}

$felhasznalo_storage = uj_storage('adatok/felhasznalok');
$felhasznalo = $felhasznalo_storage->findById($fid);

$autok_storage = uj_storage('adatok/autok');
$autok = $autok_storage->findAll();
?>



<?php oldal_eleje('Főoldal') ?>

<table>
    <thead>
        <tr>
            <th>Részletek</th>
            <th>Márka</th>
            <th>Típus</th>
            <th>Évjárat</th>
            <th>Használt?</th>
            <?php if($felhasznalo['admin']): ?>
            <th>Törlés</th>
            <?php endif ?>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($autok as $auto): ?>
            <tr>
                <td><a href="page_auto_reszletek.php?id=<?=$auto['id']?>">🚗</a></td>
                <td><?=$auto['marka']?></td>
                <td><?=$auto['tipus']?></td>
                <td><?=$auto['evjarat']?></td>
                <td><?=$auto['hasznalt'] ? 'Igen' : 'Nem'?></td>
                <?php if($felhasznalo['admin']): ?>
                <td><a href="request_auto_torol.php?id=<?=$auto['id']?>">🚯</a></td>
                <?php endif ?>
            </tr>
        <?php endforeach ?>
    </tbody>
</table>

<?php if($felhasznalo['admin']): ?>
<form action="request_auto_uj.php">
    Márka: <input name="marka"> <br>
    Típus: <input name="tipus"> <br>
    Évjárat: <input name="evjarat"> <br>
    
    <input type="checkbox" name="hasznalt" id="hasznalt"> <label for="hasznalt">Használt</label> <br>

    <input type="submit" value="+">
</form>
<?php endif ?>

<?php oldal_vege() ?>