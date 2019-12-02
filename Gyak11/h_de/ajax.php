<?php

if(isset($_GET["tipus"])){
    require("adatkezeles.php");
    if($_GET["tipus"] == "kedveli"){
        if(liked($_GET["uname"],$_GET["dal"])){
            removeLike($_GET["uname"],$_GET["dal"]);
            echo "torol_zold";
        }else{
            removeDislike($_GET["uname"],$_GET["dal"]);
            like($_GET["uname"],$_GET["dal"]);
            echo "zold";
        }
    }elseif($_GET["tipus"] == "nemkedveli"){
        if(disliked($_GET["uname"],$_GET["dal"])){
            removeDislike($_GET["uname"],$_GET["dal"]);
            echo "torol_piros";
        }else{
            removeLike($_GET["uname"],$_GET["dal"]);
            dislike($_GET["uname"],$_GET["dal"]);
            echo "piros";
        }
    }elseif($_GET["tipus"] == "dislikefrissit"){
        echo round((dalDisliked($_GET["dal"]))/(dalLiked($_GET["dal"])+dalDisliked($_GET["dal"]))*100,1);
    }elseif($_GET["tipus"] == "likefrissit"){
        echo round((dalLiked($_GET["dal"]))/(dalLiked($_GET["dal"])+dalDisliked($_GET["dal"]))*100,1);
    }
}

?>