<?php
    if($_GET["type"] == "urlap"){
        $hiba = false;
        //dátum
        $datum = explode("-",$_GET["nap"]);
        if(trim($_GET["nap"]) == ""){
            echo "Nap megadása kötelező <br>";
            $hiba = true;
        }else if(!checkdate($datum[1],$datum[2],$datum[0])){
            echo "Nap dátumformátuma rossz <br>";
            $hiba = true;
        }
        //mettől
        if(trim($_GET["mettol"]) == ""){
            echo "Mettől megadása kötelező <br>";
            $hiba = true;
        }else if(!strtotime($_GET["mettol"])){
            echo "Mettől dátumformátuma rossz <br>";
            $hiba = true;
        }
        //meddig
        if(trim($_GET["meddig"]) == ""){
            echo "Meddig megadása kötelező <br>";
            $hiba = true;
        }else if(!strtotime($_GET["meddig"])){
            echo "Meddig dátumformátuma rossz <br>";
            $hiba = true;
        }
        //ételek
        if(trim($_GET["etelek"]) == ""){
            echo "Ételek megadása kötelező <br>";
            $hiba = true;
        }
        //kcal
        if(trim($_GET["kcal"]) == ""){
            echo "kCal megadása kötelező <br>";
            $hiba = true;
        }else if(!is_numeric($_GET["kcal"])){
            echo "kCal nem szám <br>";
            $hiba = true;
        }else if($_GET["kcal"] < 0){
            echo "kCal negatív <br>";
            $hiba = true;
        }

        if(!$hiba){
            echo "OK";
            $file = json_decode(file_get_contents("menu.json"));
            $file[] = (object)[
                "id" => count($file)+1,
                "nap" => $_GET["nap"],
                "mettol" => $_GET["mettol"],
                "meddig" => $_GET["meddig"],
                "etelek" => $_GET["etelek"],
                "kcal" => $_GET["kcal"],
                "aktiv" => true
            ];
            file_put_contents("menu.json", json_encode($file,JSON_PRETTY_PRINT));
        }
    }
?>
