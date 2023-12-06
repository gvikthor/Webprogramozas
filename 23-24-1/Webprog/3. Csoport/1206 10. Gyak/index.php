<?php
    session_start();
    require_once 'functions.php';

    if(!user()) redirect('page_login.php');
    $courses = get_courses(user());
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IKTUN</title>
</head>
<body>
    <header>
        <span><?=user()?></span>
        <nav>
            <a href="index.php">Kurzusaim</a>
            <a href="do_logout.php">Kijelentkezés</a>
        </nav>
    </header>
    <table id="courses">
    <?php if(is_teacher(user())): ?>
        <thead>
            <tr>
                <th>Kurzuskód</th>
                <th>Kurzusnév</th>
                <th>Létszám/Max</th>
                <th>Max-</th>
                <th>Max+</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($courses as $course): ?>
                <tr>
                    <td><?=$course->code?></td>
                    <td><?=$course->name?></td>
                    <td><?=count($course->students)?>/<?=$course->max_stud?></td>
                    <td></td>
                    <td></td>
                </tr>
            <?php endforeach ?>
        </tbody>
    <?php else: ?>

    <?php endif ?>
    </table>
</body>
</html>