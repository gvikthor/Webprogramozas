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

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hiba történt!</title>
</head>
<body>
<h1>Hiba történt!</h1>
    <?php if(count($hibak) > 0): ?>
        <ul>
            <?php foreach($hibak as $hiba): ?>
                <li><?=$hiba?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>