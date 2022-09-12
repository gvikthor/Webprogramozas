<?php

function jsonBeolvas($filenev){
    return json_decode(file_get_contents($filenev));
}

function jsonKiir($filenev, $adat){
    file_put_contents($filenev, json_encode($adat, JSON_PRETTY_PRINT));
}

$elemek = jsonBeolvas("elemek.json");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG</title>
</head>
<style>
    svg{
        border: 1px solid black;
    }
</style>
<body>
    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
    <?php foreach($elemek as $elem): ?>
        <?php if($elem->type == "ellipse"): ?>
            <ellipse x="<?=$elem->x?>" y="<?=$elem->y?>" rx="<?=$elem->rx?>" ry="<?=$elem->ry?>" />
        <?php elseif($elem->type == "circle"): ?>
            <circle x="<?=$elem->x?>" y="<?=$elem->y?>" r="<?=$elem->r?>" />
        <?php else: ?>
            <?php
            $pontok = "";
            foreach($elem->points as $pont){
                $pontok .= $pont->x . ',' . $pont->y . ' ';
            }
            ?>
            <polyline points="<?=$pontok?>" />
        <?php endif ?>
    <?php endforeach ?>
    </svg>
</body>
</html>