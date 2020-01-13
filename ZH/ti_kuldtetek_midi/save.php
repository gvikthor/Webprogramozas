<?php
    $i = $_POST["id"];
    $file = json_decode(file_get_contents("tracks.object.json"));
    echo json_encode(str_replace("\"","",$_POST["data"]));
    $file->$i->notes = json_encode(str_replace('"',"",$_POST["data"]));
    file_put_contents("tracks.object.json", json_encode($file,JSON_PRETTY_PRINT));
?>