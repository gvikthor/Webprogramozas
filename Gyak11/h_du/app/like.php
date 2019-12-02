<?php
    session_start();
    require("adatkezeles.php");
    if($_GET["type"] == "like"){
        removeDislike($_SESSION["uname"],$_GET["cim"]);
        like($_SESSION["uname"],$_GET["cim"]);
        if(liked($_SESSION["uname"],$_GET["cim"])){
            echo "like";
        }else{
            echo "no like";
        }
    }elseif($_GET["type"] == "dislike"){
        removeLike($_SESSION["uname"],$_GET["cim"]);
        dislike($_SESSION["uname"],$_GET["cim"]);
        if(disliked($_SESSION["uname"],$_GET["cim"])){
            echo "dislike";
        }else{
            echo "no dislike";
        }
    }elseif($_GET["type"] == "ertekelesekL"){
        echo round((dalLiked($_GET["cim"]))/(dalLiked($_GET["cim"])+dalDisliked($_GET["cim"]))*100,1);
    }elseif($_GET["type"] == "ertekelesekD"){
        echo round((dalDisliked($_GET["cim"]))/(dalLiked($_GET["cim"])+dalDisliked($_GET["cim"]))*100,1);
    }
?>