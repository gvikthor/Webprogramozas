<body>
    <?php
        $voltHiba = false;
        $hibaString = "";

        $etelNeve = "";
        function melegitesKivalsztva($meleg){
            if(isset($_POST["meleg"]) && $_POST["meleg"] == $meleg){
                return "checked";
            }else{
                return "";
            }
        }

        function fuszerKivalasztva($fuszer){
            if(isset($_POST["fuszer"]) && $_POST["fuszer"] == $fuszer){
                return "selected";
            }else{
                return "";
            }
        }

        function egyebKivalsztva($egyeb){
            if(isset($_POST["egyeb"]) && in_array($egyeb,$_POST["egyeb"])){
                return "checked";
            }else{
                return "";
            }
        }

        if($_SERVER["REQUEST_METHOD"] == "POST"){
            if(!isset($_POST["etelNeve"]) || trim($_POST["etelNeve"]) == ""){
                $voltHiba = true;
                $hibaString .= "Az ételnév megadása kötelező!<br>";
            }else{
                $etelNeve = $_POST["etelNeve"];
            }

            if(!isset($_POST["meleg"]) || trim($_POST["meleg"]) == ""){
                $voltHiba = true;
                $hibaString .= "Az étel melegítésének ténye kötelezően megadandó!<br>";
            }

            if(!isset($_POST["fuszer"]) || trim($_POST["fuszer"]) == ""){
                $voltHiba = true;
                $hibaString .= "A fűszer megadása kötelező!<br>";
            }

            if(!isset($_POST["egyeb"]) || count($_POST["egyeb"]) == 0){
                $voltHiba = true;
                $hibaString .= "Legalább egy egyéb megadása kötelező!<br>";
            }
        }
    ?>

    <form method="post">
    
        Étel neve: <input name="etelNeve" value="<?=$etelNeve?>"> <br>
        Melegítve?<br>
        <input type="radio" name="meleg" value="igen" <?=melegitesKivalsztva("igen")?>> Igen <br>
        <input type="radio" name="meleg" value="nem"  <?=melegitesKivalsztva("nem")?> > Nem <br>
        Fűszerek<br>
        <select name="fuszer">
            <option value="oregano"    <?=fuszerKivalasztva("oregano")?>   >Oregánó</option>
            <option value="majoranna"  <?=fuszerKivalasztva("majoranna")?> >Majoranna</option>
            <option value="bazsalikom" <?=fuszerKivalasztva("bazsalikom")?>>Bazsalikom</option>
            <option value="bors"Bors   <?=fuszerKivalasztva("bors")?>      >Bors</option>
        </select><br>
        Egyéb infók<br>
        <input type="checkbox" name="egyeb[]" value="alma"      <?=egyebKivalsztva("alma")?>  > Alma <br>
        <input type="checkbox" name="egyeb[]" value="korte"     <?=egyebKivalsztva("korte")?> > Körte <br>
        <input type="checkbox" name="egyeb[]" value="szilva"    <?=egyebKivalsztva("szilva")?>> Szilva <br>
        Egyéb<br>
        <textarea></textarea><br>
        <input type="submit">
    </form>

    <?php
    if($voltHiba){
        echo $hibaString;
    }else{
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            echo "Sikeres adatküldés!";
        }
    }
    ?>
<body>