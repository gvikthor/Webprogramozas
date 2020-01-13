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
$bars = 100;
if(isset($_GET["bars"]) &&
   is_numeric($_GET["bars"]) &&
   floor($_GET["bars"]) == $_GET["bars"] &&
   $_GET["bars"] > 0){

  $bars = $_GET["bars"];
}

$tracks = json_decode(file_get_contents("tracks.object.json"));
$trackAmount = 0;
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
      <?php foreach($tracks as $track): ?>
        <div class="track" data-id=<?=$track->id?>>
          <header><a href="index.php?id=<?=$track->id?>"><?=$track->name?></a></header>
          <span id="thor-<?=$track->id?>" style="background: hsl(<?=100-$track->volume?>,<?=$track->volume?>%,50%);"><?=$track->volume?></span>
          <input class="thor-input" data-id="thor-<?=$track->id?>" type="range" orient="vertical" min="0" max="100" step="5" value="<?=$track->volume?>">
          <input type="checkbox">
        </div>
        <?php $trackAmount++; ?>
      <?php endforeach ?>
    </section>

    <?php if(isset($_GET["id"])): ?>
      <?php $i = $_GET["id"]?>
      <section id="details">
        <dl>
          <dt>Name</dt>
          <dd><?=$tracks->$i->name?></dd>
          <dt>Filename</dt>
          <dd><?=$tracks->$i->filename?></dd>
          <dt>Balance</dt>
          <dd><?=$tracks->$i->balance?></dd>
          <dt>Volume</dt>
          <dd><?=$tracks->$i->volume?></dd>
        </dl>
        <div class="filters">
        <?php foreach($tracks->$i->filters as $filter): ?>
          <span><?=$filter?></span>
        <?php endforeach ?>
        </div>
      </section>
    <?php endif ?>
    <section id="status">
      Number of tracks: <?=$trackAmount?>
      Average volume:
      <?php for($i = 0; $i < $bars; $i++): ?><span>|</span><?php endfor ?>
    </section>
  </div>
</body>
<script src="volume.js"></script>
</html>