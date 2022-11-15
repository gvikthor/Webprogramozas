<?php
require_once 'functions.php';

//var_dump($_POST);

if(!post_all_exists([
    'uname', 'pword1', 'pword2', 'year'
])){
    redirect('index.php');
}

$form_data = (object)[
    'uname' => trim($_POST['uname']),
    'pword1' => trim($_POST['pword1']),
    'pword2' => trim($_POST['pword2']),
    'year' => trim($_POST['year'])
];


/**
 *  Checks if a user already exists in the database with the given name.
 */
function user_exists($uname){
    $users = ['ObiWan', 'MasterSkywalker66', 'GandalfTheWhite'];
    // you don't have to use map, you can do foreach
    return in_array(strtolower($uname), array_map(function ($element){
        return strtolower($element);
    }, $users));
}

$error_dict = (object)[
    'uname_exists' => 'This username already exists!',
    'uname_short' => 'The username should be atleast 5 characters long!',
    'pword_nomatch' => 'The passwords don\'t match',
    'pword_short' => 'The password should be atleast 8 characters long!',
    'year_nan' => 'The birth year should be a number!',
    'year_oob' => 'Your birth year must be between 1900 and 2010!'
];
$errors = [];

//strtolower()
//strtoupper()

if(user_exists($form_data->uname)){
    $errors[] = 'uname_exists';
}

if(strlen($form_data->uname) < 5){
    $errors[] = 'uname_short';
}

if($form_data->pword1 != $form_data->pword2){
    $errors[] = 'pword_nomatch';
}

if($form_data->pword1 < 8){
    $errors[] = 'pword_short';
}

if(!is_numeric($form_data->year)){
    $errors[] = 'year_nan';
}else if(intval($form_data->year) < 1900 || intval($form_data->year) > 2010){
    $errors[] = 'year_oob'; //out of bounds
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
        Successfully registered!
    <?php else: ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error_dict->$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>