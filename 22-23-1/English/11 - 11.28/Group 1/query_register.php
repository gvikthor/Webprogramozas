<?php
session_start();
$_SESSION['errors'] = [];

require_once 'functions.php';

$users = ['user1', 'apple', 'Anakin', 'OBIWAN'];
$valid_colors = ['red', 'blue', 'green', 'yellow'];
$valid_movies = ['sw', 'lotr', 'hp', 'nb'];
$errors = [];

// Check if everything has been filled.
if(!post_exists('uname')){
    $errors[] = 'noexist_uname';
}
if(!post_exists('password1')){
    $errors[] = 'noexist_pw1';
}
if(!post_exists('password2')){
    $errors[] = 'noexist_p2';
}
if(!post_exists('age')){
    $errors[] = 'noexist_age';
}
if(!post_exists('color')){
    $errors[] = 'noexist_clr';
}
if(count($_POST['movies'] ?? []) == 0){
    $errors[] = 'noexist_movies';
}

// Trim everything to get rid of starting and trailing spaces.
$uname = trim($_POST['uname']);
$pw1   = trim($_POST['password1']);
$pw2   = trim($_POST['password2']);
$age   = trim($_POST['age']);
$color = trim($_POST['color']);
$movies = $_POST['movies'];
$desc = $_POST['desc'] ?? '';

// Is the username atleast 5 characters long?
if(strlen($uname) < 5){
    $errors[] = 'uname_short';
}

// Does the username contain only English characters and numbers?
if(!regex_username($uname)){
    $errors[] = 'uname_complex';
}

// Is the username unique?
if(in_array(
        strtolower($uname),
        array_map(function ($param){
            return strtolower($param);
        }, $users)
)){
    $errors[] = 'uname_exists';
}

// Are the passwords the same?
if($pw1 != $pw2){
    $errors[] = 'pwd_nomatch';
}

// Is the password long enough?
if(strlen($pw1) < 8){
    $errors[] = 'pwd_short';
}

// Is the password not too long?
if(strlen($pw1) > 30){
    $errors[] = 'pwd_long';
}

// Is the password complex enoug?
if(!regex_pword($pw1)){
    $errors[] = 'pwd_complex';
}

// Does the age resemble a number?
if(!is_numeric($age)){
    $errors[] = 'age_nan';
}
// Is the age above 18 and below 200?
else if($age < 18 || $age > 200){
    $errors[] = 'age_bad';
}

if(!in_array($color, $valid_colors)){
    $errors[] = 'color_bad';
}

if(!array_every_array($movies, $valid_movies)){
    $errors[] = 'movie_bad';
}


if(count($errors) == 0){
    auth_register_user((object)[
        'uname' => $uname,
        'pword' => password_hash($pw1, PASSWORD_DEFAULT),
        'age' => intval($age),
        'color' => $color,
        'movies' => $movies,
        'desc' => $desc
    ]);
    echo('Registered!');
    /*
    <?=password_hash('apple', PASSWORD_DEFAULT)?> <br>
    <?=password_hash('apple', PASSWORD_DEFAULT)?> <br>
    <?=password_verify('Apple@123', '$2y$10$pdZkhAurYmEO5HvZxWCn8eaLFvbGoLi2J4.Udf0zaw.Y0Tp.AWKCq')?>
    */
}else{
    $_SESSION['errors'] = $errors;
    //redirect('index.php');
}