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

function get_user_id_by_uname($uname){
    return storage('data_users')->findOne(['uname' => $uname])?->id; // optional chaining
}

function is_minister_by_uname($uname){
    return storage('data_users')->findOne(['uname' => $uname])?->is_minister;
}

function new_tender($tender){
    $db = storage('data_tenders');
    $exists = $db->findOne(["name" => $tender->name]);
    return $exists ? null : $db->add($tender);
}

function get_tenders(){
    return storage('data_tenders')->findAll();
}

function get_tenders_by_uname($uname){
    $tenders = storage('data_users')->findOne(['uname' => $uname])?->tenders;
    return storage('data_tenders')->findMany(function ($tender) use ($tenders) {
        return in_array($tender->id, $tenders);
    });

    /*  
    $tender_db = storage('data_tenders');
    $filtered = $tender_db->findMany(function ($tender) use ($tenders) {
        return in_array($tender->id, $tenders);
    });
    return $filtered;
    */
}

function get_tender_ids_by_uname($uname){
    return storage('data_users')->findOne(['uname' => $uname])?->tenders;
}

function get_tender_by_id($tender_id){
    return storage('data_tenders')->findById($tender_id);
}

function get_users_by_tender_id($tender_id){
    return storage('data_users')->findMany(function ($user) use ($tender_id) {
        return in_array($tender_id, $user->tenders);
    });
}

function apply_to_tender($tender_id, $user_id){
    $db_tender = storage('data_tenders');
    $db_user = storage('data_users');

    $tender = $db_tender->findById($tender_id);
    $user = $db_user->findById($user_id);
    if(
        $tender && $user &&
        $tender->minister != $user_id &&
        !in_array($tender_id, $user->tenders)
    ){
        $user->tenders[] = $tender_id;
        $db_user->update($user_id, $user);
    }
}

function unapply_from_tender($tender_id, $user_id){
    $db_tender = storage('data_tenders');
    $db_user = storage('data_users');

    $tender = $db_tender->findById($tender_id);
    $user = $db_user->findById($user_id);
    if(
        $tender && $user &&
        $tender->minister != $user_id &&
        in_array($tender_id, $user->tenders)
    ){
        $filtered = [];
        foreach($user->tenders as $tender){
            if($tender != $tender_id){
                $filtered[] = $tender;
            }
        }
        $user->tenders = $filtered;
        $db_user->update($user_id, $user);
    }
}


//// PAGES ////

function html_begin($title, $is_minister = false){ ?>
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
                <?php if($is_minister): ?>
                    <a href="page_add_tender.php">Új pályázat</a>
                <?php endif ?>
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