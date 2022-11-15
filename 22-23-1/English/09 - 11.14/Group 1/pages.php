<?php function page_login($come_back_here){ ?>
    <form method="POST" action="query_login.php">
        Username: <input name="uname"> <br>
        Password: <input name="pword" type="password"> <br>
        <input type="hidden" name="come_back_here" value="<?=$come_back_here?>">
        <input type="submit" value="Login">
    </form>
<?php } //end page_login ?>

<?php function page_register($come_back_here){ ?>
    <form method="POST" action="query_register.php">
        Username: <input name="uname"> <br>
        Password: <input type="password" name="password1"> <br>
        Password again: <input type="password" name="password2"> <br>
        Age: <input name="age" type="number"> <br>
        Favourite color: <select name="color">
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
        </select><br>
        Gender:
        <input type="radio" name="gender" value="f"> Female
        <input type="radio" name="gender" value="m"> Male
        <input type="radio" name="gender" value="o"> Other/no answer
        <br>
        Movies:<br>
        <input type="checkbox" name="movies_sw" value="sw"> Star Wars <br>
        <input type="checkbox" name="movies_lotr" value="lotr"> Lord of the Rings <br>
        <input type="checkbox" name="movies_hp" value="hp"> Harry Potter <br>
        <input type="checkbox" name="movies_nb" value="nb"> The Notebook
        <br>
        Description: <textarea name="desc"></textarea>
        <input type="hidden" name="come_back_here" value="<?=$come_back_here?>">
        <input type="submit" value="Register">
    </form>
<?php } //end page_register ?>