<?php

//var_dump($_POST);
$users = ['user1', 'apple', 'Anakin', 'OBIWAN'];
$errors = [];
$error_dict = (object)[
    'uname_short' => 'The username should be atleast 5 characters long.',
    'uname_exists' => 'Username is already in use!',
    'pwd_nomatch' => 'The passwords are not matching!',
    'pwd_short' => 'The password should be atleast 8 characters long!',
    'pwd_long' => 'The password should be atmost 30 characters long!',
    'age_bad' => 'Your age should be between 18 and 200!'
];

// Trim everything to get rid of starting and trailing spaces.
$uname = trim($_POST['uname']);
$pw1   = trim($_POST['password1']);
$pw2   = trim($_POST['password2']);
$age   = intval(trim($_POST['age'])); //floatval()

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

// Is the age above 18 and below 200?
if($age < 18 || $age > 200){
    $errors[] = 'age_bad';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if(count($errors) == 0): ?>
        ✅ Registered!
    <?php else: ?>
        <ul>
        <?php foreach($errors as $error): ?>
            <li><?=$error_dict->$error?></li>
        <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>