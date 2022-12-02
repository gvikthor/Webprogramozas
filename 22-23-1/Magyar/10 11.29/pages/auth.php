<?php function page_auth_login(){ ?>
    <h2>Login</h2>
    <form method="POST" action="query/login.php">
        <input name="uname" placeholder="Username"> <br>
        <input name="pword" type="password" placeholder="Password"> <br>
        <input type="submit" value="Login">
    </form>
<?php } ?>

<?php function page_auth_register(){ ?>
    <h2>Register</h2>
    <form method="POST" action="query/register.php">
        Username:<br>
        <input name="uname" placeholder="Username"> <br>
        Password: <br>
        <input name="pword1" type="password" placeholder="Password"> <br>
        Password again: <br>
        <input name="pword2" type="password" placeholder="Password"> <br>
        Age: <br>
        <input name="age" type="number"> <br>
        Cat or dog? <br>
        <input type="radio" name="catdog" value="cat"> Cat <br>
        <input type="radio" name="catdog" value="dog"> Dog <br>
        City: <br>
        <select name="city">
            <option value="bp">Budapest</option>
            <option value="db">Debrecen</option>
            <option value="ms">Miskolc</option>
            <option value="ot">Other</option>
        </select> <br>
        Movies: <br>
        <input type="checkbox" name="movies[]" value="sw"> Star Wars <br>
        <input type="checkbox" name="movies[]" value="lotr"> Lord of the Rings <br>
        <input type="checkbox" name="movies[]" value="tw"> Twilight <br>
        Description: <br>
        <textarea name="desc"></textarea>
        <input type="submit" value="Register">
    </form>
<?php } ?>