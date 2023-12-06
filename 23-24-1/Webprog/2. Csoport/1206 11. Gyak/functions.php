<?php
require_once 'Storage.php';

function redirect($target){
    header("Location: $target");
    die;
}

function validate_credentials($uname, $pword){
    $db = storage('data_users');
    $user = $db->findOne(['uname' => $uname]);
    return password_verify($pword, $user->password);
}

function is_empty_string($value){
    return strlen($value) == 0;
}

function pull_session_var($attribute, $default){
    $result = $_SESSION[$attribute] ?? $default;
    $_SESSION[$attribute] = $default;
    return $result;
}
function login_guard($target, $attribute = 'user'){
    if(!isset($_SESSION[$attribute])){
        redirect($target);
    }
}

function logout_guard($target, $attribute = 'user'){
    if(isset($_SESSION[$attribute])){
        redirect($target);
    }
}

//// DATA ////

function storage($filename){
    return new Storage(new JsonIO("$filename.json"), false);
}

function new_user($user){
    $db = storage('data_users');
    $exists = $db->findOne([
        "uname" => $user->uname
    ]);
    /*
    if($exists){
        return null;
    }else{
        $new_user = $db->add($user);
        return $new_user;
    }
    */

    return $exists ? null : $db->add($user);
}

function get_user($id){
    return storage('data_users')->findById($id);
}

function new_tender($tender){
    $db = storage('data_tenders');
    $exists = $db->findOne(["name" => $tender->name]);
    return $exists ? null : $db->add($tender);
}

function get_tenders(){
    return storage('data_tenders')->findAll();
}


//// PAGES ////

function html_begin($title){ ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PályázIK | <?=$title?></title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <span>PályázIK</span>
            <nav>
                <a href="index.php">Pályázataim</a>
                <a href="page_tenders.php">Pályázatok</a>
                <a href="do_logout.php">Kijelentkezés</a>
            </nav>
        </header>
<?php } // html_begin

function html_end(){ ?>
    <footer>
        Developed by KözbeszerzInc.
    </footer>
    </body>
    </html>
<?php } // html_end