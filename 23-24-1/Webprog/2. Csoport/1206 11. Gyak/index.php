<?php
    session_start();
    require_once 'functions.php';
    login_guard('page_login.php');
?>


<?php html_begin('Főoldal') ?>
    Valami valami tartalom
<?php html_end() ?>