<?php
session_start();
$errors = $_SESSION['errorsReg'] ?? [];
$previous = $_SESSION['previous'] ?? null;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="req_register.php" method="POST">
        <label for="name">Name</label><br>
        <input type="text" name="name" id="name"><br>

        <br><br>

        <label for="pword1">Password</label>
        <input type="password" name="pword1" id="pword1"><br>

        <br><br>

        <label for="pword2">Password again</label>
        <input type="password" name="pword2" id="pword2"><br>

        <br><br>

        <label for="email">Email</label><br>
        <input type="email" name="email" id="email"><br>

        <br><br>

        <label for="age">Age</label><br>
        <input type="number" name="age" id="age"><br>

        <br><br>

        <label for="city">City</label><br>
        <select name="city" id="city">
            <option value="bud">Budapest</option>
            <option value="deb">Debrecen</option>
            <option value="sze">Szeged</option>
            <option value="esz">Esztergom</option>
            <option value="pec">Pécs</option>
        </select><br>

        <br><br>

        <label for="degree">Highest degree</label><br>
        <input type="radio" name="degree" id="degree-hs" value="highschool"><label for="degree-hs">Highschool</label><br>
        <input type="radio" name="degree" id="degree-bsc" value="bachelor">Bachelor<br>
        <input type="radio" name="degree" id="degree-msc" value="master">Master<br>
        <input type="radio" name="degree" id="degree-phd" value="phd">PhD<br>

        <br><br>

        <label for="languages">Languages</label><br>
        <input type="checkbox" name="languages[]" id="lang-hu" value="hu"><label for="lang-hu">Hungarian</label><br>
        <input type="checkbox" name="languages[]" id="lang-en" value="en"><label for="lang-en">English</label><br>
        <input type="checkbox" name="languages[]" id="lang-de" value="de"><label for="lang-de">German</label><br>
    
        <br><br>

        <label for="description">Description</label><br>
        <textarea name="description" id="description"></textarea>

        <br><br>

        <input type="submit" value="Apply">
    </form>
    <?php if(count($errors) > 0): ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?=$error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>