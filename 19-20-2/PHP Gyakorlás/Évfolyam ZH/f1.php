<?php

    //Ami épp eszembejutott, úgy oldottam meg.
    //Van ahol két módszert is leírtam, mindegy melyiket használjátok.
    //Ennek a megoldására is végtelen sok megközelítés létezik, mint mindenre webfejlesztésben.

    $voltHiba = false;
    $hibak = [];
    $voltSzuletes = isset($_POST["szuletes"]) && trim($_POST["szuletes"]) != "";
    $szuletesString = "";
    $szuletesDatum = [];
    $voltJogositvany = isset($_POST["jogositvany"]) && trim($_POST["jogositvany"]) != "";
    $jogositvanyString = "";
    $jogositvanyDatum = [];

    if($_SERVER["REQUEST_METHOD"] == "POST"){

        //születési dátum megadva
        if(!$voltSzuletes){
            $voltHiba = true;
            $hibak[] = "A születési idő megadása kötelező!";
        }else{

            /* születési dátum formátuma helyes (egyik megoldás)
            $szuletesDatum = explode("-",$_POST["szuletes"]);
            if(count($szuletesDatum) != 3 || !checkdate($szuletesDatum[1],$szuletesDatum[2],$szuletesDatum[0])){
                $voltHiba = true;
                $hibak[] = "A születési idő formátuma helytelen!";
            }else{
                $szuletesString = $_POST["szuletes"];
            }
            */

            //születési dátum formátuma helyes (másik megoldás)
            $szulD = strtotime($_POST["szuletes"]);
            if(!$szulD){
                $voltHiba = true;
                $hibak[] = "A születési idő formátuma helytelen!";
            }else{
                $szuletesString = $_POST["szuletes"];
            }
        }

        //jogosítvány kiállításának dátuma megadva
        if(!$voltJogositvany){
            $voltHiba = true;
            $hibak[] = "A jogosítvány kiállítási dátumának megadása kötelező!";
        }else{
            /* jogosítvány kiállítási dátumának formátuma helyes (egyik megoldás)
            $jogositvanyDatum = explode("-",$_POST["jogositvany"]);
            if(count($jogositvanyDatum) != 3 || !checkdate($jogositvanyDatum[1],$jogositvanyDatum[2],$jogositvanyDatum[0])){
                $voltHiba = true;
                $hibak[] = "A jogosítvány kiállítási dátumának formátuma helytelen!";
            }else{
                $jogositvanyString = $_POST["jogositvany"];
            }
            */

            //jogosítvány kiállítási dátumának formátuma helyes (másik megoldás)
            $jogD = strtotime($_POST["jogositvany"]);
            if(!$jogD){
                $voltHiba = true;
                $hibak[] = "A jogosítvány kiállítási dátumának formátuma helytelen!";
            }else{
                $jogositvanyString = $_POST["jogositvany"];
            }
        }

        if(!$voltHiba){
            //jogosítvány nincs korábban, mint a születés (egyik megoldás)
            /*if(
                ($szuletesDatum[0] > $jogositvanyDatum[0]) ||
                ($szuletesDatum[0] == $jogositvanyDatum[0] && $szuletesDatum[1] > $jogositvanyDatum[1]) ||
                ($szuletesDatum[0] == $jogositvanyDatum[0] && $szuletesDatum[1] == $jogositvanyDatum[1] && $szuletesDatum[2] > $jogositvanyDatum[2]) 
            ){
                $voltHiba = true;
                $hibak[] = "Nem szerezhetsz jogosítványt azelőtt, hogy megszületnél!";
            }*/


            //jogosítvány nincs korábban, mint a születés (másik megoldás)
            /*
            $szulD = strtotime($szuletesString); //ez a két sor kiszedhető
            $jogD  = strtotime($jogositvanyString); //ha korábban a második megoldást használtuk
            */
            if($szulD > $jogD){
                $voltHiba = true;
                $hibak[] = "Nem szerezhetsz jogosítványt azelőtt, hogy megszületnél!";
            }
        }
    }
?>

<form method="POST">
    Születési dátum: <input name="szuletes" type="date" value=<?=$szuletesString?>><br>
    Jogosítvány kiállításának dátuma: <input name="jogositvany" type="date" value=<?=$jogositvanyString?>><br>
    <input type="submit">
</form>

<?php if($voltHiba): ?>
    <ul>
        <?php foreach($hibak as $hiba): ?>
            <li><?=$hiba?></li>
        <?php endforeach ?>
    </ul>
<?php elseif($_SERVER["REQUEST_METHOD"] == "POST"):
        /*  
        if($jogD - $szulD > 60)
            Ennél a módszernél arra kell figyelni,
            hogy ha kivonsz két dátumot, azt másodpercekben adja meg,
            szóval még fel kell szorozni, hogy éveket kapj, így NEM JÓ A 60.
        
        $szuletesDatum és $jogositvanyDatum
            Ennél a módszernél logikusan kivonod egymásbólk a megfelelő indexű elemeket.
            
        Mutatok egy pár egyéb függvényt és típust, csak hogy minél többfélével találkozzatok.
        Ez a legbiztonságosabb, mert figyelembe tudja venni a szökőéveket meg minden,
        de az előző kettő közül is bármelyik jó volt a ZH-n.
        A date_diff függvényt érdemes megnézni, nagyon sok infót ad.
        var_dump(date_diff($date1,$date2)) vagy $date1->diff($date2)

        A DateInterval is hasznos lehet a későbbiekben.
        Mindig P-vel kezdődik a benne lévő string, utána Y évek, M hónapok stb, bármit kihagyhatsz
        pl.: P10D az 10 nap, P5Y3M2D 5 év, 3 hónap 2 nap
        Ha időt is teszel bele, akkor a T betű választja el
        pl.: PT5H az 5 óra, P3Y10M17DT3H15M45S az 3 év, 10 hónap, 17 nap, 3 óra, 15 perc, 45 másodperc
        */
        $szulDatum  = new DateTime($szuletesString);
        $jogsiDatum = new DateTime($jogositvanyString);
        $most = new DateTime();
        $kulonbsegEvekben = date_diff($szulDatum,$jogsiDatum)->y;
        $ervenyessegHossza = $kulonbsegEvekben < 60 ? new DateInterval("P10Y") : new DateInterval("P5Y");

        /* Ugyanaz mint a kérdőjeles, csak kibontva
        if($kulonbsegEvekben < 60){
            $ervenyessegHossza = new DateInterval("P10Y");
        }else{
            $ervenyessegHossza = new DateInterval("P5Y");
        }
        */

        $jogsiDatum->add($ervenyessegHossza);
        $lejarat = $most < $jogsiDatum ? $jogsiDatum->format("Y M d.") : "Lejárt!";
    ?>

    <div>
        Életkor jogosítvány készítésekor: <?=$kulonbsegEvekben?> <br>
        Jogosítvány lejár: <?=$lejarat?>
    </div>
<?php endif ?>