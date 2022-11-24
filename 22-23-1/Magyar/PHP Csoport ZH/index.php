<?php

?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Csoport ZH</title>
</head>
<style>
    body{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    h1{
        color: #008c95;
    }
    .steve{
        color: #2a66b5;
    }
    .error{
        color: #b52a2a;
    }
</style>
<body>
    <h1>PHP Csoport ZH - ABC123</h1>
    <!-- Kérlek, cseréld ki az ABC123-at a Neptun-kódodra!-->

    <h2>1. Feladat</h2>
    <div>Univeristy Campus</div>

    <h2>2. Feladat</h2>
    <ul>
        <li class="steve">City center, main park (3 barát volt itt)</li>
        <li class="">River island (4 barát volt itt)</li>
        <li class="steve">Steve's apartment (2 barát volt itt)</li>
        <li class="steve">Univeristy Campus (7 barát volt itt)</li>
        <li class="">Public Library (2 barát volt itt)</li>
    </ul>

    <h2>3. Feladat</h2>
    <form>
        Minimum virágok: <input name="flow"> <input type="submit" value="List it!">
    </form>
        <div>Virág érték: 20</div>
        <ul>
            <li>River island</li>
            <li>Univeristy Campus</li>
        </ul>
        <div class="error">Hiba: a kapott érték nem egy szám!</div>
</body>
</html>