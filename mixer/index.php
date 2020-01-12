<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Mixer</title>
  <link rel="stylesheet" href="http://webprogramozas.inf.elte.hu/webprog/zh/mixer/mixer.css">
</head>

<?php
//1. feladathoz előkészítés
$avg = 100;
if(isset($_GET["bars"]) && intval($_GET["bars"]) > 0){
  $avg = intval($_GET["bars"]);
}

//2. feladathoz előkészítés
$tracks = json_decode(file_get_contents("tracks.object.json"));
$trackAmount = 0;

//3. feladathoz előkészítés
$aktTrack = null;
if(isset($_GET["id"])){
  $i = $_GET["id"];
  $aktTrack = $tracks->$i;
}
?>

<body>
  <div id="main">
    <nav>
      <h3>Mixer</h3>
      <ul>
        <li><a href="new.php">Add new track...</a></li>
        <li><button>Save <span></span></button></li>
        <li><span>⟵,⟶, Space</span> Select tracks</li>
        <li><span>↑,↓</span> Change selected tracks</li>
        <li><span>s</span>: Select all</li>
        <li><span>d</span>: Deselect all</li>
      </ul>
    </nav>
    <section id="tracks">
      <?php foreach($tracks as $track): $trackAmount++; ?>
        <div class="track" data-id="<?=$track->id?>">
          <header><a href="index.php?id=<?=$track->id?>"><?=$track->name?></a></header>
          <span id="thor-span-<?=$track->id?>" style="background-color: hsl(<?=100-$track->volume?>,<?=$track->volume?>%,50%);"><?=$track->volume?></span>
          <input class="thor-input" data-id="<?=$track->id?>" type="range" orient="vertical" min="0" max="100" step="5" value="<?=$track->volume?>">
          <input type="checkbox">
        </div>
      <?php endforeach ?>
    </section>
    <?php if($aktTrack != null): ?>
      <section id="details">
        <dl>
          <dt>Name</dt>
          <dd><?=$aktTrack->name?></dd>
          <dt>Filename</dt>
          <dd><?=$aktTrack->filename?></dd>
          <dt>Balance</dt>
          <dd><?=$aktTrack->balance?></dd>
          <dt>Volume</dt>
          <dd><?=$aktTrack->volume?></dd>
        </dl>
        <div class="filters">
          <?php foreach($aktTrack->filters as $filter): ?>
            <span><?=$filter?></span>
          <?php endforeach ?>
        </div>
      </section>
    <?php endif ?>
    <section id="status">
      Number of tracks: <?=$trackAmount?>
      Average volume:
      <?php for($i = 0; $i < $avg; $i++):?><span>|</span><?php endfor ?>
    </section>
  </div>
</body>
<script src="volume.js"></script>
</html>