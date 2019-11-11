<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Hallgatok</title>
</head>
<body>

<?php if($_SERVER["REQUEST_METHOD"] != "POST"): ?>
    <form method="post">
        Név:<br>
        <input name="nev"> <br>
        
        Neptun:<br>
        <input name="neptun"> <br>

        Tárgy:<br>
        <select name="targy">
            <option value="">Válassz tárgyat...</option>
            <option value="anal">Analízis</option>
            <option value="prog">Programozás</option>
            <option value="szex">Szexuálpszichológia</option>
        </select>
        <br>
        Jegy:<br>
        <input type="radio" name="jegy" value="1">Elégtelen<br>
        <input type="radio" name="jegy" value="2">Elégséges<br>
        <input type="radio" name="jegy" value="3">Közepes<br>
        <input type="radio" name="jegy" value="4">Jó<br>
        <input type="radio" name="jegy" value="5">jeles<br>

        <input type="submit">
    </form>
<?php else: ?>
    <form method="post">
        Név:<br>
        <?php if(trim($_POST["nev"]) != ""): ?>
            <input name="nev" value=<?=htmlspecialchars($_POST["nev"])?>> <br>
        <?php else: ?>
            <input name="nev"> <br>
            A név megadása kötelező!
        <?php endif ?>
        
        Neptun:<br>
        <?php if(strlen(trim($_POST["neptun"])) == 6): ?>
            <input name="neptun" value=<?=htmlspecialchars($_POST["neptun"])?>> <br>
        <?php else: ?>
            <input name="neptun"> <br>
            A Neptun-kód 6 karakterből áll!
        <?php endif ?>


        <?php
            function select($targy){
                if($targy == $_POST["targy"]){
                    return "checked";
                }else{
                    return "";
                }
            }
            function check($jegy){
                if($jegy == $_POST["jegy"]){
                    return "selected";
                }else{
                    return "";
                }
            }
        ?>

        Tárgy:<br>
        <?php if($_POST["targy"] != ""): ?>
            <select name="targy">
                <option value="">Válassz tárgyat...</option>
                <option value="anal" <?=select("anal")?>>Analízis</option>
                <option value="prog" <?=select("prog")?>>Programozás</option>
                <option value="szex" <?=select("szex")?>>Szexuálpszichológia</option>
            </select>
        <?php else: ?>
            <select name="targy">
                <option value="">Válassz tárgyat...</option>
                <option value="anal">Analízis</option>
                <option value="prog">Programozás</option>
                <option value="szex">Szexuálpszichológia</option>
            </select>
            A tárgy megadása kötelező!
        <?php endif ?>

        <br>

        Jegy:<br>
        <?php  if(isset($_POST["jegy"])): ?>
            <input type="radio" name="jegy" value="1" <?=check("1")?>>Elégtelen<br>
            <input type="radio" name="jegy" value="2" <?=check("2")?>>Elégséges<br>
            <input type="radio" name="jegy" value="3" <?=check("3")?>>Közepes<br>
            <input type="radio" name="jegy" value="4" <?=check("4")?>>Jó<br>
            <input type="radio" name="jegy" value="5" <?=check("5")?>>jeles<br>
        <?php else: ?>
            <input type="radio" name="jegy" value="1">Elégtelen<br>
            <input type="radio" name="jegy" value="2">Elégséges<br>
            <input type="radio" name="jegy" value="3">Közepes<br>
            <input type="radio" name="jegy" value="4">Jó<br>
            <input type="radio" name="jegy" value="5">jeles<br>
            A jegy megadása kötelező!
        <?php endif ?>

        <input type="submit">
    </form>
<?php endif ?>

</body>
</html>
