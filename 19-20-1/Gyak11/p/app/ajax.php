<?php
    require('adatkezeles.php');
    if($_GET["fgv"] == 'liked'){
        if(liked($_GET["param1"], $_GET["param2"])){ //uname, cím
            echo "true";
        }else{
            echo "false";
        }
    }elseif($_GET["fgv"] == 'disliked'){
        if(disliked($_GET["param1"], $_GET["param2"])){ //uname, cím
            echo "true";
        }else{
            echo "false";
        }
    }elseif($_GET["fgv"] == "dalLiked"){
        echo dalLiked($_GET["param1"]);
    }elseif($_GET["fgv"] == "dalDisliked"){
        echo dalDisliked($_GET["param1"]);
    }

?>