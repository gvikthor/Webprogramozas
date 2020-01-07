<!DOCTYPE html>
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="http://webprogramozas.inf.elte.hu/webprog/zh/avengers/index.css">

<div class="container-fluid">
  <div class="row">
    <div class="col-md">
      <h2>Avengers</h2>
      <div class="card">
        <div class="card-body">
          <p class="card-text d-flex justify-content-end">
            <span class="mx-1 badge badge-primary">Strength</span>
            <span class="mx-1 badge badge-success">Speed</span>
            <span class="mx-1 badge badge-danger">Durablity</span>
          </p>
        </div>
        <ul class="list-group list-group-flush avengers-list">
            <?php
                $heroes = json_decode(file_get_contents("stats.json"));
                foreach($heroes as $hero):
                ?>
                    <li class="list-group-item" data-id="<?=$hero->id ?>">
                        <div class="d-flex align-items-center p-1">
                            <span class="avenger <?=str_replace(" ", "-",strtolower($hero->name)) ?>"></span>
                            <h5 class="m-2 flex-fill">
                                <a href="card.php?id=<?=$hero->id ?>">
                                    <?=$hero->name ?>
                                </a>
                                <small class="text-muted">
                                    <?=$hero->real_name ?>
                                    <i  <?php if($hero->terrial): ?>class="fas fa-globe-africa"<?php else: ?> class="fas fa-rocket" <?php endif ?>></i>
                                </small>
                            </h5>
                            <div class="d-flex flex-nowrap">
                                <span class="mx-1 badge badge-primary"><?=$hero->strength ?></span>
                                <span class="mx-1 badge badge-success"><?=$hero->speed ?></span>
                                <span class="mx-1 badge badge-danger"><?=$hero->durability ?></span>
                            </div>
                        </div>
                        <img src="http://webprogramozas.inf.elte.hu/webfejl2/zh/avengers/noise.png">
                    </li>
                <?php endforeach ?>
        </ul>
      </div>
    </div>

    <div class="col-md">
    <h2>Missions</h2>
      <div class="card mission-form">
        <h4>New mission</h4>
        <div id="mormi_hiba"></div>
        <form action="index.php" method="get" class="card-body">
          <div class="form-group row">
            <label for="name" class="col-sm-5 col-form-label">Name</label>
            <input type="text" name="name" class="form-control col-sm-7" id="name">
          </div>
          <div class="form-group">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="terrial" id="terrial1" value="1">
              <label class="form-check-label" for="terrial1">Terrial</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="terrial" id="terrial2" value="0">
              <label class="form-check-label" for="terrial2">Space</label>
            </div>
          </div>
          <div class="form-group row">
            <label for="range1" class="col-sm-5 col-form-label">Strength</label>
            <input type="range" name="strength" class="form-control col-sm-5" id="range1" min="1" max="100">
            <span class="col-sm-2" id="r1"></span>
          </div>
          <div class="form-group row">
            <label for="range2" class="col-sm-5 col-form-label">Speed</label>
            <input type="range" name="speed" class="form-control col-sm-5" id="range2" min="1" max="100">
            <span class="col-sm-2" id="r2"></span>
          </div>
          <div class="form-group row">
            <label for="range3" class="col-sm-5 col-form-label">Durability</label>
            <input type="range" name="durability" class="form-control col-sm-5" id="range3" min="1" max="100">
            <span class="col-sm-2" id="r3"></span>
          </div>
          <div class="form-group row">
            <label for="avenger1" class="col-sm-5 col-form-label">Avenger1</label>
            <input type="text" name="avenger1" class="form-control col-sm-6" id="avenger1">
            <span class="avenger"></span>
          </div>
          <div class="form-group row">
            <label for="avenger2" class="col-sm-5 col-form-label">Avenger2</label>
            <input type="text" name="avenger2" class="form-control col-sm-6" id="avenger2">
            <span class="avenger"></span>
          </div>
          <div class="form-group row">
            <button id="mormi_submit" type="submit" class="btn btn-primary">New mission</button>
          </div>
        </form>
      </div>

      <div class="card">
        <h4>Mission list</h4>
        <ul class="list-group list-group-flush mission-list">
        <?php
            $quests = json_decode(file_get_contents("quest.json"));
            foreach($quests as $quest):
            ?>
              <li class="list-group-item" data-id="<?=$quest->id ?>">
                <div class="d-flex align-items-center p-1">
                  <h5 class="m-2 flex-fill">
                    <?=$quest->name ?>
                    <small class="text-muted">
                      <i <?php if($quest->terrial): ?>class="fas fa-globe-africa"<?php else: ?> class="fas fa-rocket" <?php endif ?>></i>
                    </small>
                  </h5>
                  <div>
                    <span class="mx-1 badge badge-primary"><?=$quest->strength ?></span>
                    <span class="mx-1 badge badge-success"><?=$quest->speed ?></span>
                    <span class="mx-1 badge badge-danger"><?=$quest->durability ?></span>
                  </div>
                  <span class="mx-1 avenger <?=str_replace(" ", "-",strtolower($quest->avenger1)) ?>"></span>
                  <span class="mx-1 avenger <?=str_replace(" ", "-",strtolower($quest->avenger2)) ?>"></span>
                </div>
              </li>
        <?php endforeach ?>
        </ul>
      </div>
    </div>

    <div class="col-md">
      <h2>Thanos</h2>
      <div class="card thanos">
        <img src="http://webprogramozas.inf.elte.hu/webfejl2/zh/avengers/gauntlet.jpg" class="card-img thanos">
        <div class="stone-place stone1">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone2">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone3">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone4">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone5">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone6">
          <div class="stone"></div>
        </div>
        <div class="gauntlet"></div>
      </div>
    </div>
  </div>
</div>

<?php 
    $hiba = "";
    //Name
    if( isset($_GET["name"]) && trim($_GET["name"] == "")){
        $hiba  = $hiba . "Name is required <br>"; 
    }
    
    //Terrial
    if( !isset($_GET["terrial"])){
        $hiba  = $hiba . "Terrial is required <br>";
    }
    
    //Strength
    if(isset($_GET["strength"])){
        if($_GET["strength"] == ""){
            $hiba  = $hiba . "Strength should be between 1 and 100 <br>";
        }else if(!is_numeric($_GET["strength"])){
            $hiba  = $hiba . "Strength should be an integer <br>";
        }else if($_GET["strength"] < 1 || $_GET["strength"] > 100){
            $hiba  = $hiba . "Strength is required <br>";
            
        } 
    }
    
    //Speed
    if(isset($_GET["speed"])){
        if($_GET["speed"] == ""){
            $hiba  = $hiba . "Speed should be between 1 and 100 <br>";
        }else if(!is_numeric($_GET["speed"])){
            $hiba  = $hiba . "Speed should be an integer <br>";
        }else if($_GET["speed"] < 1 || $_GET["speed"] > 100){
            $hiba  = $hiba . "Speed is required <br>";
            
        }
    }
    
    //Durability
    if(isset($_GET["durability"])){
        if($_GET["durability"] == ""){
            $hiba  = $hiba . "Durability should be between 1 and 100 <br>";
        }else if(!is_numeric($_GET["durability"])){
            $hiba  = $hiba . "Durability should be an integer <br>";
        }else if($_GET["durability"] < 1 || $_GET["durability"] > 100){
            $hiba  = $hiba . "Durability is required <br>";
            
        }
    }
    
    //Avenger1
    if(isset($_GET["avenger1"])){
        if($_GET["avenger1"] == ""){
            $hiba  = $hiba . "Avenger1 is required <br>";
        }else if(preg_match('/[A-Z]\s/',$_GET["avenger1"]) != 0){
            $hiba  = "Avenger1s name should be dashed <br>" . $hiba;
        }
    }
    
    //Avenger2
    if(isset($_GET["avenger2"])){
        if($_GET["avenger2"] == ""){
            $hiba  = $hiba . "Avenger2 is required <br>";
        }else if(preg_match('/[A-Z]\s/',$_GET["avenger2"]) != 0){
            $hiba  = $hiba . "Avenger2s name should be dashed <br>";
        }
    }
?>

<?php if($hiba != ""):?>
    <script>
    <?php if(isset($_GET["terrial"])): ?>
        if(<?=$_GET["terrial"] ?> === 1){document.getElementById('terrial1').checked = true}else{}
        if(<?=$_GET["terrial"] ?> === 0){document.getElementById('terrial2').checked = true}else{}
    <?php endif ?>
    document.getElementById('name').value = "<?=$_GET["name"]?>";
    document.getElementById('avenger1').value = "<?=$_GET["avenger1"]?>";
    document.getElementById('avenger2').value = "<?=$_GET["avenger2"]?>";
    document.getElementById('mormi_hiba').innerHTML = `<div class="alert alert-danger"><?=$hiba?></div>`;
    </script>
    <?php elseif(isset($_GET["avenger1"])): ?>
    <script>
        document.getElementById('mormi_hiba').innerHTML = '<div class="alert alert-success">Sikeres mentés</div>';
        //window.location.href = 'index.php';
    </script>
        <?php
            $bool = true;
            if($_GET["terrial"] == 0){
                $bool = false;
            }
        
            $file = json_decode(file_get_contents("quest.json"));
            $file[] = (object)[
                "id" => count($file)+1,
                "name" => $_GET["name"],
                "terrial" => $bool,
                "strength" => $_GET["strength"],
                "speed" => $_GET["speed"],
                "durability" => $_GET["durability"],
                "avenger1" => $_GET["avenger1"],
                "avenger2" => $_GET["avenger2"]
            ];
            file_put_contents("quest.json", json_encode($file,JSON_PRETTY_PRINT));
        ?>
        
<?php endif ?>

<script>
    
    document.getElementById('r1').innerHTML = document.getElementById('range1').value;
    document.getElementById('r2').innerHTML = document.getElementById('range2').value;
    document.getElementById('r3').innerHTML = document.getElementById('range3').value;

    var inp1 = document.getElementById('range1');
    inp1.addEventListener("input", function () {
        document.getElementById('r1').innerHTML = this.value;
    });
    
    var inp2 = document.getElementById('range2');
    inp2.addEventListener("input", function () {
        document.getElementById('r2').innerHTML = inp2.value;
    });
    
    var inp3 = document.getElementById('range3');
    inp3.addEventListener("input", function () {
        document.getElementById('r3').innerHTML = inp3.value;
    });
    
    /*document.getElementById('mormi_submit').addEventListener('click', ()=>{
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        let name = document.getElementById('name').value;
        let terrial1 = document.getElementById('terrial1').value;
        let terrial2 = document.getElementById('terrial2').value;
        let range1 = document.getElementById('range1').value;
        let range2 = document.getElementById('range2').value;
        let range3 = document.getElementById('range3').value;
        let avenger1 = document.getElementById('avenger1').value;
        let avenger2 = document.getElementById('avenger2').value;
        
        xhr.open('GET', 'ajax.php?type=urlap&name='+name+'&terrial1='+terrial1+'&terrial2='+terrial2+'&range1='+range1+'&range2='+range2+'&range3='+range3+'&avenger1='+avenger1+'&avenger2='+avenger2, false);
        xhr.send(null);
        console.log(xhr.responseText);
        if(xhr.responseText != "OK"){
            document.getElementById('mormi_hiba').innerHTML = '<div class="alert alert-danger">'+xhr.responseText+'</div>';
        }else{
            document.getElementById('mormi_hiba').innerHTML = '<div class="alert alert-success">Sikeres mentés</div>';
            window.location.href = 'index.php';
        }
    });*/
</script>