<!-- Nézd meg itt: http://webprogramozas.inf.elte.hu/hallgatok/mohmas/Gyak07/form.php -->

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Form</title>
</head>
<body>
    <?php
        if(isset($_POST["nev"])){
            echo "Szia " . $_POST["nev"] . "!";
        }else{
    ?>
        <form action="form.php" method="post">
            <input name="nev">
            <input type="submit">
        </form>
    <?php
        }
    ?>
</body>
</html>
