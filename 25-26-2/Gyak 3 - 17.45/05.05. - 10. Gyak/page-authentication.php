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
    <h1>Login/Register</h1>
    <nav>
        <a href="index.php">Home</a>
        <a href="page-newgame.php">Add game</a>
        <a href="page-authentication.php" class="current">Login/Register</a>
    </nav>

    <h2>Login</h2>

    <h2>Register</h2>
    <form method="POST" action="datahandling-user-create.php">
        <input name="email" placeholder="email@emxaple.com"> <br>
        <input name="pw1" type="password" placeholder="Password"> <br>
        <input name="pw2" type="password" placeholder="Password"> <br>
        <input type="submit" value="Register">
    </form>

</body>

</html>