<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Esküvő - de most php-vel</title>
    <link rel="stylesheet" type="text/css" href="eskuvo.css">
</head>
<body>
    <?php
        function ß($input_string){
            return htmlspecialchars($input_string);
        }
        function selected($varos){
            if($varos == $_POST["varos"]){
                return "selected";
            }else{
                return "";
            }
        }

        $hiba = false;
    ?>

<!-- 1 HA : request method post -->
    <?php if($_SERVER["REQUEST_METHOD"] != "POST"): ?>

        <form action="index.php" method="post" id="urlap">
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

            <br><br>

            <label>Város</label><br>
            <select name="varos" id="varos">
                <option value="">Kérlek, válassz...</option>
                <option value="budapest">Budapest</option>
                <option value="debrecen">Debrecen</option>
                <option value="szeged">Szeged</option>
                <option value="miskolc">Miskolc</option>
                <option value="pecs">Pécs</option>
                <option value="gyor">Győr</option>
                <option value="nyiregyhaza">Nyíregyháza</option>
                <option value="kecskemet">Kecskemét</option>
                <option value="szekesfehervar">Székesfehérvár</option>
                <option value="kevesebb100k">Egyéb - kevesebb, mint 100.000 lakos</option>
                <option value="kevesebb10k">Egyéb - kevesebb, mint 10.000 lakos</option>
            </select>
            
            <br><br>

            <label>Hány helyszínt néztetek már ki?</label><br>
            <input type="radio" name="helyszin" value="0">Még nincs helyszínünk<br>
            <input type="radio" name="helyszin" value="1">1<br>

            <div id="helyszin_inputok">
            </div>
            
            <br><br>

            <label>Egyéb megjegyzés</label><br>
            <textarea name="egyeb" id="egyeb"></textarea>

            <br><br>

            Kérd az ajánlatot!
            <input type="submit" id="kuldes">
            
            <div id="hibak"></div>
        </form>

<!-- 1 EGYÉBKÉNT : request method post -->
    <?php else: ?>
        <form action="index.php" method="post" id="urlap">
            <h1>Esküvői szolgáltatás igénylő dolog</h1>

            <label>Név</label><br>
 <!-- 1/A HA : nev -->
            <?php if(trim($_POST["nev"]) != ""): ?>
                <input type="text" name="nev" id="nev" value=<?=ß($_POST["nev"])?>>
 <!-- 1/A EGYÉBKÉNT : nev -->
            <?php else: ?>
                <input type="text" name="nev" id="nev" class="error"> <br>
                <p class="error_message">A név megadása kötelező!</p>
                <?php $hiba = true; ?>
            <?php endif ?>
 <!-- 1/A VÉGE : nev -->

            <br><br>

            <label>Életkor</label><br>
 <!-- 1/B HA : kor -->
            <?php if(trim($_POST["kor"]) != ""): ?>
                <input type="text" name="kor" id="kor" value=<?=ß($_POST["kor"])?>>
 <!-- 1/B EGYÉBKÉNT : kor -->
            <?php else: ?>
                <input type="text" name="kor" id="kor" class="error"> <br>
                <p class="error_message">Az életkor megadása kötelező!</p>
                <?php $hiba = true; ?>
            <?php endif ?>
 <!-- 1/B VÉGE : kor -->
            
            
            <br><br>

            <label>Nem</label><br>
 <!-- 1/C HA : isset nem -->
            <?php if(isset($_POST["nem"])):?>
  <!-- 1/C/i HA : nem -->
                <?php if($_POST["nem"] == "ffi"): ?>
                    <input type="radio" name="nem" value="ffi" checked>Férfi<br>
                    <input type="radio" name="nem" value="no">Nő
  <!-- 1/C/i EGYÉBKÉNT : nem -->
                <?php else: ?>
                    <input type="radio" name="nem" value="ffi">Férfi<br>
                    <input type="radio" name="nem" value="no" checked>Nő
   <!-- 1/C/i/a HA : leánykor -->
                    <?php if(trim($_POST["l_nev"]) != ""): ?>
                        <div id="leanykor">
                            <label>Leánykori név</label><br>
                            <input type="text" name="l_nev" id="l_nev" value=<?=ß($_POST["l_nev"])?>>
                        </div>
   <!-- 1/C/i/a EGYÉBKÉNT : leánykor -->
                    <?php else: ?>
                        <div id="leanykor">
                            <label>Leánykori név</label><br>
                            <input type="text" name="l_nev" id="l_nev" class="error">
                            <p class="error_message">A leánykori név megadása kötelező!</p>
                            <?php $hiba = true; ?>
                        </div>
                    <?php endif ?>
   <!-- 1/C/i/a VÉGE : leánykor -->
                <?php endif ?>
  <!-- 1/C/i VÉGE : nem -->
 <!-- 1/C EGYÉBKÉNT : isset nem -->
            <?php else: ?>
                <input type="radio" name="nem" value="ffi">Férfi<br>
                <input type="radio" name="nem" value="no">Nő <br>
                <p class="error_message">A nem megadása kötelező!</p>
                <?php $hiba = true; ?>
            <?php endif ?>
 <!-- 1/C VÉGE : isset nem -->
            
            <br><br>
            <br><br>

            <label>Város</label><br>
 <!-- 1/D HA : város -->
            <?php if($_POST["varos"] != ""): ?>
                <select name="varos" id="varos">
                    <option value="">Kérlek, válassz...</option>
                    <option value="budapest"        <?=selected("budapest")?>       >Budapest</option>
                    <option value="debrecen"        <?=selected("debrecen")?>       >Debrecen</option>
                    <option value="szeged"          <?=selected("szeged")?>         >Szeged</option>
                    <option value="miskolc"         <?=selected("miskolc")?>        >Miskolc</option>
                    <option value="pecs"            <?=selected("pecs")?>           >Pécs</option>
                    <option value="gyor"            <?=selected("gyor")?>           >Győr</option>
                    <option value="nyiregyhaza"     <?=selected("nyiregyhaza")?>    >Nyíregyháza</option>
                    <option value="kecskemet"       <?=selected("kecskemet")?>      >Kecskemét</option>
                    <option value="szekesfehervar"  <?=selected("szekesfehervar")?> >Székesfehérvár</option>
                    <option value="kevesebb100k"    <?=selected("kevesebb100k")?>   >Egyéb - kevesebb, mint 100.000 lakos</option>
                    <option value="kevesebb10k"     <?=selected("kevesebb10k")?>    >Egyéb - kevesebb, mint 10.000 lakos</option>
                </select>
 <!-- 1/D EGYÉBKÉNT : város -->
            <?php else: ?>
                <select name="varos" id="varos" class="error">
                    <option value=""              >Kérlek, válassz...</option>
                    <option value="budapest"      >Budapest</option>
                    <option value="debrecen"      >Debrecen</option>
                    <option value="szeged"        >Szeged</option>
                    <option value="miskolc"       >Miskolc</option>
                    <option value="pecs"          >Pécs</option>
                    <option value="gyor"          >Győr</option>
                    <option value="nyiregyhaza"   >Nyíregyháza</option>
                    <option value="kecskemet"     >Kecskemét</option>
                    <option value="szekesfehervar">Székesfehérvár</option>
                    <option value="kevesebb100k"  >Egyéb - kevesebb, mint 100.000 lakos</option>
                    <option value="kevesebb10k"   >Egyéb - kevesebb, mint 10.000 lakos</option>
                </select>
                <p class="error_message">A város megadása kötelező!</p>
                <?php $hiba = true; ?>
            <?php endif ?>
 <!-- 1/D VÉGE : város -->
            
            
            <br><br>

            <label>Hány helyszínt néztetek már ki?</label><br>

 <!-- 1/E HA : helyszínek száma -->
            <?php if(isset($_POST["helyszin"])): ?>

  <!-- 1/E/i HA : helyszinszam -->
                <?php if($_POST["helyszin"] == "0"): ?>
                    <input type="radio" name="helyszin" value="0" checked>Még nincs helyszínünk<br>
                    <input type="radio" name="helyszin" value="1">1<br>
                    <div id="helyszin_inputok">
                    </div>

  <!-- 1/E/i EGYÉBKÉNT HA : helyszinszam -->
                <?php elseif($_POST["helyszin"] == "1"): ?>
                    <input type="radio" name="helyszin" value="0">Még nincs helyszínünk<br>
                    <input type="radio" name="helyszin" value="1" checked>1<br>

   <!-- 1/E/i/a HA : üres helyszín -->
                    <?php if(trim($_POST["helyszin_0"]) != ""): ?>
                        <div id="helyszin_inputok">
                        1. helyszín: <input type="text" name="helyszin_0" id="helyszin_0" value=<?=ß($_POST["helyszin_0"])?>><br>
                        </div>
   <!-- 1/E/i/a EGYÉBKÉNT : üres helyszín -->
                    <?php else: ?>
                        <div id="helyszin_inputok">
                        1. helyszín: <input type="text" name="helyszin_0" id="helyszin_0"><br>
                        </div>
                        <p class="error_message">A helyszín megadása kötelező!</p>
                        <?php $hiba = true; ?>
                    <?php endif ?>
   <!-- 1/E/i/a VÉGE : üres helyszín -->

                <?php endif ?>
  <!-- 1/E/i VÉGE : helyszinszam -->

 <!-- 1/E EGYÉBKÉNT : helyszínek száma -->
            <?php else: ?>
                <input type="radio" name="helyszin" value="0">Még nincs helyszínünk<br>
                <input type="radio" name="helyszin" value="1">1<br>
                <div id="helyszin_inputok">
                </div>
                <p class="error_message">A helyszínek számának megadása kötelező!</p>
                <?php $hiba = true; ?>
            <?php endif ?>
 <!-- 1/E VÉGE : helyszínek száma -->
 
            <br><br>

            <label>Egyéb megjegyzés</label><br>
            <textarea name="egyeb" id="egyeb"></textarea>

            <br><br>

            Kérd az ajánlatot!
            <input type="submit" id="kuldes">
        </form>

        <?php if(!$hiba): ?>
            Sikeres adatbevitel:
            <ul>
                <li>
                    Név: <?=ß($_POST["nev"])?>
                </li>
                <li>
                    Kor: <?=ß($_POST["kor"])?>
                </li>
                <li>
                    Nem: <?=ß($_POST["nem"])?>
                </li>
                <?php if(isset($_POST["l_nev"])): ?> 
                <li>
                    Leánykori név: <?=ß($_POST["l_nev"])?>
                </li>
                <?php endif ?>
                <li>
                    Város: <?=ß($_POST["varos"])?>
                </li>
                <?php if(isset($_POST["helyszin_0"])): ?> 
                <li>
                    Leánykori név: <?=ß($_POST["helyszin_0"])?>
                </li>
                <?php endif ?>
                <?php if(isset($_POST["egyeb"])): ?> 
                <li>
                    Egyéb: <?=ß($_POST["egyeb"])?>
                </li>
                <?php endif ?>

            </ul>
        <?php endif ?>

    <?php endif ?>
<!-- 1 VÉGE : request method post -->
     
    

    <script src="urlap.js"></script>
</body>
</html>