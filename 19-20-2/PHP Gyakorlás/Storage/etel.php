<?php

function addEtel($filekezelo, $ember, $etel){
    $ember["etelek"][] = $etel;
    $filekezelo->update($ember["id"], $ember);
}

function deletel($filekezelo, $ember, $etelNemSzeret){
    $ujEtelTomb = [];
    foreach($ember["etelek"] as $etel){
        if($etel != $etelNemSzeret){
            $ujEtelTomb[] = $etel;
        }
    }
    $ember["etelek"] = $ujEtelTomb;
    $filekezelo->update($ember["id"], $ember);
}

function ujEtelek($filekezelo, $ember, $ujEtelek){
    $ember["etelek"] = $ujEtelek;
    $filekezelo->update($ember["id"], $ember);
}