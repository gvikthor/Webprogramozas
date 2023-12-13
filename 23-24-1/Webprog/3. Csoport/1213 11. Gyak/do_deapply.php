<?php
session_start();
require_once 'functions.php';

if(!user()) redirect('page_login.php');

$course_id = $_GET['course_id'] ?? '';
deapply_from_course(
    $course_id,
    get_userid_by_username(user())
);

redirect('index.php');