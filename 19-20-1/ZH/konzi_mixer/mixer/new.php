<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Mixer - Add new track</title>
  <link rel="stylesheet" href="http://webprogramozas.inf.elte.hu/webprog/zh/mixer/mixer.css">
</head>

<?php
$hiba = [];
$tracks = json_decode(file_get_contents("tracks.object.json"));

$name = "";
$filename = "";
$balance = 0;
$volume = 50;
$filters = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

  //NAME
  if(isset($_POST["name"])){
    $name = $_POST["name"];
    if(trim($name) == ""){
      $hiba[] = "The track name is required";
    }elseif(strlen($name) > 20){
      $hiba[] = "The track name is too long";
    }
  }else{
    $hiba[] = "The track name is required";
  }

  //FILENAME
  if(isset($_POST["filename"])){
    $filename = $_POST["filename"];
    if(trim($filename) == ""){
      $hiba[] = "The audio filename is required";
    }elseif( !(preg_match("/[a-zA-Z0-9]+\.[a-zA-Z0-9]+/",$filename) > 0) ){
      $hiba[] = "The audio filename has a wrong format";
    }
  }else{
    $hiba[] = "The audio filename is required";
  }

  //BALANCE
  if(isset($_POST["balance"])){
    $balance = $_POST["balance"];
    if(trim($balance) == ""){
      $hiba[] = "The balance is required";
    }elseif(!( is_numeric($balance) && floor($balance) == $balance )){
      $hiba[] = "The balance has to be an integer";
    }elseif($balance > 100 || $balance < -100){
      $hiba[] = "The balance has to be between -100 and 100";
    }
  }else{
    $hiba[] = "The balance is required";
  }

  //VOLUME
  if(isset($_POST["volume"])){
    $volume = $_POST["volume"];
    if(trim($volume) == ""){
      $hiba[] = "The volume is required";
    }elseif(!( is_numeric($volume) && floor($volume) == $volume )){
      $hiba[] = "The volume has to be an integer";
    }elseif($volume > 100 || $volume < 0){
      $hiba[] = "The volume has to be between 0 and 100";
    }elseif($volume % 5 != 0){
      $hiba[] = "The volume has to be a multiple of 5";
    }
  }else{
    $hiba[] = "The volume is required";
  }

  //FILTERS
  if(isset($_POST["filters"])){
    $filters = $_POST["filters"];
  }

}

?>

<body>
  <h2>Add new track</h2>
  <form action="" method="post">
    <div>
      <label for="name">Track name:</label>
      <input type="text" name="name" id="name" value="<?=$name?>">
      (required, max length 20 characters)
    </div>
    <div>
      <label for="filename">Audio file name:</label>
      <input type="text" name="filename" id="filename" value="<?=$filename?>">
      (required, filename.extension format)
    </div>
    <div>
      <label for="balance">Balance:</label>
      <input type="number" name="balance" id="balance" value="<?=$balance?>" min="-100" max="100">
      (required, integer, between -100 and 100)
    </div>
    <div>
      <label for="volume">Initial volume:</label>
      <input type="number" name="volume" id="volume" value="<?=$volume?>" min="0" max="100" step="5">
      (required, integer, between 0 and 100, multiple of 5)
    </div>
    <div>
      <label for="filters">Filters:</label>
      <textarea name="filters" id="filters" rows="10" cols="30"><?=$filters?></textarea>
      (can be empty; if not, then one filter per line)
      <br>
      <select id="all" size="10">
        <option>Filter1</option>
        <option>Filter2</option>
      </select>
      <button type="button" id="select">⟶</button>
      <button type="button" id="deselect">⟵</button>
      <button type="button" id="moveup">↑</button>
      <button type="button" id="movedown">↓</button>
      <select id="selected" size="10"></select>
    </div>
    <div>
      <button type="submit">Add new track</button>
    </div>
  </form>
  <?php if(count($hiba) > 0): ?>
    <div class="errors">
      <?=var_dump($hiba)?>
    </div>
  <?php elseif($_SERVER["REQUEST_METHOD"] == "POST"): ?>
    <?php
      $id = (end($tracks)->id)+1;
      $tracks->$id = (object)[
        "id" => $id,
        "name" => $name,
        "filename" => $filename,
        "balance" => $balance,
        "volume" => $volume,
        "filters" => explode("\r\n",$filters)
      ];

      file_put_contents("tracks.object.json",json_encode($tracks,JSON_PRETTY_PRINT));
      header("Location: index.php");
    ?>
  <?php endif ?>
  <a href="index.php">Return to mixer</a>
</body>

</html>