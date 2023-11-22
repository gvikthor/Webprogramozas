








<?php
require_once 'functions.php';
session_start();
login_guard();

$errors = pull_session_var('errors', []);
$form_data = pull_session_var('form_data', (object)[])
?>

<form action="do_login.php" method="POST">
    Username: <input name="uname" value="<?=$form_data->uname ?? ''?>"> <br>
    Password: <input type="password" name="pword"> <br>
    <input type="submit" value="Login">
</form>
<?php if(count($errors) > 0): ?>
     <ul>
        <?php foreach($errors as $error): ?>
            <li><?=$error?></li>
        <?php endforeach ?>
     </ul>
<?php endif ?>