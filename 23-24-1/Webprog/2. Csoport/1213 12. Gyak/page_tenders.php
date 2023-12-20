<?php
    session_start();
    require_once 'functions.php';
    login_guard('page_login.php');
    $tenders = get_tenders();
    $user_tender_ids = get_tender_ids_by_uname($_SESSION['user']);
    $is_minister = is_minister_by_uname($_SESSION['user']);
?>


<?php html_begin('Pályázatok', $is_minister) ?>
    <table>
        <thead>
            <tr>
                <th>Pályáz</th>
                <th>Név</th>
                <th>Miniszter</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($tenders as $tender): ?>
                <?php if(!in_array($tender->id, $user_tender_ids)): ?>
                <tr>
                    <td><a href="do_apply.php?tender_id=<?=$tender->id?>">Megpályáz</a></td>
                    <td><?=$tender->name?></td>
                    <td><?=get_user($tender->minister)->name?></td>
                </tr>
                <?php endif ?>
            <?php endforeach ?>
        </tbody>
    </table>
<?php html_end() ?>