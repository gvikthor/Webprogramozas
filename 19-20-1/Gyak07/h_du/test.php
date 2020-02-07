<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

<style>
.helyes{
    background: green;
}
.helytelen{
    background: red;
}
</style>

    <?php
        $elso = false;
        $masodik = false;
        $harmadik = false;
        if(isset($_POST["elso"])){
            if($_POST["elso"] == "a"){
                $elso = true;
            }
            if($_POST["masodik"] == "b"){
                $masodik = true;
            }
            if($_POST["harmadik"] == "c"){
                $harmadik = true;
            }
        ?>
            <form action="test.php" method="post">
                1. kjdfhdfkjhkdfj dgfdgh?<br>
                <input name="elso">
                <?php if($elso): ?>
                    <p class="helyes">Helyes válasz</p>
                <?php else: ?>
                    <p class="helytelen">Helytelen válasz</p>
                <?php endif ?>
                <br><br>

                2. kjdfhdfkjhkdfj dgfdgh?<br>
                <input name="masodik">
                <?php if($masodik): ?>
                    <p class="helyes">Helyes válasz</p>
                <?php else: ?>
                <p class="helytelen">Helytelen válasz</p>
                <?php endif ?>
                <br><br>

                3. kjdfhdfkjhkdfj dgfdgh?<br>
                <input name="harmadik">
                <?php if($harmadik): ?>
                    <p class="helyes">Helyes válasz</p>
                <?php else: ?>
                    <p class="helytelen">Helytelen válasz</p>
                <?php endif ?>
                <br><br>

                <input type="submit">
            </form>
        <?php }else{
        ?>

    
            <form action="test.php" method="post">
                1. kjdfhdfkjhkdfj dgfdgh?<br>
                <input name="elso">
                <br><br>

                2. kjdfhdfkjhkdfj dgfdgh?<br>
                <input name="masodik">
                <br><br>

                3. kjdfhdfkjhkdfj dgfdgh?<br>
                <input name="harmadik">
                <br><br>

                <input type="submit">
            </form>

        <?php } ?>

</body>
</html>