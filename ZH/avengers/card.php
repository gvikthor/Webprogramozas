<!DOCTYPE html>
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="http://webprogramozas.inf.elte.hu/webprog/zh/avengers/index.css">

<div class="container">
  <div class="row">
    <div class="col-lg">
      <h2>Avengers</h2>
      <div class="card">
        <div class="row no-gutters">
        <?php
                $n = $_GET['id'];
                $heroes = json_decode(file_get_contents("stats.json"));
                foreach($heroes as $hero):
           ?>
           <?php if($hero->id == $n): ?>
                <?php $name = $hero->name ?>
                <?php $real_name = $hero->real_name ?>
                <?php $strength = $hero->strength ?>
                <?php $speed = $hero->speed ?>
                <?php $durability = $hero->durability ?>
                <?php $terrial = $hero->terrial ?>
           <?php endif ?>
           <?php endforeach ?>
          <div class="col-md-3">
            <span class="card-img avenger <?=str_replace(" ", "-",strtolower($name)) ?>" style="width: 180px; height: 240px;">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h3 class="card-title"><?=$name ?></h3>
              <dl class="row">
                <dt class="col-sm-3">Real name</dt>
                <dd class="col-sm-9">
                  <?=$real_name ?>
                </dd>
                <dt class="col-sm-3">Terrial</dt>
                <dd class="col-sm-9">
                  <?php if($terrial): ?>Yes<?php else: ?>No<?php endif ?>
                </dd>
                <dt class="col-sm-3">Strength</dt>
                <dd class="col-sm-9">
                  <span class="badge badge-primary"><?=$strength ?></span>
                </dd>
                <dt class="col-sm-3">Speed</dt>
                <dd class="col-sm-9">
                  <span class="badge badge-success"><?=$speed ?></span>
                </dd>
                <dt class="col-sm-3">Durability</dt>
                <dd class="col-sm-9">
                  <span class="badge badge-danger"><?=$durability ?></span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <a href="http://webprogramozas.inf.elte.hu/hallgatok/i3j3xz/avengers/index.php">Back to the main page</a>
    </div>
  </div>
</div>    