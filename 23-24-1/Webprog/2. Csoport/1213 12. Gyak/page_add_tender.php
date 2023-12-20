<?php
    session_start();
    require_once 'functions.php';
    login_guard('page_login.php');
    $tenders = get_tenders();
    $user_tender_ids = get_tender_ids_by_uname($_SESSION['user']);
    $is_minister = is_minister_by_uname($_SESSION['user']);
    if(!$is_minister){
        redirect('index.php');
    }
?>


<?php html_begin('Új pályázat', $is_minister) ?>
    <form action="do_add_tender.php" method="POST">
        <input name="name"> <br>
        <textarea name="description"></textarea> <br>
        <input type="submit" value="Hozzáad">
        <link rel="stylesheet" href="style-login.css">
    </form>
<?php html_end() ?>