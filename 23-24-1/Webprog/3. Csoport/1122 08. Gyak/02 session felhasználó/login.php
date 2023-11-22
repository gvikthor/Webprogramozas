<?php
session_start();
$errors = $_SESSION['errors'] ?? [];
$previous = $_SESSION['previous'] ?? null;

?>
<form action="req_login.php" method="POST">
    Username: <input name="uname" value="<?=$previous->uname ?? ''?>"> <br>
    Password: <input name="pword" type="password"> <br>
    <input type="submit" value="Login">
    <?php if(count($errors) > 0): ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</form>