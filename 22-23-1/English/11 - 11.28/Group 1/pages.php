<?php

 function page_login($come_back_here){ ?>
    <h2>Login</h2>
    <form method="POST" action="query_login.php">
        Username: <input name="uname"> <br>
        Password: <input name="pword" type="password"> <br>
        <input type="hidden" name="come_back_here" value="<?=$come_back_here?>">
        <input type="submit" value="Login">
    </form>
<?php } //end page_login ?>

<?php function page_register($come_back_here){ ?>
    <h2>Register</h2>
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
        <input type="checkbox" name="movies[]" value="sw"> Star Wars <br>
        <input type="checkbox" name="movies[]" value="lotr"> Lord of the Rings <br>
        <input type="checkbox" name="movies[]" value="hp"> Harry Potter <br>
        <input type="checkbox" name="movies[]" value="nb"> The Notebook
        <br>
        Description: <textarea name="desc"></textarea>
        <input type="hidden" name="come_back_here" value="<?=$come_back_here?>">
        <input type="submit" value="Register">
    </form>
<?php } //end page_register ?>

<?php function page_errors($errors){ ?>
    <?php if(count($errors) == 0) return ?>

    <?php $error_dict = json_read('localization/'.$_SESSION['language'].'/errors.json'); ?>

    <h2>Error!</h2>
    <ul>
        <?php foreach($errors as $error): ?>
            <li><?=$error_dict->$error?></li>
        <?php endforeach ?>
    </ul>
<?php } //end page_errors ?>