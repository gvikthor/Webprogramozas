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
$instruments = json_decode(file_get_contents("instruments.object.json"));

$errors = [];

$name = "";
$color = "";
$category = "";
$instrument = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
  if(isset($_POST["name"])){
    $name = $_POST["name"];
    if(trim($_POST["name"]) == ""){
      $errors[] = "The track name is required";
    }
  }else{
    $errors[] = "The track name is required";
  }

  if(isset($_POST["color"])){
    $color = $_POST["color"];
    if(trim($_POST["color"]) == ""){
      $errors[] = "The track color is required";
    }elseif(preg_match("/^\#[a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9]$/",$_POST["color"]) == 0){
      $errors[] = "The track color has a wrong format";
    }
  }else{
    $errors[] = "The track color is required";
  }

  if(isset($_POST["category"])){
    $category = $_POST["category"];
    if(trim($_POST["category"]) == ""){
      $errors[] = "The category is required";
    }
  }else{
    $errors[] = "The category is required";
  }

  if(isset($_POST["instrument"])){
    $instrument = $_POST["instrument"];
    if(trim($_POST["instrument"]) == ""){
      $errors[] = "The instrument is required";
    }elseif(!(is_numeric($_POST["instrument"]) && floor($_POST["instrument"]) == $_POST["instrument"])){
      $errors[] = "The instrument has to be an integer";
    }
  }else{
    $errors[] = "The instrument is required";
  }
}

?>
<body>
  <h2>Add new track</h2>
  <form action="new.php" method="post">
    <div>
      <label for="name">Track name</label>
      <input type="text" id="name" name="name" value="<?=$name?>"><!--required-->
      (required)
    </div>
    <div>
      <label for="color">Color</label>
      <input type="color" id="color" name="color" placeholder="#1234af" value="<?=$color?>"><!--required-->
      (required, format: hex color code, e.g. #12af4d)
    </div>
    <div>
      <label for="category">Category</label>
      <input type="text" id="category" name="category" list="category-list" value="<?=$category?>"><!--required-->
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
      <select id="instrument" name="instrument"><!--required-->
        <?php foreach($instruments as $inst): ?>
            <option value="<?=$inst->id?>" <?php if($instrument == $inst->id): ?> selected <?php endif ?>><?=$inst->name?></option>
        <?php endforeach ?>
      </select>
      (required, number)
    </div>
    <div>
      <button type="submit">Add new track</button>
    </div>
  </form>

  <?php if(count($errors) > 0):?>
    <div class="errors">
      <?php
      var_dump($errors);
      ?>
    </div>
  <?php else: ?>
    <?php
      if($_SERVER["REQUEST_METHOD"] == "POST"){
        $tracks = json_decode(file_get_contents("tracks.object.json"));
        $id = "".(end($tracks)->id)+1;
        $tracks->$id = (object)[
          "id" => $id,
          "name" => $name,
          "category" => $category,
          "instrument" => $instrument,
          "color" => $color,
          "notes" => [
          ]
        ];
        file_put_contents("tracks.object.json",json_encode($tracks,JSON_PRETTY_PRINT));
        ?>
        <script>window.location.redirect = "index.php";</script>
        <?php
          die();
      }
    ?>
  <?php endif ?>
  <a href="index.php">Return to editor</a>
</body>

</html>
<?php