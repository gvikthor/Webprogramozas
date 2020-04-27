<?php
/*
function felhasznaloLetezik($fnev){
    $adat = json_decode(file_get_contents("felhasznalok.json"));
    return isset($adat->felhasznalok->$fnev);
}

function jelszoEgyezik($fnev, $jszo){
    $adat = json_decode(file_get_contents("felhasznalok.json"))->felhasznalok->$fnev;
    return password_verify($jszo, $adat->jelszo);
}

function regisztral($fnev, $jszo){
    $adat = json_decode(file_get_contents("felhasznalok.json"));
    $adat->felhasznalok->$fnev = (object)[
        "jelszo" => password_hash($jszo, PASSWORD_DEFAULT)
    ];
    file_put_contents("felhasznalok.json",json_encode($adat,JSON_PRETTY_PRINT));
}*/

function kapcsolodas($cel, $uname = '', $password = ''){
    $pdo = new PDO($cel, $uname, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}
function lekerdez($pdo, $sql, $param = []){
    $lekerdezes = $pdo->prepare($sql);
    $lekerdezes->execute($param);
    return $lekerdezes->fetchAll();
}

function felhasznaloLetezik($fnev){
    $kapcsolat = kapcsolodas("sqlite:users.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "SELECT * FROM users WHERE uname = :uname",
        [
            "uname" => $fnev
        ]
    );
    return count($eredmeny) != 0;
}

function jelszoEgyezik($fnev, $jszo){
    $kapcsolat = kapcsolodas("sqlite:users.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "SELECT password FROM users WHERE uname = :uname",
        [
            "uname" => $fnev
        ]
    );
    return password_verify($jszo, $eredmeny[0]["password"]);
}

function regisztral($fnev, $jszo){
    $kapcsolat = kapcsolodas("sqlite:users.db");
    lekerdez(
        $kapcsolat,
        "INSERT INTO users (`uname`, `password`) VALUES (:nev, :jszo)",
        [
            "nev" => $fnev,
            "jszo" => password_hash($jszo, PASSWORD_DEFAULT)
        ]
    );
}

function getLeiras($fnev){
    $kapcsolat = kapcsolodas("sqlite:users.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "SELECT desc FROM users WHERE uname = :uname",
        [
            "uname" => $fnev
        ]
    );
    return $eredmeny[0]["desc"];
}

function setLeiras($fnev, $leiras){
    $kapcsolat = kapcsolodas("sqlite:users.db");
    lekerdez(
        $kapcsolat,
        "UPDATE users SET desc = :desc WHERE uname = :uname",
        [
            "uname" => $fnev,
            "desc" => $leiras
        ]
    );
}