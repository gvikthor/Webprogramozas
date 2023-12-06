<?php
require_once('Storage.php');

function redirect($target){
    header("Location: $target");
    die;
}

// Auth

function user(){
    return $_SESSION['uname'] ?? null;
}

function login($uname, $pword){
    $success = false;
    if(!user() && check_user_credentials($uname, $pword)){
        $success = true;
        $_SESSION['uname'] = $uname;
    }
    return $success;
}

function check_user_credentials($uname, $pword){
    $user = new_storage('data_users')->findOne(["uname" => $uname]);
    return $user && password_verify($pword, $user->password);
}

function logout(){
    session_unset();
    session_destroy();
}

// Database

function new_storage($filename){
    return new Storage(new JsonIO("$filename.json"), false);
}

function create_user($user){
    $user_storage = new_storage('data_users');
    $result = $user_storage->findOne(['uname' => $user->uname]);
    /*if($result){
        return null;
    }else{
        return $user_storage->add($user);
    }*/
    return $result ? null : $user_storage->add($user);
}

function create_course($course){
    $course_storage = new_storage('data_courses');
    $result = $course_storage->findOne(['code' => $course->code]);
    return $result ? null : $course_storage->add($course);
}

function is_teacher($uname){
    $user_storage = new_storage('data_users');
    $result = $user_storage->findOne(['uname' => $uname]);
    return $result->is_teacher;
}

function get_courses($uname){
    $user_storage = new_storage('data_users');
    $result = $user_storage->findOne(['uname' => $uname]);
    $course_ids = $result->is_teacher ? $result->teacher_of : $result->student_of;

    $course_storage = new_storage('data_courses');
    $courses = $course_storage->findMany(function ($course) use ($course_ids) {
        return in_array($course->id, $course_ids);
    });
    return $courses;
}