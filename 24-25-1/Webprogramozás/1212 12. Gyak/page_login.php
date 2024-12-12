<?php
require_once 'support_fuggvenyek.php';
require_once 'support_oldalelemek.php';
session_start();
$fid = $_SESSION['felhasznalo_id'] ?? null;
$hibak = munkamenet_valtozo('hibak');

if(isset($fid)){
    atiranyit('index.php');
}

?>


<?php oldal_eleje('Bejelentkezés', false) ?>

<form action="request_login.php" method="POST">
    Felhasználónév: <input name="fnev"> <br>
    Jelszó: <input name="jszo" type="password"> <br>
    <input type="submit" value="Bejelentkez">
</form>
<?php if(count($hibak) > 0): ?>
    <ul>
        <?php foreach($hibak as $hiba): ?>
        <li><?= $hiba ?></li>
        <?php endforeach ?>
    </ul>
<?php endif ?>

<?php oldal_vege() ?>
    
