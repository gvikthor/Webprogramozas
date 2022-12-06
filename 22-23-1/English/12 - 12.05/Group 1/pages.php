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

<?php function page_register($come_back_here, $kept_data){ ?>
    <?php
    $keep = $kept_data != null;
    ?>
    <h2>Register</h2>
    <form method="POST" action="query_register.php">
        Username: <input name="uname" value="<?=$keep ? $kept_data->uname : '' ?>"> <br>
        Password: <input type="password" name="password1"> <br>
        Password again: <input type="password" name="password2"> <br>
        Age: <input name="age" type="number" value="<?=$keep ? $kept_data->age : '' ?>"> <br>
        Favourite color: <select name="color">
            <option value="red"    <?=$keep ? ($kept_data->color == 'red' ? 'selected' : '') : ''?>>Red</option>
            <option value="blue"   <?=$keep ? ($kept_data->color == 'blue' ? 'selected' : '') : ''?>>Blue</option>
            <option value="green"  <?=$keep ? ($kept_data->color == 'green' ? 'selected' : '') : ''?>>Green</option>
            <option value="yellow" <?=$keep ? ($kept_data->color == 'yellow' ? 'selected' : '') : ''?>>Yellow</option>
        </select><br>
        Gender:
        <input type="radio" name="gender" value="f" <?=$keep ? ($kept_data->gender == 'f' ? 'checked' : '') : ''?>> Female
        <input type="radio" name="gender" value="m" <?=$keep ? ($kept_data->gender == 'm' ? 'checked' : '') : ''?>> Male
        <input type="radio" name="gender" value="o" <?=$keep ? ($kept_data->gender == 'o' ? 'checked' : '') : ''?>> Other/no answer
        <br>
        Movies:<br>
        <input type="checkbox" name="movies[]" value="sw" <?=$keep ? (in_array('sw', $kept_data->movies) ? 'checked' : '') : ''?>> Star Wars <br>
        <input type="checkbox" name="movies[]" value="lotr" <?=$keep ? (in_array('lotr', $kept_data->movies) ? 'checked' : '') : ''?>> Lord of the Rings <br>
        <input type="checkbox" name="movies[]" value="hp" <?=$keep ? (in_array('hp', $kept_data->movies) ? 'checked' : '') : ''?>> Harry Potter <br>
        <input type="checkbox" name="movies[]" value="nb" <?=$keep ? (in_array('nb', $kept_data->movies) ? 'checked' : '') : ''?>> The Notebook
        <br>
        Description: <textarea name="desc" placeholder="Description"><?=$keep ? $kept_data->desc : '' ?></textarea>
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