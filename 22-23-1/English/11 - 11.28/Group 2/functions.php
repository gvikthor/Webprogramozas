<?php

/**
 * Redirects you to a page and stops the originating script.
 * @param string $page The page you want to redirect the user to.
 */
function redirect($page){
    header('Location: ' . $page);
    die;
}

/**
 * Checks if a parameter with the given name exists with some content in the POST method.
 * @param string $parameter The parameter name you want to check.
 */
function post_exists($parameter){
    return key_exists($parameter, $_POST) && strlen(trim($_POST[$parameter])) > 0;
}

/**
 * Checks if all parameters with the given names exist with some content in the POST method.
 * @param array $parameters The parameter names you want to check.
 */
function post_all_exists($parameters){
    foreach($parameters as $parameter){
        if(!post_exists($parameter)) return false;
    }
    return true;
}

/**
 * Checks if a parameter with the given name exists with some content in the GET method.
 * @param string $parameter The parameter name you want to check.
 */
function get_exists($parameter){
    return key_exists($parameter, $_GET) && strlen(trim($_GET[$parameter])) > 0;
}

/**
 * Checks if all parameters with the given names exist with some content in the GET method.
 * @param array $parameters The parameter names you want to check.
 */
function get_all_exists($parameters){
    foreach($parameters as $parameter){
        if(!get_exists($parameter)) return false;
    }
    return true;
}

/**
 * Checks if a given string matches the username criteria of only a-z A-Z 0-Z characters.
 * @param string $uname The username to check.
 */
function regex_username($uname){
    return preg_match('/^[a-zA-Z0-9]+$/',$uname);
}

/**
 * Checks if a given string matches the password criteria of atleast one a-z and A-Z and 0-9 and (# or @) character.
 * @param string $pword The password to check.
 */
function regex_password($pword){
    return preg_match('/[a-z]/',$pword) &&
           preg_match('/[A-Z]/',$pword) &&
           preg_match('/[0-9]/',$pword) &&
           preg_match('/[#@]/',$pword);
}

/**
 * Checks if all the elements in an array are inside another array.
 * @param Array $needles The elements to check.
 * @param Array $haystack The base of the elements to check in.
 */
function array_in_array($needles, $haystack){
    foreach($needles as $needle){
        if(!in_array($needle, $haystack)) return false;
    }
    return true;
}

/**
 * Read a JSON file and converts the content to and Array or an Object.
 * @param string $filename The name of the JSON file with the extension.
 * @return (Array|Object) Depending on the content of the JSON file, an Array or an Object of the data that was inside.
 */
function json_read($filename){
    return json_decode(file_get_contents($filename));
}

/**
 * Write an Array or Object into a JSON file. It OVERWRITES the content of the file.
 * @param string $filename The name of the JSON file with the extension.
 * @param (Array|Object) $data The data to be converted to string.
 */
function json_write($filename, $data){
    file_put_contents($filename,json_encode($data, JSON_PRETTY_PRINT));
}

/**
 * Adds a user to the database with hashed password an unique ID.
 * @param Object $user The user to add.
 * @return Number The ID of the newly registered user.
 */
function auth_register_user($user){
    $users = json_read('data/users.json');
    $max = -1;
    foreach($users as $user_max){
        if($user_max->id > $max) $max = $user_max->id;
    }
    $new_id = $max + 1;
    $user->id = $new_id;
    $user->pword = password_hash($user->pword1, PASSWORD_DEFAULT);
    $user->pword1 = $user->pword2 = '';
    $users->$new_id = $user;
    json_write('data/users.json', $users);

    return $new_id;
}

/**
 * Tells whether the user a user is already logged in or not using a session.
 * @return bool Is anyone logged in?
 */
function auth_is_logged_in(){
    $user = $_SESSION['user'] ?? '';
    return trim($user) != '';
}
