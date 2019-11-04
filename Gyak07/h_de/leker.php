 <!DOCTYPE html>
 <html lang="hu">
 <head>
     <meta charset="UTF-8">
     <title>Document</title>
 </head>
 <body>
    <form action="leker.php" method="post">
        Név: <input name="nev">
        <input type="submit">
    </form>
    <?php
    if(isset($_POST["nev"])){
        echo "Szia ".$_POST["nev"];
    }
    ?>
 </body>
 </html>