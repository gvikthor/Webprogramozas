<?php
session_start();
require_once 'functions.php';

// lehetne az is, hogy megnézem van-e sessionben userid,
// aztán kiszedem a usert, és pl egy "is_admin" változóban megnézem, hogy admin-e.
if(!isset($_SESSION['user_id'])) {
    redirect('index.php');
}


//$form_processed = isset($_SESSION["success"]);
//$success = $_SESSION["success"] ?? '';

$result = $_SESSION["result"] ?? "";
$errors = $_SESSION["errors"] ?? [];
$game = $_SESSION["game"] ?? (object)[];

$_SESSION["result"] = null;
$_SESSION["errors"] = null;
$_SESSION["game"] = null;

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
    <h1>Add game</h1>
    <?php navMenu('addgame', true) ?>
    <form action="datahandling-game-create.php" method="GET">
        <p>
            <label>Game name</label> <br>
            <input name="gamename" value="<?= $game->gamename ?? '' ?>">
        </p>

        <p>
            <label>Release year</label> <br>
            <input name="release" value="<?= $game->release ?? '' ?>">
        </p>

        <p>
            <label>Genre</label> <br>
            <select name="genre">
                <option value="simulation">Simulation</option>
                <option value="strategy">Strategy</option>
                <option value="sport">Sport</option>
                <option value="shooter">Shooter</option>
            </select>
        </p>

        <p>
            <label>Rating</label> <br>
            <input type="radio" name="rating" id="rating-good" value="good" <?= ($game->rating ?? '') == 'good' ? 'checked' : '' ?>> <label for="rating-good">Good</label> <br>
            <input type="radio" name="rating" id="rating-bad" value="bad"   <?= ($game->rating ?? '') == 'bad'  ? 'checked' : '' ?>> <label for="rating-bad">Bad</label>
        </p>

        <p>
            <label>Platform</label> <br>
            <input type="checkbox" name="platform[]" value="windows" id="platform-windows"> <label for="platform-windows">Windows</label> <br>
            <input type="checkbox" name="platform[]" value="linux" id="platform-linux"> <label for="platform-linux">Linux/Unix/Mac</label> <br>
            <input type="checkbox" name="platform[]" value="xbox" id="platform-xbox"> <label for="platform-xbox">Xbox</label> <br>
            <input type="checkbox" name="platform[]" value="ps" id="platform-ps"> <label for="platform-ps">PS</label> <br>
        </p>

        <input type="submit" value="Add game">
    </form>

    <?php if($result == "saved"): ?>
        <div style="background-color: greenyellow;">
            Game saved! 🐻‍❄️
        </div>
    <?php endif ?>
    
    <?php if($result == "errors"): ?>
        <div style="color: red;">
            Warning!
            <ul>
                <?php foreach($errors as $error): ?>
                    <li><?= $error ?></li>
                <?php endforeach ?>
            </ul>
        </div>
    <?php endif ?>
</body>

</html>