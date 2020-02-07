<?php
require_once("adatkezeles.php");
$dalok = dalok();
function likep($cim){
    return round((dalLiked($cim))/(dalLiked($cim)+dalDisliked($cim))*100,1);
}function dislikep($cim){
    return 100-likep($cim);
}
?>

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
<script>
</script>

<table>
<?php foreach($dalok as $dal): ?>
    <?php if(!isset($_GET["szuro"]) || 
            ($_GET["szuro"] == "film" && $_GET["ertek"] == $dal->film) ||
            ($_GET["szuro"] == "enekes" && $_GET["ertek"] == $dal->enekes) ||
            ($_GET["szuro"] == "felhasznalo" && $_GET["ertek"] == $dal->felhasznalo)
    ): ?>
        <tr>
            <td id="cim_<?=str_replace(' ','_',$dal->cim)?>"
            <?php if(liked($_SESSION["uname"],$dal->cim)): ?> class="liked"
            <?php elseif(disliked($_SESSION["uname"],$dal->cim)): ?> class="disliked"
            <?php endif ?>
            ><?=$dal->cim?></td>
            <td><a href="index.php?szuro=film&ertek=<?=$dal->film?>"><?=$dal->film?></a></td>
            <td><a href="index.php?szuro=enekes&ertek=<?=$dal->enekes?>"><?=$dal->enekes?></a></td>
            <td><a href="index.php?szuro=felhasznalo&ertek=<?=$dal->felhasznalo?>"><?=$dal->felhasznalo?></a></td>
            <td><a href="#" id="like_<?=str_replace(' ','_',$dal->cim)?>">Like</a></td>
            <td><a href="#" id="dislike_<?=str_replace(' ','_',$dal->cim)?>">Dislike</a></td> 
            <td>
                <?php
                $osszeg = dalLiked($dal->cim)+dalDisliked($dal->cim);
                if($osszeg == 0): ?>
                    Nincs adat
                <?php else: ?>
                    <?php if(dalDisliked($dal->cim) > 0): ?>
                        <div id="dislike_skala_<?=str_replace(' ','_',$dal->cim)?>" class="disliked" style="display: inline-block; width:<?=dislikep($dal->cim)-1?>%;">:(</div>
                    <?php else: ?>
                        <div id="dislike_skala_<?=str_replace(' ','_',$dal->cim)?>" class="disliked" style="display: none;">:(</div>
                    <?php endif ?>

                    <?php if(dalLiked($dal->cim) > 0): ?>
                        <div id="like_skala_<?=str_replace(' ','_',$dal->cim)?>" class="liked" style="display: inline-block; width:<?=likep($dal->cim)-1?>%;">:)</div>
                    <?php else: ?>
                        <div id="like_skala_<?=str_replace(' ','_',$dal->cim)?>" class="liked" style="display: none;">:(</div>
                    <?php endif ?>
                <?php endif ?>
            </td>          
        </tr>
        <script>
            document.querySelector('#like_<?=str_replace(' ','_',$dal->cim)?>').addEventListener('click',()=>{
                let xhr = new XMLHttpRequest();
                xhr.open('GET','like.php?type=like&cim=<?=$dal->cim?>',false);
                xhr.send(null);
                
                let xhr2 = new XMLHttpRequest();
                xhr2.open('GET','ajax.php?fgv=liked&param1=<?=$_SESSION["uname"]?>&param2=<?=$dal->cim?>',false);
                xhr2.send(null);
                if(xhr2.responseText == 'true'){
                    document.querySelector('#cim_<?=str_replace(' ','_',$dal->cim)?>').classList.remove('disliked');
                    document.querySelector('#cim_<?=str_replace(' ','_',$dal->cim)?>').classList.add('liked');
                }else{
                    document.querySelector('#cim_<?=str_replace(' ','_',$dal->cim)?>').classList.remove('liked');
                }

                let xhr3 = new XMLHttpRequest();
                xhr3.open('GET','ajax.php?fgv=dalLiked&param1=<?=$dal->cim?>',false);
                xhr3.send(null);
                let xhr4 = new XMLHttpRequest();
                xhr4.open('GET','ajax.php?fgv=dalDisliked&param1=<?=$dal->cim?>',false);
                xhr4.send(null);
                let l = parseInt(xhr3.responseText);
                let d = parseInt(xhr4.responseText);
                
                if(l == 0){
                    document.querySelector('#like_skala_<?=str_replace(' ','_',$dal->cim)?>').style = "display: none;";
                }else{
                    document.querySelector('#like_skala_<?=str_replace(' ','_',$dal->cim)?>').style = "display: inline-block; width: " + ((l/(d+l))*100) + "%;";
                }
                if(xhr4.responseText == '0'){
                    document.querySelector('#dislike_skala_<?=str_replace(' ','_',$dal->cim)?>').style = "display: none;";
                }else{
                    document.querySelector('#dislike_skala_<?=str_replace(' ','_',$dal->cim)?>').style = "display: inline-block; width: " + ((d/(d+l))*100) + "%;";
                }
            });

            document.querySelector('#dislike_<?=str_replace(' ','_',$dal->cim)?>').addEventListener('click',()=>{
                let xhr = new XMLHttpRequest();
                xhr.open('GET','like.php?type=dislike&cim=<?=$dal->cim?>',false);
                xhr.send(null);
                
                let xhr2 = new XMLHttpRequest();
                xhr2.open('GET','ajax.php?fgv=disliked&param1=<?=$_SESSION["uname"]?>&param2=<?=$dal->cim?>',false);
                xhr2.send(null);
                if(xhr2.responseText == 'true'){
                    document.querySelector('#cim_<?=str_replace(' ','_',$dal->cim)?>').classList.remove('liked');
                    document.querySelector('#cim_<?=str_replace(' ','_',$dal->cim)?>').classList.add('disliked');
                }else{
                    document.querySelector('#cim_<?=str_replace(' ','_',$dal->cim)?>').classList.remove('disliked');
                }

                let xhr3 = new XMLHttpRequest();
                xhr3.open('GET','ajax.php?fgv=dalLiked&param1=<?=$dal->cim?>',false);
                xhr3.send(null);
                let xhr4 = new XMLHttpRequest();
                xhr4.open('GET','ajax.php?fgv=dalDisliked&param1=<?=$dal->cim?>',false);
                xhr4.send(null);
                let l = parseInt(xhr3.responseText);
                let d = parseInt(xhr4.responseText);
                
                if(l == 0){
                    document.querySelector('#like_skala_<?=str_replace(' ','_',$dal->cim)?>').style = "display: none;";
                }else{
                    document.querySelector('#like_skala_<?=str_replace(' ','_',$dal->cim)?>').style = "display: inline-block; width: " + ((l/(d+l))*100) + "%;";
                }
                if(xhr4.responseText == '0'){
                    document.querySelector('#dislike_skala_<?=str_replace(' ','_',$dal->cim)?>').style = "display: none;";
                }else{
                    document.querySelector('#dislike_skala_<?=str_replace(' ','_',$dal->cim)?>').style = "display: inline-block; width: " + ((d/(d+l))*100) + "%;";
                }
            });
        </script>
    <?php endif ?>
<?php endforeach ?>
</table>