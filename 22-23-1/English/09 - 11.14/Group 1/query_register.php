<?php

//var_dump($_GET);

$users = ['user1', 'apple', 'Anakin', 'OBIWAN'];
$valid_colors = ['red', 'blue', 'green', 'yellow'];
$errors = [];
$error_dict = (object)[
    'uname_short' => 'The username should be atleast 5 characters long.',
    'uname_exists' => 'Username is already in use!',
    'pwd_nomatch' => 'The passwords are not matching!',
    'pwd_short' => 'The password should be atleast 8 characters long!',
    'pwd_long' => 'The password should be atmost 30 characters long!',
    'age_nan' => 'The age is not a number!',
    'age_bad' => 'Your age should be between 18 and 200!',
    'color_bar' => 'The color is invalid!'
];

if(!post_array_exists([
    'uname', 'password1', 'password2', 'age', 'color'
])){
    redirect('index.php');
}

// Trim everything to get rid of starting and trailing spaces.
$uname = trim($_POST['uname']);
$pw1   = trim($_POST['password1']);
$pw2   = trim($_POST['password2']);
$age   = trim($_POST['age']);
$color = trim($_POST['color']);

// Is the username atleast 5 characters long?
if(strlen($uname) < 5){
    $errors[] = 'uname_short';
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