<?php 
session_start();

$logged_in = isset($_SESSION['user']);

?>

<?php if($logged_in): ?>
    Szia Felhasználónév!
    <form method="POST" action="logout.php">
        <input type="submit" value="Kijelentkez">
    </form>
<?php else: ?>
    Jelentkezz be!
    <form method="POST" action="login.php">
        <input name="username"> <br>
        <input type="password" name="password">
        <input type="submit" value="Bejelentkez">
    </form>
<?php endif ?>