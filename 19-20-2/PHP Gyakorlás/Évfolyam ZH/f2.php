<?php
$formak = json_decode(file_get_contents("f2.json"));
?>

Ez itt html, és az svg egy html tag. Ebbe fog belekerülni az összes ábránk. Adtam nekik stílust, de ez nem kötelező.<br>
<svg style="border: 1px solid black">
    <?php foreach($formak as $forma): ?>
        <?php if($forma->type == "ellipse"): ?>
            <ellipse
                cx = "<?=$forma->x?>"
                cy = "<?=$forma->y?>"
                rx = "<?=$forma->rx?>"
                ry = "<?=$forma->ry?>"
            ></ellipse>
        <?php elseif($forma->type == "circle"): ?>
            <circle
                fill = "white"
                cx = "<?=$forma->x?>"
                cy = "<?=$forma->y?>"
                r = "<?=$forma->r?>"
            ></circle>
        <?php elseif($forma->type == "polyline" && count($forma->points) > 5): ?>
            <!-- egyik módszer, közvetlen belegenerálás -->
            <!--polyline
                points="< ?php foreach($forma->points as $pont){ echo $pont->x . "," . $pont->y . " "; } //XvesszőYszóköz ?>"
            ></polyline-->

            <!-- másik módszer, stringbe generálás -->
            <?php
                $pontok = "";
                foreach($forma->points as $pont){
                    $pontok .= $pont->x . "," . $pont->y . " ";
                }
            ?>
            <polyline points="<?=$pontok?>"></polyline>
        <?php endif ?>
    <?php endforeach ?>
</svg>