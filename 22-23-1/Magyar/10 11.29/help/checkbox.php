<?php

var_dump($_GET);
?>
<h2>Register</h2>
    <form>
        Movies: <br>
        <input type="checkbox" name="movies[]" value="sw"> Star Wars <br>
        <input type="checkbox" name="movies[]" value="lotr"> Lord of the Rings <br>
        <input type="checkbox" name="movies[]" value="tw"> Twilight <br>
        <input type="submit" value="Register">
    </form>