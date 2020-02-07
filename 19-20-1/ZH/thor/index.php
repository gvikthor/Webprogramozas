    <!DOCTYPE html>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="http://webprogramozas.inf.elte.hu/webprog/zh/thor/index.css">

    <nav id="mohmas_navbar" class="navbar navbar-dark bg-primary">
    <a class="navbar-brand text-light" href="index.php">Thor diétája</a>
    <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="ujmenu.php">Új menü</a>
        </li>
    </ul>
    <form class="form-inline">
        <span class="navbar-text .text-light">Aktuális idő</span>
        <input id="mohmas_ido" class="form-control mr-sm-2" type="time" value=<?=date("G:i")?>>
    </form>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md">
            <h2>Menü</h2>
            <form action="index.php" method="get">
                <div class="form-row">
                <div class="col-sm-10">
                    <input type="date" name="nap" class="form-control" <?php if(isset($_GET["nap"])): ?> value="<?=$_GET["nap"]?>"  <?php else: ?> placeholder="YYYY-MM-DD" <?php endif ?>">
                </div>
                <div class="col-sm-2">
                    <button type="submit" class="btn btn-secondary w-100">Szűr</button>
                </div>
                </div>
            </form>
            <div class="card">
                <ul class="list-group list-group-flush">
                    <?php 
                    $menu = json_decode(file_get_contents("menu.json"));
                    foreach($menu as $etkezes):
                    ?>
                        <?php if(!isset($_GET["nap"]) || str_replace(".","-",$etkezes->nap) == $_GET["nap"]): ?>
                            <li class="list-group-item list-group-item-action <?php if($etkezes->aktiv): ?> active <?php endif ?>" data-id="<?=$etkezes->id?>">

                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">
                                        <?php
                                            $mettol = explode(":",$etkezes->mettol);
                                            $meddig = explode(":",$etkezes->meddig);
                                        ?>
                                        <?php if($mettol[0] < 10):?>0<?php endif ?><?=$mettol[0]?>:<?=$mettol[1]?>-<?php if($meddig[0] < 10):?>0<?php endif ?><?=$meddig[0]?>:<?=$meddig[1]?>
                                    </h5>
                                    <small><?=$etkezes->kcal?> kCal</small>
                                </div>

                                <p class="mb-1"><?=$etkezes->etelek?></p>

                                <div class="d-flex w-100 justify-content-between">
                                    <small><?= str_replace(".","-",$etkezes->nap)?></small>
                                    <?php if($etkezes->aktiv): ?> <button class="btn btn-secondary btn-sm mohmas_megeves">Megevés</button> <?php endif ?>
                                </div>
                            </li>
                        <?php endif ?>
                    <?php endforeach ?>
                </ul>
            </div>
        </div>

        <div class="col-md">
        <h2>Thor</h2>
        <div class="card thor" id="mohmas_thorkep">
            <img src="http://webprogramozas.inf.elte.hu/webfejl2/zh/thor/thor1.jpg" class="card-img">
        </div>

        <h2>Sport</h2>
        <div id="mohmas_sport" class="card sport bg-primary">
            <div class="giant" style="top: 10%; left: 90%"></div>
            <div class="giant" style="top: 34%; left: 30%"></div>
            <div class="giant" style="top: 87%; left: 24%"></div>
            <div class="giant" style="top: 63%; left: 66%"></div>
            <div class="giant" style="top: 54%; left: 37%"></div>
            <div class="giant" style="top: 41%; left: 18%"></div>
            <div class="giant" style="top: 29%; left: 23%"></div>
            <div class="giant" style="top: 65%; left: 42%"></div>
            <div class="giant" style="top: 90%; left: 64%"></div>
            <div class="giant" style="top: 20%; left: 35%"></div>
            <div class="giant" style="top: 19%; left: 71%"></div>
            <div class="giant" style="top: 46%; left: 85%"></div>
            <div class="giant" style="top: 76%; left: 90%"></div>
            <div class="giant" style="top: 44%; left: 27%"></div>
            <div class="thor"></div>
        </div>
        </div>
    </div>
    </div>

    <script>
        let sport = document.getElementById('mohmas_sport');
        sport.addEventListener('click',()=>{
            let x = (((event.clientX - sport.getBoundingClientRect().x) / sport.getBoundingClientRect().width)*100);
            let y = (((event.clientY - sport.getBoundingClientRect().y) / sport.getBoundingClientRect().height)*100);
            let thor = document.querySelectorAll('.thor')[document.querySelectorAll('.thor').length-1];
            thor.style = 'left: '+x+'%; top: '+y+'%;';

            let giants = document.querySelectorAll('.giant');
                console.log(thor.getBoundingClientRect().x + ' ' + thor.getBoundingClientRect().width);
            for(giant of giants){
            }
        });
        document.getElementById('mohmas_ido').addEventListener('change',()=>{
            let ido = document.getElementById('mohmas_ido').value;
            if((ido.split(':'))[0] < 8 || (ido.split(':'))[0] >= 18 ){
                console.log('alma')
                document.getElementById('mohmas_navbar').classList.add('bg-danger');
                document.getElementById('mohmas_navbar').classList.remove('bg-primary');
                let gombok = document.querySelectorAll('.mohmas_megeves');
                for(gomb of gombok){
                    gomb.disabled = true;
                }
                document.getElementById('mohmas_thorkep').innerHTML = '<img src="http://webprogramozas.inf.elte.hu/webfejl2/zh/thor/thor3.jpg" class="card-img">'
            }else{
                document.getElementById('mohmas_navbar').classList.add('bg-primary');
                document.getElementById('mohmas_navbar').classList.remove('bg-danger');
                let gombok = document.querySelectorAll('.mohmas_megeves');
                for(gomb of gombok){
                    gomb.disabled = false;
                }
                document.getElementById('mohmas_thorkep').innerHTML = '<img src="http://webprogramozas.inf.elte.hu/webfejl2/zh/thor/thor1.jpg" class="card-img">';
            }
        });
    </script>
