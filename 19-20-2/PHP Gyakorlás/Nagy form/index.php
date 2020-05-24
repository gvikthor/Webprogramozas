<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Epikus űrlap</title>
</head>
<body>

    <?php

        
        $etelek = ["Alma", "Körte", "Eper", "Málna", "Cseresznye", "Szilva"];
        $datumSzetszedve;
        $voltHiba = false;
        $hibak = [];
        $adat = [
            "nev" => "",
            "ido" => "",
            "kor" => -1,
            "szin" => "",
            "etel" => [],
            "lakohely" => "",
            "bemutatkozas" => ""
        ];

        if(isset($_GET["elkuldve"])){
            //Név ellenőrzése (kötelező)
            if(!isset($_GET["nev"]) || trim($_GET["nev"]) == ""){
                $voltHiba = true;
                $hibak[] = "A név megadása kötelező!";
            }else{
                $adat["nev"] = $_GET["nev"];
            }

            //Dátum ellenőrzése (kötelező, nem lehet a jövőben)
            if(!isset($_GET["ido"]) || trim($_GET["ido"]) == ""){
                $voltHiba = true;
                $hibak[] = "A születési dátum megadása kötelező!";
            }else{
                $datumSzetszedve = explode("-",$_GET["ido"]);
                if(count($datumSzetszedve) != 3){
                    $voltHiba = true;
                    $hibak[] = "A dátum formátuma nem megfelelő!";
                }else if(!is_numeric($datumSzetszedve[0]) || !is_numeric($datumSzetszedve[1]) || !is_numeric($datumSzetszedve[2])){
                    $voltHiba = true;
                    $hibak[] = "A dátum formátuma nem megfelelő!";
                }else if(
                    (intval($datumSzetszedve[0]) > intval(date('Y'))) ||
                    ($datumSzetszedve[0] == date('Y') && intval($datumSzetszedve[1]) > intval(date('m'))) ||
                    ($datumSzetszedve[0] == date('Y') && $datumSzetszedve[1] == date('m') && intval($datumSzetszedve[2]) > intval(date('d')))
                ){
                    $voltHiba = true;
                    $hibak[] = "Nem születhetsz a jövőben!";
                }else{
                    $adat["ido"] = $_GET["ido"];
                }
            }

            //Életkor ellenőrzése (kötelező, szám, nem negatív, stimmel kb a születési dátumhoz)
            if(!isset($_GET["kor"]) || trim($_GET["kor"]) == ""){
                $voltHiba = true;
                $hibak[] = "Az életkor megadása kötelező!";
            }else if(!is_numeric($_GET["kor"])){
                $voltHiba = true;
                $hibak[] = "Az életkor csak szám lehet!";
            }else if(intval($_GET["kor"]) < 0){
                $voltHiba = true;
                $hibak[] = "Az életkor nem lehet negatív!";            
            }else if(!$voltHiba){
                $ev = intval(date('Y'));
                $megadottEv = intval($datumSzetszedve[0]);

                if(intval($_GET["kor"]) > $ev-$megadottEv+1 || intval($_GET["kor"]) < $ev-$megadottEv-1){
                    $voltHiba = true;
                    $hibak[] = "Az életkor nem stimmel!";
                }else{
                    $adat["kor"] = intval($_GET["kor"]);
                }
            }else{
                $adat["kor"] = intval($_GET["kor"]);
            }

            //Kedvenc szín (kötelező, legyen a listában)
            if(!isset($_GET["szin"]) || trim($_GET["szin"]) == ""){
                $voltHiba = true;
                $hibak[] = "A kedvenc szín megadása kötelező!";
            }else if($_GET["szin"] != "piros" && $_GET["szin"] != "zold" && $_GET["szin"] != "kek" && $_GET["szin"] != "sarga"){
                $voltHiba = true;
                $hibak[] = "A kedvenc szín értéke hibás!";
            }else{
                $adat["szin"] = $_GET["szin"];
            }

            //Ételek (kötelező legalább egy, legyen a listában)
            if(!isset($_GET["etel"]) || count($_GET["etel"]) == 0){
                $voltHiba = true;
                $hibak[] = "Legalább egy étel megadása kötelező!";
            }else{
                $hibas = false;
                foreach($_GET["etel"] as $etel){
                    if(!in_array($etel, $etelek)){
                        $hibas = true;
                    }
                }
                if($hibas){
                    $voltHiba = true;
                    $hibak[] = "Az ételek nem megfelelőek!";
                }else{
                    $adat["etel"] = $_GET["etel"];
                }
            }

            //Lakóhely (kötelező, [meg lehetne csinálni ezt is listásra])
            if(!isset($_GET["lakohely"]) || trim($_GET["lakohely"]) == ""){
                $voltHiba = true;
                $hibak[] = "A lakóhely megadása kötelező!";
            }else{
                //listaellenőrzés ide jönne
                $adat["lakohely"] = $_GET["lakohely"];
            }

            //Bemutatkozás (kötelező, legalább 20 karakter)
            if(!isset($_GET["bemutatkozas"]) || trim($_GET["bemutatkozas"]) == ""){
                $voltHiba = true;
                $hibak[] = "A bemutatkozás megírása kötelező!";
            }else if(strlen($_GET["bemutatkozas"]) < 20){
                $voltHiba = true;
                $hibak[] = "A bemutatkozás legalább 20 karakter legyen!";
            }else{
                $adat["bemutatkozas"] = $_GET["bemutatkozas"];
            }
        }

    ?>

    <form>
        Név: <input name="nev" value="<?=$adat["nev"]?>"> <br>

        Születési idő: <input type="date" name="ido" value="<?=$adat["ido"]?>"> <br>

        Életkor: <input name="kor" value="<?php if($adat["kor"] != -1){ echo $adat["kor"]; }?>"> <br>

        Kedvenc szín: <br>
        <input type="radio" name="szin" value="piros"   <?php if($adat["szin"] == "piros"){ echo "checked"; } ?>> Piros <br>
        <input type="radio" name="szin" value="zold"    <?php if($adat["szin"] == "zold") { echo "checked"; } ?>> Zöld <br>
        <input type="radio" name="szin" value="kek"     <?php if($adat["szin"] == "kek")  { echo "checked"; } ?>> Kék <br>
        <input type="radio" name="szin" value="sarga"   <?php if($adat["szin"] == "sarga"){ echo "checked"; } ?>> Sárga <br>

        Kedvenc ételek: <br>
        <?php foreach($etelek as $etel): ?>
            <input type="checkbox" name="etel[]" value="<?=$etel?>" <?php if(in_array($etel,$adat["etel"])){ echo "checked"; } ?>> <?=$etel?> <br>
        <?php endforeach ?>

        Lakohely: <br>
        <select name="lakohely">
            <option value="Budapest"        <?php if($adat["lakohely"] == "Budapest"){ echo "selected"; } ?>>Budapest</option>
            <option value="Szombathely"     <?php if($adat["lakohely"] == "Szombathely"){ echo "selected"; } ?>>Szombathely</option>
            <option value="Miskolc"         <?php if($adat["lakohely"] == "Miskolc"){ echo "selected"; } ?>>Miskolc</option>
            <option value="Debrecen"        <?php if($adat["lakohely"] == "Debrecen"){ echo "selected"; } ?>>Debrecen</option>
            <option value="nagy"            <?php if($adat["lakohely"] == "nagy"){ echo "selected"; } ?>>100ezernél nagyobb nagyváros</option>
            <option value="kicsi"           <?php if($adat["lakohely"] == "kicsi"){ echo "selected"; } ?>>100ezernél kisebb város</option>
            <option value="falu"            <?php if($adat["lakohely"] == "falu"){ echo "selected"; } ?>>Falu</option>
            <option value="tanya"           <?php if($adat["lakohely"] == "tanya"){ echo "selected"; } ?>>Tanya</option>
        </select> <br>

        Bemutatkozás: <br>
        <textarea name="bemutatkozas"><?=$adat["bemutatkozas"]?></textarea> <br>

        <input type="hidden" value="" name="elkuldve">

        <input type="submit">
    </form>

    <?php if($voltHiba): ?>
        <div>
            <?php foreach($hibak as $hiba): ?>
                <?=$hiba?> <br>
            <?php endforeach ?>
        </div>
    <?php elseif(isset($_GET["elkuldve"])): ?>
        Hurrá.
    <?php endif ?>

</body>
</html>