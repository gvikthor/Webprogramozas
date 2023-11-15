








<?php
/*
var_dump(is_numeric(1)); // T
var_dump(is_numeric('1')); // T
var_dump(is_numeric('1.5')); // T
var_dump(is_numeric('1,5')); // F
var_dump(is_numeric(1.5)); // T
var_dump(is_numeric('-1')); // T
var_dump(is_numeric('')); // F
var_dump(is_numeric('alma')); // F
var_dump(is_numeric('one')); // F
var_dump(is_numeric([])); // F
var_dump(is_numeric((object)[])); // F
var_dump(is_numeric(null)); // F
*/

function isEmptyString($value){
    return strlen($value) == 0;
}

$form_data = (object)[
    'name' => trim($_GET['name'] ?? ''),
    'email' => trim($_GET['email'] ?? ''),
    'age' => trim($_GET['age'] ?? ''),
    'city' => trim($_GET['city'] ?? ''),
    'degree' => trim($_GET['degree'] ?? ''),
    'languages' => $_GET['languages'] ?? [],
    'description' => trim($_GET['description'] ?? ''),
];

$errors = [];
$valid_cities = ['bud', 'deb', 'esz', 'sze', 'pec'];
$valid_degrees = ['highschool', 'bachelor', 'master', 'phd'];
$valid_languages = ['hu', 'en', 'de'];

if(isEmptyString($form_data->name)){
    $errors[] = 'The name must not be empty!';
}

if(isEmptyString($form_data->email)){
    $errors[] = 'The e-mail must not be empty!';
}else if(!filter_var($form_data->email, FILTER_VALIDATE_EMAIL)){
    $errors[] = 'The e-mail is not valid!';
}

if(isEmptyString($form_data->age)){
    $errors[] = 'The age must not be empty!';
}else if(!is_numeric($form_data->age)){
    $errors[] = 'The age must be a number!';
}else if(intval($form_data->age) != floatval($form_data->age)){
    $errors[] = 'The age must be a whole number!';
}else{
    $form_data->age = intval($form_data->age);
    /*
    nem (A és B)   =   nem A vagy nem B
    nem (A vagy B)   =   nem A és nem B
    */
    //if($form_data->age < 18 || $form_data->age > 200){
    if(!($form_data->age >= 18 && $form_data->age <= 200)){
        $errors[] = 'The age must be between 18 and 200!';
    }
}

if(isEmptyString($form_data->city)){
    $errors[] = 'The city must not be empty!';
}else if(!in_array($form_data->city, $valid_cities)){
    $errors[] = 'Unknown city!';
}

if(isEmptyString($form_data->degree)){
    $errors[] = 'The degree must not be empty!';
}else if(!in_array($form_data->degree, $valid_degrees)){
    $errors[] = 'Unknown degree level!';
}

if(count($form_data->languages) == 0){
    $errors[] = 'You must speak at least one language!';
}else{
    $unknown_languages = array_filter(
        $form_data->languages,
        function ($lang) use ($valid_languages) {
            return !in_array($lang, $valid_languages);
        }
    );
    if(count($unknown_languages) > 0){
        $errors[] = 'Unknown language!';
    }
}

if(count(explode(' ', $form_data->description)) < 5){
    $errors[] = 'You must write at least 5 words about yourself!';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if(count($errors) == 0): ?>
        😃
    <?php else: ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>