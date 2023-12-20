<?php
    session_start();
    require_once 'functions.php';
    login_guard('page_login.php');
    $tenders = get_tenders_by_uname($_SESSION['user']) ?? [];
    $is_minister = is_minister_by_uname($_SESSION['user']);
?>


<?php html_begin('Főoldal', $is_minister) ?>
<table>
    <thead>
        <tr>
            <th>Megtekint</th>
            <th>Visszavon</th>
            <th>Név</th>
            <th>Miniszter</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($tenders as $tender): ?>
            <tr>
                <td><a href="page_tender_details.php?tender_id=<?=$tender->id?>">Megtekint</a></td>
                <td><a href="do_unapply.php?tender_id=<?=$tender->id?>">Visszavon</a></td>
                <td><?=$tender->name?></td>
                <td><?=get_user($tender->minister)->name?></td>
            </tr>
        <?php endforeach ?>
    </tbody>
</table>
<?php html_end() ?>