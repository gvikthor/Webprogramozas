<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if(isset($_POST['nev'])): ?>
        Szia <?=$_POST["nev"]?>! <br>
    <?php else: ?>
        Kérlek, add meg a neved!
    <?php endif ?>
    
    <form action="form.php" method="post">
        <input name="nev"><br>
        <input name="bankszamlaszam"><br>
        <input name="jelszo"><br>
        <input type="submit">
    </form>

</body>
</html>