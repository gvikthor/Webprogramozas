<?php

$felhasznalo = (object)[
    "jelszo" => "valami"
];
$json = '{ 
    "felhasznalok": {
        "ObiWan": {
            "jelszo": "highground66"
        },
        "Thanos": {
            "jelszo": "rainbowstones"
        }
    }
}';

$json2 = json_encode($felhasznalo);
var_dump($felhasznalo);  echo '<br>';
var_dump($json2);  echo '<br>---<br>';

$json3 = json_decode($json);
var_dump($json3);  echo '<br>';
var_dump($json3->felhasznalok);  echo '<br>';
echo $json3->felhasznalok->ObiWan->jelszo;  echo '<br>';
var_dump(isset($json3->felhasznalok->ObiWan));  echo '<br>';
var_dump(isset($json3->felhasznalok->HarryPotter));  echo '<br>---<br>';

$json3->felhasznalok->HarryPotter = (object)[
    "jelszo" => "Hedwig"
];
var_dump($json3->felhasznalok);  echo '<br>';
echo $json3->felhasznalok->HarryPotter->jelszo; echo '<br>';
var_dump(isset($json3->felhasznalok->HarryPotter)); echo '<br>---<br>';



$json4 = json_decode(file_get_contents("json_minta.json"));
var_dump($json4);
$json5 = json_encode($json4);
file_put_contents("json_minta_output.json", $json5);

?>