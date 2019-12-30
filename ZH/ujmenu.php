<!DOCTYPE html>
<meta charset="utf-8" />
<link rel="stylesheet" href="http://webprogramozas.inf.elte.hu/webprog/zh/thor/index.css">

<nav class="navbar navbar-dark bg-primary">
<a class="navbar-brand text-light" href="index.php">Thor diétája</a>
<ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link" href="#">Új menü</a>
    </li>
</ul>
</nav>

<div class="container">
<div class="row">
    <div class="col-md">
    <h2>Új menü felvétele</h2>
        <div id="mohmas_hiba"></div>
        <!--div class="alert alert-danger" role="alert">
        Hibaüzenetek
        </div-->

    <form action="" method="post" class="ujmenu">
        <div class="form-group">
        <label for="nap">Nap</label>
        <input type="date" name="nap" class="form-control" id="nap" required>
        </div>
        
        <div class="form-group">
        <label for="mettol">Mettől</label>
        <input type="time" name="mettol" class="form-control" id="mettol" required>
        </div>

        <div class="form-group">
        <label for="meddig">Meddig</label>
        <input type="time" name="meddig" class="form-control" id="meddig" required>
        </div>

        <div class="form-group">
        <label for="etelek">Ételek</label>
        <textarea name="etelek" class="form-control" id="etelek" placeholder="étel1,étel2" required></textarea>
        <small id="emailHelp" class="form-text text-muted">Ételek vesszővel felsorolt neve</small>
        </div>

        <div class="form-group">
        <label for="kcal">kCal</label>
        <input type="number" name="kcal" class="form-control" id="kcal" required>
        </div>
        
        <div class="form-group row">
        <button id="mohmas_submit" type="submit" class="btn btn-primary">Új menü mentése</button>
        </div>
    </form>
    </div>

    <div class="col-md">
    <h2>Ételek</h2>
    <form class="etelek">
        <?php 
        $etelek = json_decode(file_get_contents("etel.json"));
        foreach($etelek as $etel):
        ?>
        <!-- alábbi ismétlendő -->
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="<?=$etel->id?>" value="<?=$etel->nev?>" data-kcal="<?=$etel->kcal?>">
                <label class="form-check-label" for="<?=$etel->id?>"><?=$etel->nev?></label>
            </div>
        <!-- idáig -->
        <?php endforeach ?>
    </form>
    </div>


    <script>
        let etelek = document.querySelectorAll('.form-check-input');
        for(let i = 0; i < etelek.length; i++){
            etelek[i].addEventListener('click',()=>{
                if(etelek[i].checked){
                    if(document.getElementById('etelek').value == ''){
                        document.getElementById('etelek').value = etelek[i].value;
                    }else{
                        document.getElementById('etelek').value += ','+etelek[i].value;
                    }
                    if(document.getElementById('kcal').value == ''){
                        document.getElementById('kcal').value = etelek[i].dataset.kcal;
                    }else{
                        document.getElementById('kcal').value = parseInt(document.getElementById('kcal').value)+parseInt(etelek[i].dataset.kcal);
                    }
                }else{
                    document.getElementById('kcal').value = parseInt(document.getElementById('kcal').value)-parseInt(etelek[i].dataset.kcal);
                    let etelLista = document.getElementById('etelek').value.split(',');
                    let szoveg = '';
                    for(etel of etelLista){
                        if(etel != etelek[i].value){
                            szoveg += etel+',';
                        }
                    }
                    if(szoveg.length > 0){
                        szoveg = szoveg.slice(0, -1); //utolsó vesszőt eltüntetjük
                    }
                    document.getElementById('etelek').value = szoveg;
                }
            });
        }

        document.getElementById('mohmas_submit').addEventListener('click',()=>{
            event.preventDefault();
            console.log("alma");
            let xhr = new XMLHttpRequest();

            let nap = document.getElementById('nap').value;
            let mettol = document.getElementById('mettol').value;
            let meddig = document.getElementById('meddig').value;
            let etelek = document.getElementById('etelek').value;
            let kcal = document.getElementById('kcal').value;

            xhr.open('GET', 'ajax.php?type=urlap&nap='+nap+'&mettol='+mettol+'&meddig='+meddig+'&etelek='+etelek+'&kcal='+kcal, false); 
            xhr.send(null);
            console.log("alma");
            console.log(xhr.responseText);
            console.log("alma");

            if(xhr.responseText != "OK"){
                document.getElementById('mohmas_hiba').innerHTML = '<div class="alert alert-danger" role="alert">'+xhr.responseText+'</div>';
            }else{
                document.getElementById('mohmas_hiba').innerHTML = '';
                window.location.href = 'index.php';
            }
        });
    </script>
</div>
</div>