<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Authentication required</h1>

    <h2>Login</h2>
    <form method="POST" action="auth-login.php">
        <input name="username" placeholder="Username"> <br>
        <input name="password" type="password" placeholder="Password"> <br>
        <input type="submit" value="Login">
    </form>

    <h2>Register</h2>
    <form method="POST" action="auth-register.php">
        <input name="username" placeholder="Username"> <br>
        <input name="email" placeholder="email@example.com"> <br>
        <input name="password1" type="password" placeholder="Password"> <br>
        <input name="password2" type="password" placeholder="Password"> <br>
        <input type="submit" value="Register">
    </form>
</body>
</html>