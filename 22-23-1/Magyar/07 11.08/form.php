<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Szia <?=$_GET['name']?>! <br>
    <form method="POST" action="formresult.php">
        Cím: <input name="title"> <br>
        Megjelenés éve: <input name="year" type="number"> <br>
        <input type="submit">
    </form>
</body>
</html>