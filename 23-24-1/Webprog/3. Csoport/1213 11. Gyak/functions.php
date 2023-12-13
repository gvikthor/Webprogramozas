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

function get_userid_by_username($uname){
    $user_storage = new_storage('data_users');
    $user = $user_storage->findOne(['uname' => $uname]);
    return $user->id;
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

function is_on_course($course_id, $student_id){
    $course_storage = new_storage('data_courses');
    $user_storage   = new_storage('data_users');

    $course = $course_storage->findOne(['id' => $course_id]);
    $student = $user_storage->findOne(['id' => $student_id]);

    return ($course && $student && in_array($student_id, $course->students));
}

function apply_to_course($course_id, $student_id){
    $course_storage = new_storage('data_courses');
    $user_storage   = new_storage('data_users');

    $course = $course_storage->findOne(['id' => $course_id]);
    $student = $user_storage->findOne(['id' => $student_id]);

    if($course && $student && count($course->students) < $course->max_stud && !in_array($student_id, $course->students)){
        $course->students[] = $student_id;
        $student->student_of[] = $course_id;

        $course_storage->update($course_id, $course);
        $user_storage->update($student_id, $student);
    }
}

function deapply_from_course($course_id, $student_id){
    $course_storage = new_storage('data_courses');
    $user_storage   = new_storage('data_users');

    $course = $course_storage->findOne(['id' => $course_id]);
    $student = $user_storage->findOne(['id' => $student_id]);

    if($course && $student && in_array($student_id, $course->students)){
        $filtered = [];
        foreach($course->students as $stud_id){
            if($stud_id != $student_id){
                $filtered[] = $stud_id;
            }
        }
        $course->students = $filtered;

        $filtered = [];
        foreach($student->student_of as $cour_id){
            if($cour_id != $course_id){
                $filtered[] = $cour_id;
            }
        }
        $student->student_of = $filtered;

        $course_storage->update($course_id, $course);
        $user_storage->update($student_id, $student);
    }
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

function get_all_courses(){
    return new_storage('data_courses')->findAll();
}

function decrease_limit($course_id, $teacher_id){
    $course_storage = new_storage('data_courses');
    $course = $course_storage->findById($course_id);
    if($course && $course->teacher == $teacher_id && count($course->students) < $course->max_stud){
        $course->max_stud--;
        $course_storage->update($course_id, $course);
    }
}

function increase_limit($course_id, $teacher_id){
    $course_storage = new_storage('data_courses');
    $course = $course_storage->findById($course_id);
    if($course && $course->teacher == $teacher_id){
        $course->max_stud++;
        $course_storage->update($course_id, $course);
    }
}