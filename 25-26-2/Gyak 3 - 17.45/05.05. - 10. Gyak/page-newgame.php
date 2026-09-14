<?php
session_start();

$status = $_SESSION["status"] ?? "";
$errors = $_SESSION["errors"] ?? [];
$values = $_SESSION["values"] ?? (object)[];

$_SESSION["status"] = null;
$_SESSION["errors"] = null;
$_SESSION["values"] = null;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .current {
            font-weight: bold;
            color: #13294B;
        }
    </style>
</head>
<body>
    <h1>Add game</h1>
    <nav>
        <a href="index.php">Home</a>
        <a href="page-newgame.php" class="current">Add game</a>
        <a href="page-authentication.php">Login/Register</a>
    </nav>

    <form action="datahandling-game-create.php" method="GET">
        <p>
            <label>Game name</label> <br>
            <input name="gamename" value="<?= $values->gamename ?? '' ?>">
        </p>

        <p>
            <label>Release year</label> <br>
            <input name="release" value="<?= $values->release ?? '' ?>">
        </p>

        <p>
            <label>Genre</label> <br>
            <select name="genre">
                <option value="strategy">Strategy</option>
                <option value="simulation">Simulation</option>
                <option value="sport">Sport</option>
                <option value="shooter">Shooter</option>
            </select>
        </p>

        <p>
            <label>Rating</label> <br>
            <input type="radio" name="rating" value="good" id="rating-good" <?= ($values->rating ?? "") == "good" ? "checked" : "" ?>> <label for="rating-good">Good</label> <br>
            <input type="radio" name="rating" value="bad" id="rating-bad"   <?= ($values->rating ?? "") == "bad"  ? "checked" : "" ?>> <label for="rating-bad">Bad</label>
        </p>

        <p>
            <label>Platform</label> <br>
            <input type="checkbox" name="platform[]" value="windows" id="platform-windows"> <label for="platform-windows">Windows</label> <br>
            <input type="checkbox" name="platform[]" value="linux" id="platform-linux"> <label for="platform-linux">Linux/Unix/Mac</label> <br>
            <input type="checkbox" name="platform[]" value="xbox" id="platform-xbox"> <label for="platform-xbox">Xbox</label> <br>
            <input type="checkbox" name="platform[]" value="ps" id="platform-ps"> <label for="platform-ps">Playstation</label>
        </p>

        <input type="submit" value="Add game">
    </form>

    <?php if($status == "added"): ?>
        <div style="background-color: greenyellow;">
            Game added! 🐻‍❄️🐵
        </div>
    <?php endif ?>

    <?php if($status == "error"): ?>
        <div style="color: red;">
            Errors!<br>
            <ul>
                <?php foreach($errors as $error): ?>
                    <li><?= $error ?></li>
                <?php endforeach ?>
            </ul>
        </div>
    <?php endif ?>
</body>
</html>