<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    /*var_dump(
        !preg_match('/[a-záéíóöőúüűä]/', 'Almafa123,.') ||
        !preg_match('/[A-ZÁÉÍÓÖŐÚÜŰÄ]/', 'Almafa123,.') ||
        !preg_match('/[0-9]/', 'Almafa123,.') ||
        !preg_match('/[^\w]/', 'Almafa123,.')
    );*/
    /*
        $alma;
        $almao = (object)[
            "típus" => (object)[
                "szin" => "piros"
            ]
        ];
        echo ($alma??'') == "alma" ? "igen" : "nem";
        echo $alma ?? "az alma null volt";
        echo $almao?->tipus?->szin ?? ':(';
        */
    ?>

    <form method="POST" action="validate.php">
        Firstname: <input name="firstname"> <br>
        Lastname: <input name="lastname"> <br>
        Email: <input name="email"> <br>
        Email again: <input name="email2"> <br>
        Password: <input name="password" type="password"> <br>
        Password again: <input name="password2" type="password"> <br>
        Age: <input name="age"> <br>
        Gender: <br>
        Female <input name="gender" type="radio" value="female"> <br>
        Male <input name="gender" type="radio" value="male"> <br>
        Other <input name="gender" type="radio" value="other"> <br>
        City of origin: <select name="city">
            <option value="BUD">Budapest</option>
            <option value="DEB">Debrecen</option>
            <option value="SZE">Szeged</option>
            <option value="MIS">Miskolc</option>
            <option value="OTH">Other</option>
        </select> <br>
        Foods: <br>
        <input type="checkbox" name="foods[]" value="goulash"> Goulash <br>
        <input type="checkbox" name="foods[]" value="paprikas"> Paprikas <br>
        <input type="checkbox" name="foods[]" value="toltottkaposzta"> Toltott kaposzta <br>
        <input type="checkbox" name="foods[]" value="halaszle"> Halaszle <br>
        <hr>
        <input type="checkbox" name="terms" > I agree to the terms and conditions <br>

        <input type="submit">
    </form>
</body>
</html>