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

$aid = $_GET['id'] ?? '';
$auto = uj_storage('adatok/autok')->findById($aid);

if (!isset($auto)) {
    atiranyit('index.php');
}
?>

<?php oldal_eleje('Autó részletek') ?>

<ul>
    <li><?= $auto['marka'] ?></li>
    <li><?= $auto['tipus'] ?></li>
</ul>


<?php if ($felhasznalo['admin']): ?>
    <form action="request_auto_modosit.php">
        <input name="id" value="<?=$auto['id']?>" type="hidden">

        Márka: <input name="marka" value="<?=$auto['marka']?>"> <br>
        Típus: <input name="tipus" value="<?=$auto['tipus']?>"> <br>
        Évjárat: <input name="evjarat" value="<?=$auto['evjarat']?>"> <br>

        <input type="checkbox" name="hasznalt" id="hasznalt" <?= $auto['hasznalt'] ? 'checked' : '' ?>> <label for="hasznalt">Használt</label> <br>

        <input type="submit" value="Mentés">
    </form>
<?php endif ?>

<?php oldal_vege() ?>