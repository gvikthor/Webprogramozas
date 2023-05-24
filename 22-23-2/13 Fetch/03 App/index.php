<?php 
require_once 'functions.php';
require_once 'subpage_movies.php';

session_start();

$logged_in = isset($_SESSION['user']);

$errors = $_SESSION['errors'] ?? [];
$_SESSION['errors'] = [];

?>

<style>
    /*#subpage-movies-table.show .loggedin {

    }*/

    #subpage-movies-table.hide .loggedin {
        display: none;
    }
</style>

<?php if($logged_in): ?>
    Szia <?=$_SESSION['user']?>!
    <form method="POST" action="request_logout.php">
        <input type="submit" value="Kijelentkez">
    </form>
<?php else: ?>
    Jelentkezz be!
    <form method="POST" action="request_login.php">
        <input name="username"> <br>
        <input type="password" name="password">
        <input type="submit" value="Bejelentkez">
    </form>
    <?php generate_error_list($errors) ?>
    <a href="register_form.php">Nincs fiókod? Regisztrálj!</a>
<?php endif ?>

<?php subpage_movies_fetch($logged_in) ?>