<?php
require_once("adatkezeles.php");
$dalok = dalok();
function likep($cim){
    return round((dalLiked($cim))/(dalLiked($cim)+dalDisliked($cim))*100,1);
}function dislikep($cim){
    return 100-likep($cim);
}
?>
<script>
let like, dislike;
</script>
<style>
table, tr, td{
    border: 1px solid black;
    border-collapse: collapse;
}
td{
    width: 100px;
}
.liked{
    background-color: green;
}
.disliked{
    background-color: red;
}
</style>

<form action="ujdal.php">
    Cím: <input name="cim">
    Film: <input name="film">
    Előadó: <input name="eloado">
    <input type="submit" value="Új dal">
</form>

<br><br>

<a href="index.php">Szűrők ürít</a>
<table>
<?php foreach($dalok as $dal): ?>
    <?php if(!isset($_GET["szuro"]) || 
            ($_GET["szuro"] == "film" && $_GET["ertek"] == $dal->film) ||
            ($_GET["szuro"] == "enekes" && $_GET["ertek"] == $dal->enekes) ||
            ($_GET["szuro"] == "felhasznalo" && $_GET["ertek"] == $dal->felhasznalo)
    ): ?>
        <tr>
            <td id="cim_<?=str_replace(' ', '_', $dal->cim)?>"
            <?php if(liked($_SESSION["uname"],$dal->cim)): ?> class="liked"
            <?php elseif(disliked($_SESSION["uname"],$dal->cim)): ?> class="disliked"
            <?php endif ?>
            ><?=$dal->cim?></td>
            <td><a href="index.php?szuro=film&ertek=<?=$dal->film?>"><?=$dal->film?></a></td>
            <td><a href="index.php?szuro=enekes&ertek=<?=$dal->enekes?>"><?=$dal->enekes?></a></td>
            <td><a href="index.php?szuro=felhasznalo&ertek=<?=$dal->felhasznalo?>"><?=$dal->felhasznalo?></a></td>
            <td><a href="#" class="like" id="like_<?=str_replace(' ', '_', $dal->cim)?>">Like</a></td>
            <td><a href="#" class="dislike" id="dislike_<?=str_replace(' ', '_', $dal->cim)?>">Dislike</a></td>

            <td>
                <?php
                $osszeg = dalLiked($dal->cim)+dalDisliked($dal->cim);
                if($osszeg == 0): ?>
                    Nincs adat
                <?php else: ?>
                    <?php if(dalDisliked($dal->cim) > 0): ?>
                        <div id="dislikearany_<?=str_replace(' ', '_', $dal->cim)?>" class="disliked" style="display: inline-block; width:<?=dislikep($dal->cim)-1?>%;">:(</div>
                    <?php endif ?>
                    <?php if(dalLiked($dal->cim) > 0): ?>
                        <div id="likearany_<?=str_replace(' ', '_', $dal->cim)?>" class="liked" style="display: inline-block; width:<?=likep($dal->cim)-1?>%;">:)</div>
                    <?php endif ?>
                <?php endif ?>
            </td> 
            <script>
                like = document.querySelector('#like_<?=str_replace(' ', '_', $dal->cim)?>');
                console.log('like_<?=str_replace(' ', '_', $dal->cim)?>');
                like.addEventListener('click',()=>{
                    event.preventDefault();
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET','ajax.php?tipus=kedveli&uname=<?=$_SESSION["uname"]?>&dal=<?=$dal->cim?>',true);
                    xhr.addEventListener('readystatechange',()=>{
                        if(xhr.readyState == 4 && xhr.status == 200){
                            if(xhr.responseText == 'zold'){
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.remove('disliked');
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.add('liked');
                            }else if(xhr.responseText == 'piros'){
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.remove('liked');
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.add('disliked');
                            }else if(xhr.responseText == 'torol_piros'){
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.remove('disliked');
                            }else{
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.remove('liked');
                            }
                            event.preventDefault();

                            let xhr2 = new XMLHttpRequest();
                            xhr2.open('GET','ajax.php?tipus=dislikefrissit&dal=<?= $dal->cim?>',false);
                            xhr2.send();
                            console.log(xhr2.responseText);
                            document.querySelector('#dislikearany_<?=str_replace(' ', '_', $dal->cim)?>').style = 'width: '+(xhr2.responseText-1)+'%;';

                            xhr2.open('GET','ajax.php?tipus=likefrissit&dal=<?= $dal->cim?>',false);
                            xhr2.send();
                            console.log(xhr2.responseText);
                            document.querySelector('#likearany_<?=str_replace(' ', '_', $dal->cim)?>').style = 'width: '+(xhr2.responseText-1)+'%;';
                        }
                    });
                    xhr.send(null);
                });

                dislike = document.querySelector('#dislike_<?=str_replace(' ', '_', $dal->cim)?>');
                console.log('dislike_<?=str_replace(' ', '_', $dal->cim)?>');
                dislike.addEventListener('click',()=>{
                    event.preventDefault();
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET','ajax.php?tipus=nemkedveli&uname=<?=$_SESSION["uname"]?>&dal=<?=$dal->cim?>',true);
                    xhr.addEventListener('readystatechange',()=>{
                        if(xhr.readyState == 4 && xhr.status == 200){
                            if(xhr.responseText == 'zold'){
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.remove('disliked');
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.add('liked');
                            }else if(xhr.responseText == 'piros'){
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.remove('liked');
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.add('disliked');
                            }else if(xhr.responseText == 'torol_piros'){
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.remove('disliked');
                            }else{
                                document.querySelector('#cim_<?=str_replace(' ', '_', $dal->cim)?>').classList.remove('liked');
                            }
                            event.preventDefault();

                            let xhr2 = new XMLHttpRequest();
                            xhr2.open('GET','ajax.php?tipus=dislikefrissit&dal=<?= $dal->cim?>',false);
                            xhr2.send();
                            console.log(xhr2.responseText);
                            document.querySelector('#dislikearany_<?=str_replace(' ', '_', $dal->cim)?>').style = 'width: '+(xhr2.responseText-1)+'%;';

                            xhr2.open('GET','ajax.php?tipus=likefrissit&dal=<?= $dal->cim?>',false);
                            xhr2.send();
                            console.log(xhr2.responseText);
                            document.querySelector('#likearany_<?=str_replace(' ', '_', $dal->cim)?>').style = 'width: '+(xhr2.responseText-1)+'%;';
                        }
                    });
                    xhr.send(null);
                });

            </script>         
        </tr>
    <?php endif ?>
<?php endforeach ?>
</table>