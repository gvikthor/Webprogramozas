<?php

/**
 * Redirects the page to the given destination and stops the script.
 * @param string $destination The destination page.
 */
function redirect($destination){
    header('Location: '.$destination);
    die;
}

/**
 * Returns whether the given POST parameter exists and contains data.
 * @param string $attribute_name Name of the POST attribute.
 */
function post_exists($attribute_name){
    return key_exists($attribute_name, $_POST) && strlen(trim($_POST[$attribute_name])) > 0;
}

/**
 * Returns the value of the given POST parameter, or if it doesn't exist, a default value.
 * @param string $attribute_name Name of the POST attribute.
 * @param string $default_name Default value if the POST attribute doesn't exist.
 */
function get_post_or_default($attribute_name, $default_value = ''){
    return $_POST[$attribute_name] ?? $default_value;
}

/**
 * Returns whether the given POST parameters exist and contain data.
 * @param array $attribute_names Names of the POST attributes.
 */
function post_all_exist($attribute_names){
    foreach($attribute_names as $attribute_name){
        if(!post_exists($attribute_name)) return false;
    }
    return true;
}

/**
 * Returns whether the given GET parameter exists and contains data.
 * @param string $attribute_name Name of the GET attribute.
 */
function get_exists($attribute_name){
    return key_exists($attribute_name, $_GET) && strlen(trim($_GET[$attribute_name])) > 0;
}

/**
 * Returns whether the given GET parameters exist and contain data.
 * @param array $attribute_names Names of the GET attributes.
 */
function get_all_exist($attribute_names){
    foreach($attribute_names as $attribute_name){
        if(!get_exists($attribute_name)) return false;
    }
    return true;
}

/**
 * Returns whether the given SESSION parameter exists and contains data.
 * @param string $attribute_name Name of the SESSION attribute.
 */
function session_exists($attribute_name){
    return key_exists($attribute_name, $_SESSION) && strlen(trim($_SESSION[$attribute_name])) > 0;
}

/**
 * Returns whether the given SESSION parameter exists and contains data and is an array.
 * @param string $attribute_name Name of the SESSION attribute.
 */
function session_array_exists($attribute_name){
    return key_exists($attribute_name, $_SESSION) && count($_SESSION[$attribute_name]) > 0;
}

/**
 * Read a JSON file's content and turn it into an Array or Object.
 * @param string $filename Name (path) of the file with extension.
 * @return (Array|Object) An array or object, depending on the file structure.
 */
function json_read($filename, $object = true){
    return json_decode(file_get_contents($filename), !$object);
}

/**
 * Writes an Array or an Object into a JSON file.
 * @param string $filename Name (path) of the file with extension.
 * @param (Array|Object) $data The data to be encoded into the file.
 */
function json_write($filename, $data){
    file_put_contents($filename, json_encode($data, JSON_PRETTY_PRINT));
}

/**
 * Get the language of the current session. Default: English.
 * @return string Possible languages:
 * - english
 * - hungarian
 */
function get_language(){
    return $_SESSION['language'] ?? 'english';
}

/**
 * Checks whether the given username only contains letters or numbers.
 * @param string $uname The username to test.
 * @return bool Answers the question: is the username acceptable?
 */
function match_username($uname){
    return preg_match('/^[a-zöüóőúéáűíäA-ZÖÜÓŐÚÉÁŰÍÄ0-9]+$/', $uname);
}

/**
 * Checks whether the given password contains all of the following:
 * - lowercase letter
 * - uppercase letter
 * - number
 * - special character (# & @ ?)
 * @param string $pword The password to test.
 * @return bool Answers the question: is the password acceptable?
 */
function match_pword($pword){
    return preg_match('/[a-zöüóőúéáűíä]/', $pword) && 
           preg_match('/[A-ZÖÜÓŐÚÉÁŰÍ]/', $pword) &&
           preg_match('/[0-9]/', $pword) &&
           preg_match('/[#&@?]/', $pword);
}   

  /////////////////////
 // User függvények //
/////////////////////

/**
 * Checks whether a given username exsits in the database already.
 * @param string $uname Username
 * @return bool Is the username taken?
 */
function user_exists($uname){
    $users = json_read('data/users.json', false);
    return in_array(
        strtolower($uname),
        array_map(
            function ($param) { return strtolower($param['uname']); },
            $users
        )
    );
}

/**
 * Returns a user with all their data from the database.
 * @param string $uname Username
 * @return Object The user
 */
function user_get($uname){
    $users = json_read('data/users.json', false);
    return $users[user_get_id($uname)];
}

/**
 * 
 */
function user_is_admin($user_id){
    $users = json_read('data/users.json');
    $user = $users->$user_id ?? (object)['admin' => false];
    return $user->admin;
}

/**
 * Returns the ID of a user.
 * @param string $uname Username
 * @return number ID of the user. Reading from the users json can be indexed with this, for example $users[user_get_id("Peter123")]
 */
function user_get_id($uname){
    $users = json_read('data/users.json', false);
    $index = array_search(
        strtolower($uname),
        array_map(
            function ($param) { return strtolower($param['uname']); },
            $users
        )
    );
    return $index;
}

/**
 * Adds a user to the database.
 * @param Object $user The user Object.
 */
function user_add($user){
    $users = json_read('data/users.json');

    $max_id = -1;
    foreach($users as $max_user){
        if($max_user->id > $max_id) $max_id = $max_user->id;
    }

    $new_id = $max_id + 1;
    $user->id = $new_id;
    $user->admin = false;
    $users->$new_id = $user;

    json_write('data/users.json', $users);

    return $new_id;
}

/**
 * Checks whether the user with the given username and password combo is correct.
 * @param string $uname Username
 * @param string $pword Unhashed password
 * @return bool Is this the password of this user?
 */
function user_password($uname, $pword){
    $user = user_get($uname);
    return password_verify($pword, $user['pword']);
}

/**
 * Checks whether anyone is logged in vurrently.
 * @return bool Is anyone logged in?
 */
function user_is_logged_in(){
    return ($_SESSION['user_id'] ?? '') != '';
}

/**
 * Logs in the current user, but only if nobody is logged in currently.
 * @param number $user_id The user ID
 */
function user_login($user_id){
    if(user_is_logged_in()) return;
    $_SESSION['user_id'] = $user_id;
}

/**
 * Logs out the user if they're logged in.
 */
function user_logout(){
    if(!user_is_logged_in()) return;
    session_unset();
    session_destroy();
}