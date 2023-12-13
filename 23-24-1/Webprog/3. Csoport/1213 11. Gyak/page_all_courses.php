<?php
    session_start();
    require_once 'functions.php';

    if(!user()) redirect('page_login.php');
    $courses = get_all_courses();
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
            <a href="page_all_courses.php">Minden kurzus</a>
            <a href="do_logout.php">Kijelentkezés</a>
        </nav>
    </header>
    <table id="courses">
        <thead>
            <tr>
                <th>Kurzuskód</th>
                <th>Kurzusnév</th>
                <th>Létszám/Max</th>
                <?php if(!is_teacher(user())): ?>
                    <th>Jelentkezés</th>
                <?php endif ?>
            </tr>
        </thead>
        <tbody>
            <?php foreach($courses as $course): ?>
                <?php if(!is_on_course($course->id, get_userid_by_username(user()))): ?>
                <tr>
                    <td><?=$course->code?></td>
                    <td><?=$course->name?></td>
                    <td><?=count($course->students)?>/<?=$course->max_stud?></td>  
                    <?php if(!is_teacher(user())): ?>
                        <td><a href="do_apply.php?course_id=<?=$course->id?>">Jelentkezés</a></td>
                    <?php endif ?>
                </tr>
                <?php endif ?>
            <?php endforeach ?>
        </tbody>
    </table>
</body>
</html>