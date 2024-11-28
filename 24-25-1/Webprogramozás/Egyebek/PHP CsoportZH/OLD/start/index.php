<?php
require_once 'fuggvenyek.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PHP CsoportZH</title>
</head>

<body>
    <div id="content">
        <h1>PHP CsoportZH</h1>

        <h2>Csatornák</h2>
        <div class="csatorna">
            <img src="https://kamrashop.hu/wp-content/uploads/2022/11/trmk-kokusz.jpg">
            <div>
                <h3>Mókuscsoport</h3>
                <p>213000, TheFirstMan</p>
            </div>
        </div>
        <div class="csatorna">
            <img src="https://rozsmanncukraszda.hu/image/cache/Egy%C3%A9b/csokitabla-1000x1000.jpg">
            <div>
                <h3>Thisisfine</h3>
                <p>196000, Jockie</p>
            </div>
        </div>
        <div class="csatorna">
            <img src="https://miro.medium.com/v2/resize:fit:687/1*urkG1quJnJIApIMyTQIe1A.jpeg">
            <div>
                <h3>Országbérlet</h3>
                <p>31000, Gyermekeim Anyja</p>
            </div>
        </div>
        <div class="csatorna">
            <img src="https://simongyumolcs.hu/wp-content/uploads/2019/12/simon-gyumolcs-edes-alma.jpg">
            <div>
                <h3>Videós Ember</h3>
                <p>787000, Thomas a Gőzmozdony</p>
            </div>
        </div>
        <div class="csatorna">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg">
            <div>
                <h3>Ellenáló</h3>
                <p>523000, Ágnes</p>
            </div>
        </div>




        <h2>Új csatorna</h2>
        <ul id="hibak">
            <li>Példa hiba 1</li>
            <li>Példa hiba 2</li>
        </ul>
        <form>
            <label for="nev">Csatorna neve</label>
            <input name="nev" placeholder="Péda Studios">

            <label for="influencer">Vezető influencer</label>
            <input name="influencer" placeholder="Példa Géza">

            <label for="kep">Kép (link)</label>
            <input name="kep" placeholder="https://valami.hu/kep/pelda">

            <input type="submit">
        </form>
    </div>
</body>

</html>