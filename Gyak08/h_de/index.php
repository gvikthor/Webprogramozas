<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Esküvő</title>
    <link rel="stylesheet" type="text/css" href="eskuvo.css">
</head>
<body>

    <?php if($_SERVER["REQUEST_METHOD"] != "POST"): ?>
        <form id="urlap" method="post">
            <h1>Esküvői szolgáltatás igénylő dolog</h1>
            <label>Név</label><br>
            <input type="text" name="nev" id="nev">
            
            <br><br>

            <label>Életkor</label><br>
            <input type="text" name="kor" id="kor">
            
            <br><br>

            <label>Nem</label><br>
            <input type="radio" name="nem" value="ffi">Férfi<br>
            <input type="radio" name="nem" value="no">Nő
            
            <br><br>
            
            <div id="leanykor">
            </div>
            <!--
                <label>Leánykori név</label><br>
                <input type="text" id="l_nev">
            -->

            <br><br>

            <label>Város</label><br>
            <select id="varos" name="varos">
                <option value="">Kérlek, válassz...</option>
                <option value="budapest">Budapest</option>
                <option value="debrecen">Debrecen</option>
                <option value="szeged">Szeged</option>
            </select>
            
            <br><br>

            <label>Hány helyszínt néztetek már ki?</label><br>
            <input type="radio" name="helyszin" value="1">1<br>
            <input type="radio" name="helyszin" value="2">2<br>

            <div id="helyszin_inputok">
            </div>
            <!--
            <input type="text" id="helyszin_0"><br>
            <input type="text" id="helyszin_1"><br>
            -->
            
            <br><br>

            <label>Egyéb megjegyzés</label><br>
            <textarea id="egyeb" name="egyeb"></textarea>

            <br><br>

            Kérd az ajánlatot!
            <input type="submit" id="kuldes">
            
            <div id="hibak"></div>
        </form>
    <?php else: ?>
        
        <?php

            $hibak = [];
            $ertekek = [];
            function selected($param){
                if($ertekek["varos"] == $param){
                    return "selected";
                }else{
                    return "";
                }
            }

            if(isset($_POST["nev"]) && trim($_POST["nev"]) != ""){
                $ertekek["nev"] = htmlspecialchars($_POST["nev"]);
            }else{
                $hibak["nev"] = "A név megadása kötelező!";
            }

            if(isset($_POST["kor"]) && trim($_POST["kor"]) != ""){
                $ertekek["kor"] = htmlspecialchars($_POST["kor"]);
            }else{
                $hibak["kor"] = "A kor megadása kötelező!";
            }

            if(isset($_POST["nem"])){
                $ertekek["nem"] = $_POST["nem"];
                if($_POST["nem"] == "no" && isset($_POST["l_nev"]) && trim($_POST["l_nev"]) != ""){
                    $ertekek["l_nev"] = htmlspecialchars($_POST["l_nev"]);
                }else{
                    $hibak["l_nev"] = "A leánykori név megadása kötelező";
                }
            }else{
                $hibak["nem"] = "A nem megadása kötelező!";
            }

            if(isset($_POST["kor"]) && $_POST["kor"] != ""){
                $ertekek["varos"] = $_POST["varos"];
            }else{
                $hibak["varos"] = "A város megadása kötelező!";
            }

            if(isset($_POST["helyszin"])){
                $ertekek["helyszin"] = $_POST["helyszin"];
                if(isset($_POST["helyszin_0"]) && trim($_POST["helyszin_0"]) != ""){
                    $ertekek["helyszin_0"] = htmlspecialchars($_POST["helyszin_0"]);
                    if($_POST["helyszin"] == "2" && isset($_POST["helyszin_1"]) && trim($_POST["helyszin_1"]) != ""){
                        $ertekek["helyszin_1"] = htmlspecialchars($_POST["helyszin_1"]);
                    }else{
                        $hibak["helyszin_1"] = "helyszin_1";
                    }
                }else{
                    $hibak["helyszin_0"] = "helyszin_0";
                }
            }else{
                $hibak["helyszin"] = "helyszin";
            }

            if(isset($_POST["egyeb"])){
                $ertekek["egyeb"] = htmlspecialchars($_POST["egyeb"]);
            }

            /*var_dump($ertekek);
            var_dump($hibak);*/
        ?>


        <?php if(count($hibak) == 0): ?>
            <ul>
                <li>Név: <?=$ertekek["nev"]?></li>
                <li>Kor: <?=$ertekek["kor"]?></li>
                <li>Nem: <?=$ertekek["nem"]?></li>
                <?php if($ertekek["nem"] == "no"): ?>
                <li>Leánykori név: <?=$ertekek["l_nev"]?></li>
                <?php endif ?>
                <li>Város: <?=$ertekek["varos"]?>
                <li>Helyszínek: <?=$ertekek["helyszin_0"]?>
                <?php if($ertekek["helyszin"] == "2"): ?>
                , <?=$ertekek["helyszin_1"]?>
                <?PHP endif ?></li>
                <li>Egyéb megjegyzés: <?=$ertekek["egyeb"]?></li>
            </ul>
        <?php else: ?>
        <form id="urlap" method="post">
            <h1>Esküvői szolgáltatás igénylő dolog</h1>
            <label>Név</label><br>
            <?php if(isset($hibak["nev"])): ?>
                <input type="text" name="nev" id="nev">
                <?=$hibak["nev"]?>
            <?php else: ?>
                <input type="text" name="nev" id="nev" value=<?=htmlspecialchars($ertekek["nev"])?>>
            <?php endif ?>

            
            <br><br>

            <label>Életkor</label><br>
            <?php if(isset($hibak["kor"])): ?>
                <input type="text" name="kor" id="kor">
                <?=$hibak["kor"]?>
            <?php else: ?>
                <input type="text" name="kor" id="kor" value=<?=htmlspecialchars($ertekek["kor"])?>>
            <?php endif ?>
            <br><br>

            <label>Nem</label><br>
            <?php if(isset($hibak["nem"])): ?>
                <input type="radio" name="nem" value="ffi">Férfi<br>
                <input type="radio" name="nem" value="no">Nő
                <?=$hibak["nem"]?>
            <?php else: ?>
                <?php if($ertekek["nem"] == "ffi"): ?>
                    <input type="radio" name="nem" value="ffi" checked>Férfi<br>
                    <input type="radio" name="nem" value="no">Nő
                <?php else: ?>
                    <input type="radio" name="nem" value="ffi">Férfi<br>
                    <input type="radio" name="nem" value="no" checked>Nő
                    <?php if(isset($hibak["l_nev"])): ?>
                        <div id="leanykor">
                            <label>Leánykori név</label><br>
                            <input type="text" id="l_nev">  
                            <?=$hibak["l_nev"]?>
                        </div>
                    <?php else: ?>
                        <div id="leanykor">
                            <label>Leánykori név</label><br>
                            <input type="text" id="l_nev" value=<?=htmlspecialchars($ertekek["l_nev"])?>>  
                        </div>
                    <?php endif ?>
                <?php endif ?>
            <?php endif ?>
            
            <br><br>

            <br><br>

            <?php if(isset($hibak["varos"])): ?>
                <label>Város</label><br>
                <select id="varos" name="varos">
                    <option value="">Kérlek, válassz...</option>
                    <option value="budapest">Budapest</option>
                    <option value="debrecen">Debrecen</option>
                    <option value="szeged">Szeged</option>
                </select>
                <?=$hibak["varos"]?>
            <?php else: ?>
            <label>Város</label><br>
                    <select id="varos" name="varos">
                        <option value="">Kérlek, válassz...</option>
                        <option value="budapest" <?=selected("budapest")?>>Budapest</option>
                        <option value="debrecen" <?=selected("debrecen")?>>Debrecen</option>
                        <option value="szeged"   <?=selected("szeged")?>  >Szeged  </option>
                    </select>
            <?php endif ?>
            
            <br><br>

            <label>Hány helyszínt néztetek már ki?</label><br>
            <?php if(isset($hibak["helyszin"])): ?>
                <input type="radio" name="helyszin" value="1">1<br>
                <input type="radio" name="helyszin" value="2">2<br>
                <?=$hibak["helyszin"]?>
            <?php else: ?>
                <?php if($ertekek["helyszin"] == 1): ?>
                    <input type="radio" name="helyszin" value="1" checked>1<br>
                    <input type="radio" name="helyszin" value="2">2<br>
                    <?php if(isset($hibak["helyszin_0"])): ?>
                        <div id="helyszin_inputok">
                            <input type="text" id="helyszin_0"><br>
                            <?=$hibak["helyszin_0"]?>
                        </div>
                    <?php else: ?>
                        <div id="helyszin_inputok">
                            <input type="text" id="helyszin_0" value=<?=$ertekek["helyszin_0"]?>><br>
                        </div>
                    <?php endif ?>
                <?php else: ?>
                    <input type="radio" name="helyszin" value="1">1<br>
                    <input type="radio" name="helyszin" value="2" checked>2<br>
                        <?php if(isset($hibak["helyszin_0"]) || isset($hibak["helyszin_1"])): ?>
                            <div id="helyszin_inputok">
                                <input type="text" id="helyszin_0"><br>
                                <input type="text" id="helyszin_1">
                                <?=$hibak["helyszin_0"]?>
                            </div>
                        <?php else: ?>
                            <div id="helyszin_inputok">
                                <input type="text" id="helyszin_0" value=<?=$ertekek["helyszin_0"]?>><br>
                                <input type="text" id="helyszin_1" value=<?=$ertekek["helyszin_1"]?>>
                            </div>
                        <?php endif ?>
                <?php endif ?>
            <?php endif ?>
            
            <br><br>

            <label>Egyéb megjegyzés</label><br>
            <textarea id="egyeb" name="egyeb" value=<?=htmlspecialchars($ertekek["egyeb"])?>></textarea>

            <br><br>

            Kérd az ajánlatot!
            <input type="submit" id="kuldes">
        </form>
        <?php endif ?>

    <?php endif ?>

    <script src="eskuvo.js"></script>
</body>
</html>