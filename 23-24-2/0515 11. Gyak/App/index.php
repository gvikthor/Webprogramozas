<?php
require_once 'functions.php';

session_start();
$games = get_all_games();
$user = $_SESSION['user'] ?? '';
$is_logged_in = trim($user) != '';
$is_admin = $is_logged_in && is_admin($user);
$imageurl = $is_logged_in ? get_imageurl_by_username($user) : '';

$errors = $_SESSION['errors'] ?? [];
unset($_SESSION['errors']);

//highlight_array($games);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
img#profile_image {
    width: 50px;
    height: 50px;
    border-radius: 25px;
}
</style>

<body>
    <?php if ($is_logged_in) : ?>
        <a href="profile.php"><img id="profile_image" src="<?= $imageurl ?>"></a>
        <a href="logout.php">Logout</a>
    <?php else : ?>
        <!-- Ezt ki lehetne szervezni egy login_form.php oldalra és ide csak linket tenni -->
        <form action="login.php" method="POST">
            <input name="username"> <br>
            <input name="password" type="password"> <br>
            <input type="submit" value="Login">
        </form>

        <!-- Ezt ki lehetne szervezni egy register_form.php oldalra és ide csak linket tenni -->
        <form action="register.php" method="POST">
            <input name="username"> <br>
            <input name="email"> <br>
            <input name="password1" type="password"> <br>
            <input name="password2" type="password"> <br>
            <input name="imageurl" type="imageurl"> <br>
            <input type="submit" value="Register">
        </form>

        <?php if(count($errors) > 0): ?>
            <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
            </ul>
        <?php endif ?>

    <?php endif ?>
    <ul>
        <?php foreach ($games as $game) : ?>
            <li>
                <a href="game.php?id=<?= $game['id'] ?>">
                    <?= $game['title'] ?>
                </a>
                <?php if ($is_admin) : ?>
                    <a href="delete.php?id=<?= $game['id'] ?>">
                        🚯
                    </a>
                <?php endif ?>
            </li>
        <?php endforeach ?>
    </ul>
</body>

</html>