<?php

//var_dump($_POST);

function trim_post_value_or_default($post_key, $default = '') {
    return trim(post_value_or_default($post_key, $default));
}

function post_value_or_default($post_key, $default = '') {
    return $_POST[$post_key] ?? $default;
}

function validate_password_strength($password){
    return strlen($password) > 8 &&
    preg_match('/[a-záéíóöőúüűä]/', $password) &&
    preg_match('/[A-ZÁÉÍÓÖŐÚÜŰÄ]/', $password) &&
    preg_match('/[0-9]/', $password) &&
    preg_match('/[^\w]/', $password);
}

$form_object = (object)[
    'firstname' => trim_post_value_or_default('firstname'),
    'lastname' => trim_post_value_or_default('lastname'),
    'email' => trim($_POST['email'] ?? ''),
    'email2' => trim($_POST['email2'] ?? ''),
    'password' => trim($_POST['password'] ?? ''),
    'password2' => trim($_POST['password2'] ?? ''),
    'age' => trim_post_value_or_default('age'),
    'gender' => trim_post_value_or_default('gender'),
    'city' => trim_post_value_or_default('city'),
    'foods' => array_map(function ($value) {
        return trim($value);
    }, post_value_or_default('foods', [])),
    'terms' => trim_post_value_or_default('terms'),
];
// ez lehetne egy array_map

$errors = [];
if($form_object->firstname == '') {
    $errors[] = 'Firstname is required';
}

if($form_object->lastname == '') {
    $errors[] = 'Lastname is required';
}

if($form_object->email == '') {
    $errors[] = 'Email is required';
} else if( !filter_var($form_object->email, FILTER_VALIDATE_EMAIL) ) {
    $errors[] = 'Email is not valid';
} else if($form_object->email != $form_object->email2) {
    $errors[] = 'Emails do not match';
}

if($form_object->password == '') {
    $errors[] = 'Password is required';
} else if($form_object->password != $form_object->password2) {
    $errors[] = 'Passwords do not match';
} else if(!validate_password_strength($form_object->password)){
    $errors[] = 'Password is too weak';
}

if($form_object->age == '') {
    $errors[] = 'Age is required';
} else if( !is_numeric($form_object->age) ) {
    $errors[] = 'Age must be a number';
} else if(floatval($form_object->age) < 18) { // intval()
    $errors[] = 'You must be at least 18 years old';
}

if($form_object->gender == ''){
    $errors[] = 'Gender is required';
}else if(!in_array($form_object->gender, ['female', 'male', 'other'])){
    $errors[] = 'Invalid gender value';
}

if($form_object->city == ''){
    $errors[] = 'City is required';
}else if(!in_array($form_object->city, ['BUD', 'DEB', 'SZE', 'MIS', 'OTH'])){
    $errors[] = 'Invalid city value';
}

$every_food_was_valid = true;
foreach($form_object->foods as $food){
    if(!in_array($food, ['goulash', 'paprikas', 'toltottkaposzta', 'halaszle'])){
        $every_food_was_valid = false;
        break;
    }
}

if(count($form_object->foods) == 0){
    $errors[] = 'At least one food must be selected';
}else if(!$every_food_was_valid){
    $errors[] = 'A food value was invalid';
}

if($form_object->terms == ''){
    $errors[] = 'Terms is required';
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
    <h1>Registration</h1>
    <?php if(count($errors) > 0): ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?= $error ?></li>
            <?php endforeach ?>
        </ul>
    <?php else: ?>
        <div>Thank you for registering!</div>
        Your name: <?=htmlspecialchars($form_object->firstname)?>
    <?php endif ?>
</body>
</html>