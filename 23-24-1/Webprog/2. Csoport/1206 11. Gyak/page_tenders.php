<?php
    session_start();
    require_once 'functions.php';
    login_guard('page_login.php');
    $tenders = get_tenders();
?>


<?php html_begin('Pályázatok') ?>
    <table>
        <thead>
            <tr>
                <th>Név</th>
                <th>Miniszter</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($tenders as $tender): ?>
                <tr>
                    <td><?=$tender->name?></td>
                    <td><?=get_user($tender->minister)->name?></td>
                </tr>
            <?php endforeach ?>
        </tbody>
    </table>
<?php html_end() ?>