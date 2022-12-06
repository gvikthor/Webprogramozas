<?php function page_movielist($title, $user_id = null){ ?>
    <?php
    require_once 'functions.php';
    $movies = get_all_movies();
    ?>

    <h2><?=$title?></h2>
    <ul>
        <?php foreach($movies as $movie): ?>
            <?php $likes = user_likes_movie($user_id, $movie->id) ?>
            <li>
                <a href="movie.php?movie_id=<?=$movie->id?>"><?=$movie->title?></a>
                <a href="query_<?=$likes ?'dislike':'like'?>.php?movie_id=<?=$movie->id?>"><?=$likes ? '💚' : '🖤'?></a>
        <?php endforeach ?>
    </ul>
<?php } // end page_movielist ?>

<?php function page_add_movie(){ ?>
    <form action="query_add_movie.php">
        ID: <input name="movie_id"> <br>
        Title: <input name="title"> <br>
        Release <input name="release"> <br>
        Description: <textarea name="desc"></textarea> <br>
        <input type="submit" value="➕">
    </form>
<?php } //end page_add_movie ?>

<?php function page_login($origin){ ?>
    <h2>Login</h2>
    <form action="query_login.php" method="POST">
        <input type="hidden" name="origin" value="<?=$origin?>">
        Username: <input name="uname"> <br>
        Password: <input name="pword" type="password"> <br>
        <input type="submit" value="Login">
    </form>
<?php } //end page_login ?>

<?php function page_register($origin, $kept_data){ ?>
    <?php
        $is_kept = $kept_data != null;
    ?>
    <h2>Register</h2>
    <form action="query_register.php" method="POST">
        <input type="hidden" name="origin" value="<?=$origin?>">

        Username: <input name="uname" value="<?=$is_kept ? $kept_data->uname : ''?>"> <br>

        Password: <input name="pword1" type="password"> <br>

        Password again: <input name="pword2" type="password"> <br>

        Birth year: <input type="number" name="year" value="<?=$is_kept ? $kept_data->year : ''?>"> <br>

        City: <select name="city">
            <option value="hu-bp" <?=$is_kept ? ($kept_data->city == 'hu-bp'? 'selected' : '') : ''?>>Budapest</option>
            <option value="hu-db" <?=$is_kept ? ($kept_data->city == 'hu-db'? 'selected' : '') : ''?>>Debrecen</option>
            <option value="uk-ln" <?=$is_kept ? ($kept_data->city == 'uk-ln'? 'selected' : '') : ''?>>London</option>
            <option value="uk-mc" <?=$is_kept ? ($kept_data->city == 'uk-mc'? 'selected' : '') : ''?>>Manchester</option>
            <option value="de-br" <?=$is_kept ? ($kept_data->city == 'de-br'? 'selected' : '') : ''?>>Berlin</option>
        </select> <br>

        Favourite color: <br>
        <input type="radio" name="color" value="red" <?=$is_kept ? ($kept_data->color == 'red'? 'checked' : '') : ''?>> Red <br>
        <input type="radio" name="color" value="blue" <?=$is_kept ? ($kept_data->color == 'blue'? 'checked' : '') : ''?>> Blue <br>
        <input type="radio" name="color" value="green" <?=$is_kept ? ($kept_data->color == 'green'? 'checked' : '') : ''?>> Green <br>

        Movies: <br>
        <input type="checkbox" name="movies[]" value="sw" <?=$is_kept ? (in_array('sw', $kept_data->movies)? 'checked' : '') : ''?>> Star Wars <br>
        <input type="checkbox" name="movies[]" value="lotr" <?=$is_kept ? (in_array('lotr', $kept_data->movies)? 'checked' : '') : ''?>> Lord of the Rings <br>
        <input type="checkbox" name="movies[]" value="mcu" <?=$is_kept ? (in_array('mcu', $kept_data->movies)? 'checked' : '') : ''?>> Marvel Cinematic Universe <br>
        <input type="checkbox" name="movies[]" value="shrek" <?=$is_kept ? (in_array('shrek', $kept_data->movies)? 'checked' : '') : ''?>> Shrek <br>

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