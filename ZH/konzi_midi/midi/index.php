<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>MIDI editor</title>
  <link rel="stylesheet" href="http://webprogramozas.inf.elte.hu/webprog/zh/midi/midi.css">
</head>

<?php
$hide = [];
if(isset($_GET["hide"])){
  $hide = explode(",",$_GET["hide"]);
}

$tracks = json_decode(file_get_contents("tracks.object.json"));
$instruments = json_decode(file_get_contents("instruments.object.json"));

?>

<body>
  <div id="main">
    <div class="row tracks-container">

    <?php if(!in_array("tracks",$hide)): ?>
      <div class="tracks">
        <h3>MIDI editor</h3>
        <p>Press 1-8 to play notes, and SPACE to toggle record mode</p>
        <a href="new.php">Add new track...</a>
        <ul>
          <?php foreach($tracks as $track): ?>
            <li id="thor-<?=$track->id?>" data-id="<?=$track->id?>" data-notes='<?=json_encode($track->notes)?>' style="background: <?=$track->color?>">
              <?php
                $i = $track->instrument;
              ?>
              <span><?=$track->category?></span>
              <?=$track->name?> (<?=$instruments->$i->name?>)
            </li>
          <?php endforeach ?>
        </ul>
      </div>
    <?php endif ?>
    <?php if(!in_array("pianoroll",$hide)): ?>
      <div class="pianoroll-container">

        <div class="pianoroll">
          <div class="row">
            <div class="notes">
              <div>C+</div>
              <div>B</div>
              <div>A</div>
              <div>G</div>
              <div>F</div>
              <div>E</div>
              <div>D</div>
              <div>C</div>
            </div>
            <svg viewBox="0 0 10000 80" width="100%" height="200" preserveAspectRatio="none">
              <!-- <rect x="0" y="70" width="10" height="10" /> -->
            </svg>
          </div>
          <textarea></textarea>
          <button id="savebutton">Save to selected track <span></span></button>
          <button id="showbutton">Show JSON in SVG</button>
        </div>

        <?php endif ?>
      <?php if(!in_array("keyboard",$hide)): ?>
        <div class="keyboard">
          <div>C<span>1</span></div>
          <div>D<span>2</span></div>
          <div>E<span>3</span></div>
          <div>F<span>4</span></div>
          <div>G<span>5</span></div>
          <div>A<span>6</span></div>
          <div>B<span>7</span></div>
          <div>C+<span>8</span></div>
        </div>
        <?php endif ?>

      </div>

    </div>
  </div>
</body>

</html>
<script src="valami.js"></script>