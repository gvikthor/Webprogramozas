<?php
die;
require_once 'functions.php';
/*create_user((object)[
    'uname' => 'ABC123',
    'email' => 'abc123@elte.hu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'student_of' => [],
    'teacher_of' => [],
    'is_teacher' => false
]);*/
create_course((object)[
    'code' => 'IP-18WEB',
    'name' => 'Webprog',
    'max_stud' => 5,
    'students' => [],
    'teacher' => null
]);
create_course((object)[
    'code' => 'IP-18ALGO',
    'name' => 'Algoritmusok',
    'max_stud' => 3,
    'students' => [],
    'teacher' => null
]);
create_course((object)[
    'code' => 'IP-18AUTO',
    'name' => 'Autószerelés alapok',
    'max_stud' => 4,
    'students' => [],
    'teacher' => null
]);
create_user((object)[
    'uname' => 'JKL987',
    'email' => 'jkl987@elte.hu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'student_of' => [],
    'teacher_of' => [],
    'is_teacher' => false
]);
create_user((object)[
    'uname' => 'QWE456',
    'email' => 'qwe455@elte.hu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'student_of' => [],
    'teacher_of' => [],
    'is_teacher' => false
]);
create_user((object)[
    'uname' => '123ASD',
    'email' => '123ASD@elte.hu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'student_of' => [],
    'teacher_of' => [],
    'is_teacher' => false
]);
create_user((object)[
    'uname' => '456789',
    'email' => '456789@elte.hu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'student_of' => [],
    'teacher_of' => [],
    'is_teacher' => false
]);
create_user((object)[
    'uname' => 'Fradi',
    'email' => 'fradi@elte.hu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'student_of' => [],
    'teacher_of' => [],
    'is_teacher' => true
]);
create_user((object)[
    'uname' => 'hz',
    'email' => 'hz@elte.hu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'student_of' => [],
    'teacher_of' => [],
    'is_teacher' => true
]);