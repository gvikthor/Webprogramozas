<?php function oldal_eleje($cim, $nav_latszik = true){ ?>
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Autós oldal | <?=$cim?></title>
    </head>
    <body>
        <h1>Autós oldal</h1>
        <?php if($nav_latszik): ?>
        <nav>
            <a href="index.php">Főoldal</a>
            <a href="request_logout.php">Kijelentkezés</a>
        </nav>
        <?php endif ?>
        <h2><?=$cim?></h2>
<?php } // oldal_eleje ?>

<?php function oldal_vege(){ ?>
    </body>
</html>
<?php } // oldal_vege ?> 