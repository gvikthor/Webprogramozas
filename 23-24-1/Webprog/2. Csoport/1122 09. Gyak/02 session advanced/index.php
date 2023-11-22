









<?php
session_start();
if(!isset($_SESSION['number'])){
    $_SESSION['number'] = 0;
}
?>
Current number: <?=$_SESSION['number']?> <br>
<a href="plus.php">➕</a>
<br>
<form action="minus.php">
    <input type="submit" value="➖">
</form>
<br>
<a href="delete.php">🚮</a>