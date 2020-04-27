<?php
/*
function felhasznaloLetezik($fnev){
    $adat = json_decode(file_get_contents("adatok.json"));
    return isset($adat->felhasznalok->$fnev);
}

function jelszoHelyes($fnev, $jszo){
    $felhasznalo = json_decode(file_get_contents("adatok.json"))->felhasznalok->$fnev;
    return password_verify($jszo, $felhasznalo->jelszo);
}

function letrehoz($fnev, $jszo){
    $adat = json_decode(file_get_contents("adatok.json"));
    $adat->felhasznalok->$fnev = (object)[
        "jelszo" => password_hash($jszo, PASSWORD_DEFAULT)
    ];
    file_put_contents("adatok.json", json_encode($adat, JSON_PRETTY_PRINT));
}*/

function kapcsolodas($cim, $uname = '', $pw = ''){
    $pdo = new PDO($cim, $uname, $pw);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function lekerdez($pdo, $sql, $param = []){
    $lekerdezes = $pdo->prepare($sql);
    $lekerdezes->execute($param);
    return $lekerdezes->fetchAll();
}

function felhasznaloLetezik($fnev){
    $kapcsolat = kapcsolodas("sqlite:userData.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "SELECT username FROM users WHERE username = :uname",
        [
            "uname" => $fnev
        ]
    );
    return count($eredmeny) != 0;
}

function jelszoHelyes($fnev, $jszo){
    $kapcsolat = kapcsolodas("sqlite:userData.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "SELECT password FROM users WHERE username = :uname",
        [
            "uname" => $fnev
        ]
    );
    return password_verify($jszo, $eredmeny[0]["password"]);
}

function letrehoz($fnev, $jszo){
    $kapcsolat = kapcsolodas("sqlite:userData.db");
    lekerdez(
        $kapcsolat,
        "INSERT INTO users (`username`,`password`) VALUES (:uname, :pw)",
        [
            "uname" => $fnev,
            "pw" => password_hash($jszo, PASSWORD_DEFAULT)
        ]
    );
}

function getLeiras($fnev){
    $kapcsolat = kapcsolodas("sqlite:userData.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "SELECT desc FROM users WHERE username = :uname",
        [
            "uname" => $fnev
        ]
    );
    return $eredmeny[0]["desc"];
}

function setLeiras($fnev, $leiras){
    $kapcsolat = kapcsolodas("sqlite:userData.db");
    lekerdez(
        $kapcsolat,
        "UPDATE users SET desc = :d WHERE username = :u",
        [
            "u" => $fnev,
            "d" => $leiras
        ]
    );
}