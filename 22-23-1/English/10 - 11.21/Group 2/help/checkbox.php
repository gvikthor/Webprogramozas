<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php var_dump($_GET['something'] ?? 'no get') ?>
    <form>
        <input type="checkbox" name="something[]" value="a"> A <br>
        <input type="checkbox" name="something[]" value="b"> B <br>
        <input type="checkbox" name="something[]" value="c"> C <br>
        <input type="checkbox" name="something[]" value="d"> D <br>
        <input type="submit" value="Send">
    </form>
</body>
</html>