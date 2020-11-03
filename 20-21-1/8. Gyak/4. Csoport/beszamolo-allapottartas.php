<?php
$beszamoloAdatai = [];
$hibak = [];

if(count($_GET) > 0){

    if(isset($_GET['nev']) && trim($_GET['nev']) != ''){
        $beszamoloAdatai['nev'] = $_GET['nev'];
    }else{
        $hibak[] = 'A név megadása kötelező!';
    }

    if(isset($_GET['honap'])){
        if(($_GET['honap'] == 'január' || $_GET['honap'] == 'február' || $_GET['honap'] == 'március')){
            $beszamoloAdatai['honap'] = $_GET['honap'];
        }else{
            $hibak[] = 'A megadott hónap nem létezik!';
        }
    }else{
        $hibak[] = 'A hónap kiválasztása kötelező!';
    }

    if(isset($_GET['tisztviselo'])){
        if($_GET['tisztviselo'] == 'elnok' || $_GET['tisztviselo'] == 'manager'){
            $beszamoloAdatai['tisztviselo'] = $_GET['tisztviselo'];
        }else{
            $hibak[] = 'Az adott tisztviselői státusz nem létezik/nem releváns.';
        }
    }else{
        $hibak[] = 'A tisztviselő szintjének kválasztása kötelező!';
    }

    if(isset($_GET['beszamolo'])){
        if(isset($beszamoloAdatai['tisztviselo'])){
            if($beszamoloAdatai['tisztviselo'] == 'elnok'){
                if(strlen($_GET['beszamolo']) > 10){
                    $beszamoloAdatai['beszamolo'] = $_GET['beszamolo'];
                }else{
                    $hibak[] = 'Az elnökségi tagok beszémolójának legalább 10 karakternek kell lennie.';
                }
            }else{
                $beszamoloAdatai['beszamolo'] = $_GET['beszamolo'];
            }
        }
    }else{
        $hibak[] = 'A beszámoló megadása kötelező!';
    }

    if(isset($_GET['ules'])){
        $beszamoloAdatai['ules'] = $_GET['ules'];
    }else{
        $beszamoloAdatai['ules'] = [];
    }

    if(isset($_GET['fizetes']) && trim($_GET['fizetes']) != ''){
        if(is_numeric($_GET['fizetes'])){
            $beszamoloAdatai['fizetes'] = intval($_GET['fizetes']);
        }else{
            $hibak[] = 'Az elvárt fizetés csak szám lehet!';
        }
    }else{
        $hibak[] = 'Az elvárt havi fizetés megadása kötelező!';
    }

    if(isset($_GET['adatvedelem']) && $_GET['adatvedelem'] == 'igen'){
        $beszamoloAdatai['adatvedelem'] = true;
    }else{
        $hibak[] = 'Az adatvédelmi szabályzat elfogadása kötelező!';
    }

    //var_dump($beszamoloAdatai);

    /*
    if(feltetel){
        return a;
    }else{
        return b;
    }

    feltetel ? a : b 
    */
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beszámoló</title>
</head>
<body>
    <h1>Havi beszámoló</h1>
    <form>
        <h2>Név</h2> <br>
        <input name="nev" value="<?= isset($beszamoloAdatai['nev']) ? $beszamoloAdatai['nev'] : '' ?>"> <br>

        <h2>Hónap</h2> <br>
        <select name="honap">
            <option value="január"  <?=isset($beszamoloAdatai['honap']) && $beszamoloAdatai['honap'] == 'január'  ? 'selected' : ''?>  >Január</option>
            <option value="február" <?=isset($beszamoloAdatai['honap']) && $beszamoloAdatai['honap'] == 'február' ? 'selected' : ''?> >Február</option>
            <option value="március" <?=isset($beszamoloAdatai['honap']) && $beszamoloAdatai['honap'] == 'március' ? 'selected' : ''?> >Március</option>
        </select>

        <h2>Tisztviselő szintje</h2>
        <input type="radio" name="tisztviselo" value="elnok"   <?=isset($beszamoloAdatai['tisztviselo']) && $beszamoloAdatai['tisztviselo'] == 'elnok'   ? 'checked' : ''?>> Elnökségi tag <br>
        <input type="radio" name="tisztviselo" value="manager" <?=isset($beszamoloAdatai['tisztviselo']) && $beszamoloAdatai['tisztviselo'] == 'manager' ? 'checked' : ''?>> Manager

        <h2>Beszámoló</h2>
        <textarea name="beszamolo"><?=isset($beszamoloAdatai['beszamolo']) ? $beszamoloAdatai['beszamolo'] : ''?></textarea>

        <h2>Ülések</h2>
        <input type="checkbox" name="ules[]" value="elnokseg0507" <?=isset($beszamoloAdatai['ules']) && in_array('elnokseg0507', $beszamoloAdatai['ules']) ? 'checked' : ''?>> Elnökségi ülés 05.07. <br>
        <input type="checkbox" name="ules[]" value="elnokseg0515" <?=isset($beszamoloAdatai['ules']) && in_array('elnokseg0515', $beszamoloAdatai['ules']) ? 'checked' : ''?>> Elnökségi ülés 05.15. <br>
        <input type="checkbox" name="ules[]" value="elnokseg0519" <?=isset($beszamoloAdatai['ules']) && in_array('elnokseg0519', $beszamoloAdatai['ules']) ? 'checked' : ''?>> Elnökségi ülés 05.19. <br>

        <h2>Fizetés</h2>
        <input name="fizetes" value="<?=isset($beszamoloAdatai['fizetes']) ? $beszamoloAdatai['fizetes'] : ''?>">

        <h2>Adatvédelem</h2>
        <input type="checkbox" name="adatvedelem" value="igen"> Elfogadom az adatkezelési és adatvédelmi szabályzatot.

        <br>

        <!--input type="hidden" name="ellenorozo" value="almafa"-->

        <input type="submit">
    </form>
    <?php if(count($hibak) > 0): ?>
        <ul>
            <?php foreach($hibak as $hiba): ?>
                <li><?=$hiba?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>