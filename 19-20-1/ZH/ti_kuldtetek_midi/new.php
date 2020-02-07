<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>MIDI editor - Add new track</title>
  <link rel="stylesheet" href="http://webprogramozas.inf.elte.hu/webprog/zh/midi/midi.css">
</head>

<?php

//egyes elemek hiányozhatnak a post kérésből, tehát mi9ndenképpen muszáj ellenőrizni
//hiába tiltja le a reqired tag a html-ben, a tesztelő tud pl. name nélkül küldeni

$hiba = [];
$tracks = json_decode(file_get_contents("tracks.object.json"));
$instruments = json_decode(file_get_contents("instruments.object.json"));

$name = "";
$color = "";
$category = "";
$instrument = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

  //NAME
  if(isset($_POST["name"])){
    $name = $_POST["name"];
    if(trim($name) == ""){
      $hiba[] = "The track name is required";
    }
  }else{
    $hiba[] = "The track name is required";
  }

  //COLOR
  if(isset($_POST["color"])){
    $color = $_POST["color"];
    if(trim($color) == ""){
      $hiba[] = "The track color is required";
    }elseif( !(preg_match("/^\#[a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9]$/",$color) > 0) ){
      $hiba[] = "The track color has a wrong format";
    }
  }else{
    $hiba[] = "The track color is required";
  }

  //CATEGORY
  if(isset($_POST["category"])){
    $category = $_POST["category"];
    if(trim($category) == ""){
      $hiba[] = "The category is required";
    }
  }else{
    $hiba[] = "The category is required";
  }

  //INSTRUMENT
  if(isset($_POST["instrument"])){
    $instrument = $_POST["instrument"];
    if(trim($instrument) == ""){
      $hiba[] = "The instrument is required";
    }elseif(!( is_numeric($instrument) && floor($instrument) == $instrument )){
      $hiba[] = "The instrument has to be an integer";
    }
  }else{
    $hiba[] = "The instrument is required";
  }

    if (count($hiba) === 0){

            $id = (end($tracks)->id)+1;
            $tracks->$id = (object)[
              "id" => $id,
              "name" => $name,
              "category"=> $category,
              "instrument" => $instrument,
              "color" => $color,
              "notes" => []
            ];

            file_put_contents("tracks.object.json",json_encode($tracks,JSON_PRETTY_PRINT));
            Header("Location: index.php");
    }
}

?>

<body>
  <h2>Add new track</h2>
  <form action="new.php" method="post">
    <div>
      <label for="name">Track name</label>
      <input type="text" id="name" name="name" value="<?=$name?>">
      (required)
    </div>
    <div>
      <label for="color">Color</label>
      <input type="color" id="color" name="color" placeholder="#1234af" value="<?=$color?>">
      (required, format: hex color code, e.g. #12af4d)
    </div>
    <div>
      <label for="category">Category</label>
      <input type="text" id="category" name="category" list="category-list" value="<?=$category?>"> 
      (required)
      <datalist id="category-list">
        <option value="Piano">
        <option value="Organ">
        <option value="Accordion">
        <option value="Strings">
        <option value="Guitar">
        <option value="Bass">
        <option value="Choir">
        <option value="Trumpet">
        <option value="Brass">
        <option value="Saxophone">
        <option value="Flute">
        <option value="Synth Lead">
        <option value="Synth Pad">
        <option value="Percussion">
        <option value="World">
        <option value="Synth effects">
        <option value="Sound effects">
      </datalist>
    </div>
    <div>
      <label for="instrument">Instrument</label>
      <select id="instrument" name="instrument">
        <?php foreach($instruments as $int): ?>
          <option value="<?=$int->id?>" <?php if($int->id == $instrument): ?> selected <?php endif ?>><?=$int->name?></option>
        <?php endforeach ?>
      </select>
      (required, number)
    </div>
    <div>
      <button type="submit">Add new track</button>
    </div>
  </form>
    <?php if(count($hiba) != 0): ?>
      <div class="errors">
        <?=var_dump($hiba)?>
      </div> 
    
      <script>
      </script>
    <?php endif ?>
  <a href="index.php">Return to editor</a>
</body>

</html>

<?php
