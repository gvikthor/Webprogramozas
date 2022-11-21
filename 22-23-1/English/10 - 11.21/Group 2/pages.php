<?php function page_movielist($title){ ?>
    <?php
    $movies = [
        'Star Wars',
        'Lord of the Rings',
        'Shrek'
    ];
    ?>

    <h2><?=$title?></h2>
    <ul>
        <?php foreach($movies as $movie): ?>
            <li><?=$movie?></li>
        <?php endforeach ?>
    </ul>
<?php } // end page_movielist ?>

<?php function page_login($origin){ ?>
    <h2>Login</h2>
    <form action="query_login.php" method="POST">
        <input type="hidden" name="origin" value="<?=$origin?>">
        Username: <input name="uname"> <br>
        Password: <input name="pword" type="password"> <br>
        <input type="submit" value="Login">
    </form>
<?php } //end page_login ?>

<?php function page_register($origin){ ?>
    <h2>Register</h2>
    <form action="query_register.php" method="POST">
        <input type="hidden" name="origin" value="<?=$origin?>">

        Username: <input name="uname"> <br>

        Password: <input name="pword1" type="password"> <br>

        Password again: <input name="pword2" type="password"> <br>

        Birth year: <input type="number" name="year"> <br>

        City: <select name="city">
            <option value="hu-bp">Budapest</option>
            <option value="hu-db">Debrecen</option>
            <option value="uk-ln">London</option>
            <option value="uk-mc">Manchester</option>
            <option value="de-br">Berlin</option>
        </select> <br>

        Favourite color: <br>
        <input type="radio" name="color" value="red"> Red <br>
        <input type="radio" name="color" value="blue"> Blue <br>
        <input type="radio" name="color" value="green"> Green <br>

        Movies: <br>
        <input type="checkbox" name="movies[]" value="sw"> Star Wars <br>
        <input type="checkbox" name="movies[]" value="lotr"> Lord of the Rings <br>
        <input type="checkbox" name="movies[]" value="mcu"> Marvel Cinematic Universe <br>
        <input type="checkbox" name="movies[]" value="shrek"> Shrek <br>

        <input type="submit" value="Register">
    </form>
<?php } //end page_register ?>

<?php function page_errors($errors){ ?>
    <?php if(count($errors ?? []) == 0) return ?>

    <?php $error_dict = json_read('errors.json') ?>
    <h2>Error!</h2>
    <ul>
        <?php foreach($errors as $error): ?>
            <li><?=$error_dict->$error?></li>
        <?php endforeach ?>
    </ul>
<?php } // end page_errors ?>