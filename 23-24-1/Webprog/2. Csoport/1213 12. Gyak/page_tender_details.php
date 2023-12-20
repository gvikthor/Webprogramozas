<?php
    session_start();
    require_once 'functions.php';
    login_guard('page_login.php');
    $tender = get_tender_by_id($_GET['tender_id'] ?? '');
    if(!$tender){
        redirect('index.php');
    }
    $users = get_users_by_tender_id($tender->id);
    $is_minister = is_minister_by_uname($_SESSION['user']);
?>


<?php html_begin('Főoldal', $is_minister) ?>
<h2><?=$tender->name?></h2>
<img src="<?=$tender->img?>">
<div><?=$tender->desc?></div>
<table>
    <?php foreach($users as $user): ?>
        <tr>
            <td><?=$user->name?></td>
        </tr>
    <?php endforeach ?>
</table>
<?php html_end() ?>