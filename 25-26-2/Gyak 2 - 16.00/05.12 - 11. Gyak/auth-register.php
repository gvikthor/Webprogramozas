<?php
session_start();
require_once 'functions.php';

$user_storage = new_storage('data/users');
/*
    <form method="POST" action="auth-register.php">
        <input name="username" placeholder="Username"> <br>
        <input name="email" placeholder="email@example.com"> <br>
        <input name="password1" type="password" placeholder="Password"> <br>
        <input name="password2" type="password" placeholder="Password"> <br>
        <input type="submit" value="Register">
    </form>
*/

$formdata = (object)[
    "username" => trim($_POST["username"] ?? ""),
    "email" => trim($_POST["email"] ?? ""),
    "password1" => trim($_POST["password1"] ?? ""), // passwordot amúgy nem biztos hogy jó trimmelni
    "password2" => trim($_POST["password2"] ?? "")
];

$errors = [];

if(strlen($formdata->username) < 4) {
    $errors[] = 'Username must be atleast 4 letters long!';
}else if(count($user_storage->findAll(["username" => $formdata->username])) > 0) {
    $errors[] = 'You must select a username that does not yet exist (this one does)!';
}

if(!filter_var($formdata->email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'E-mail must be valid e-mail format!';
}else if(count($user_storage->findAll(["email" => $formdata->email])) > 0) {
    $errors[] = 'E-mail must be unique (this one is taken)!';
}

if($formdata->password1 != $formdata->password2) {
    $errors[] = 'Passwords must excatly match eachoter!';
} else if(strlen($formdata->password1) < 4) {
    $errors[] = 'Password must be atleast 4 character long!'; // amúgy olyan minimum 12 karaktert jó elvárni
} // még jöhetne egy komplexitás ellenőrzés, de az valójában nem olyan hatékony

// ha hiba volt szoki visszadojuk sessionben a hibákat
if(count($errors) == 0) {
    $user_storage->add([
        "username" => $formdata->username,
        "email" => $formdata->email,
        "password" => password_hash($formdata->password1, PASSWORD_DEFAULT)
    ]);
    redirect('index.php');
}else{
    $_SESSION['errors'] = $errors;
    redirect('page-login-register.php');
}
