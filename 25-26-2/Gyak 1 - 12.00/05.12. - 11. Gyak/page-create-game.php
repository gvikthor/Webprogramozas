<?php
session_start();
require_once 'functions.php';

$result = $_GET['result'] ?? '';
$retain_values = $_SESSION['values'] ?? (object)[];
$_SESSION['values'] = (object)[];

$is_logged_in = isset($_SESSION['user_id']) && strlen($_SESSION['user_id']) > 0;
if (!$is_logged_in) {
    redirect('page-authenticate.php');
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .current {
        font-weight: bold;
        color: #13294B;
    }
</style>

<body>
    <h1>Add new game</h1>
    <nav>
        <a href="index.php">Home</a>
        <a href="page-create-game.php" class="current">Add game</a>
        <a href="datahandling-user-logout.php">Logout</a>
    </nav>
    <!-- CRUD: Create-Read-Update-Delete, ez az űralp a create része ennek -->
    <form action="datahandling-game-create.php" method="GET">
        <p>
            <label for="gamename">Game name</label><br>
            <input id="gamename" name="gamename" value="<?= $retain_values->gamename ?? '' ?>"><br>
        </p>

        <br>

        <p>
            <label for="releaseyear">Release year</label><br>
            <input id="releaseyear" name="releaseyear" value="<?= $retain_values->releaseyear ?? '' ?>"><br>
        </p>

        <br>

        <p>
            <label for="category">Category</label><br>
            <select id="category" name="category">
                <option value="strategy">Strategy</option>
                <option value="sport">Sport</option>
                <option value="simulation">Simulation</option>
                <option value="shooter">Shooter</option>
            </select>
        </p>

        <br>

        <p>
            <label for="rating">Rating</label><br>
            <input type="radio" id="rating-good" name="rating" value="good" <?= (($retain_values->rating ?? '') == 'good') ? 'checked' : '' ?>> <label for="rating-good">Good</label><br>
            <input type="radio" id="rating-bad" name="rating" value="bad"> <label for="rating-bad">Bad</label><br>
        </p>

        <p>
            <label for="platform">Platform</label><br>
            <input type="checkbox" name="platform[]" value="win" id="platform-windows"> <label for="platform-windows">Windows</label><br>
            <input type="checkbox" name="platform[]" value="linux" id="platform-linux"> <label for="platform-linux">Linux/Unix/Mac</label><br>
            <input type="checkbox" name="platform[]" value="xbox" id="platform-xbox"> <label for="platform-xbox">X-Box</label><br>
            <input type="checkbox" name="platform[]" value="ps" id="platform-ps"> <label for="platform-ps">Playstation</label><br>
        </p>

        <input type="Submit" value="Add game">
    </form>

    <?php if ($result == 'ok'): ?>
        <div>
            Game added! 🌈
        </div>
    <?php endif ?>

    <?php if ($result == 'error'): ?>
        <?php
        $errors = $_SESSION['errors'];
        $_SESSION['errors'] = [];
        ?>
        <div>
            Error!
            <ul>
                <?php foreach ($errors as $error): ?>
                    <li><?= $error ?></li>
                <?php endforeach ?>
            </ul>
        </div>
    <?php endif ?>
</body>

</html>