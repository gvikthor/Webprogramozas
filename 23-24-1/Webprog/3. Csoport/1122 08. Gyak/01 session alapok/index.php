<?php
session_start();

if(isset($_GET['favNumber'])){
    $_SESSION['favNumber'] = intval($_GET['favNumber']);
}else if(!isset($_SESSION['favNumber'])){
    $_SESSION['favNumber'] = 5;
}
?>

Favourite number: <?=$_SESSION['favNumber']?>
<br>
<a href="minus.php">-</a>
<br><br>
<form action="plus.php" method="GET">
    <input type="submit" value="+">
</form>
<br><br>
<a href="reset.php">🚮</a>