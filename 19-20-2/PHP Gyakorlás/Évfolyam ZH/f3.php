<?php
    $adatok = json_decode(file_get_contents("f3.json"));

    if(isset($_GET["azonosito"])){
        $id = $_GET["azonosito"];
        if(isset($adatok->$id)){
            if(isset($_GET["ujnev"])){
                $adatok->$id->name = $_GET["ujnev"];
            }
            if(isset($_GET["torol"])){
                $temp = $adatok->$id->tags;
                $adatok->$id->tags = [];
                foreach($temp as $tag){
                    if($tag != $_GET["torol"]){
                        $adatok->$id->tags[] = $tag;
                    }
                }
            }
        }
    }

    file_put_contents("f3.json", json_encode($adatok, JSON_PRETTY_PRINT));
?>


<ul>
    <?php foreach($adatok as $id => $adat): ?>
        <li>
            <form>
                <input name="ujnev" value="<?=$adat->name?>">
                <input type="hidden" name="azonosito" value="<?=$id?>">
                <input type="submit">
            </form>
            <ul>
                <?php foreach($adat->tags as $tag): ?>
                    <li>
                        <a
                            href="f3.php?torol=<?=$tag?>&azonosito=<?=$id?>"
                        >
                            <?=$tag?>
                        </a>
                    </li>
                <?php endforeach ?>
            </ul>
        </li>
        <br>
    <?php endforeach ?>
</ul>