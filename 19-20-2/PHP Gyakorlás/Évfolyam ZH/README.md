<h1 id="javascript-%c3%89vfolyamzh">PHP &Eacute;vfolyamZH</h1>
<h2 id="tudnival%c3%b3k">Tudnival&oacute;k</h2>
<ul>
<li>A z&aacute;rthelyi megold&aacute;s&aacute;ra<span>&nbsp;</span><strong>120 perc</strong><span>&nbsp;</span>&aacute;ll rendelkez&eacute;sre.</li>
<li>Hum&aacute;n seg&iacute;ts&eacute;gen k&iacute;v&uuml;l minden seg&eacute;danyag haszn&aacute;lhat&oacute; (EA slideok, &oacute;rai k&oacute;dok, Google)</li>
<li>A feladatokat a Canvas rendszeren kereszt&uuml;l kell beadni.<span>&nbsp;</span><strong>A rendszer pontban 20:00-kor lez&aacute;r, ezut&aacute;n nincs lehetős&eacute;g bead&aacute;sra</strong>.</li>
<li>A feladatok nem &eacute;p&uuml;lnek egym&aacute;sra,<span>&nbsp;</span><strong>tetszőleges sorrendben</strong><span>&nbsp;</span>megoldhat&oacute;k.</li>
<li>A feladatokat<span>&nbsp;</span><strong>k&uuml;l&ouml;n fileokba</strong><span>&nbsp;</span>k&eacute;sz&iacute;tsd el. Ezeken k&iacute;v&uuml;l term&eacute;szetesen haszn&aacute;lhatsz m&aacute;s f&aacute;jlokat is az adatok t&aacute;rol&aacute;s&aacute;ra, a k&oacute;dod tov&aacute;bbi szervez&eacute;s&eacute;re, illetve a szerveroldali AJAX/Fetch funkcionalit&aacute;s megval&oacute;s&iacute;t&aacute;s&aacute;ra, de az al&aacute;bb megadott 4 n&eacute;ven kell hogy el&eacute;rhetők legyenek a megold&aacute;said.
<ol>
<li>feladat:<span>&nbsp;</span><code>f1.php</code></li>
<li>feladat:<span>&nbsp;</span><code>f2.php</code></li>
<li>feladat:<span>&nbsp;</span><code>f3.php</code></li>
<li>feladat:<span>&nbsp;</span><code>f4.php</code></li>
</ol>
</li>
<li>Egy k&uuml;l&ouml;n<span>&nbsp;</span><code>README.md</code><span>&nbsp;</span>f&aacute;jlban szerepeljen a k&ouml;vetkező kijelent&eacute;s (behelyetts&iacute;tve a megfelelő adatokat, a &lt;&gt; jeleket nem kell bele&iacute;rni):
<pre><code>&lt;Hallgat&oacute; neve&gt; 
&lt;Neptun k&oacute;dja&gt; 
&lt;T&aacute;rgy neve&gt; - PHP &eacute;vfolyam ZH
2020. 05. 28.
Ezt a megold&aacute;st &lt;Hallgat&oacute; neve, Neptun k&oacute;dja&gt; k&uuml;ldte be &eacute;s k&eacute;sz&iacute;tette a &lt;T&aacute;rgy neve&gt; kurzus PHP &eacute;vfolyam ZH-j&aacute;hoz.
Kijelentem, hogy ez a megold&aacute;s a saj&aacute;t munk&aacute;m. Nem m&aacute;soltam vagy haszn&aacute;ltam harmadik f&eacute;ltől sz&aacute;rmaz&oacute; megold&aacute;sokat. Nem tov&aacute;bb&iacute;tottam megold&aacute;st hallgat&oacute;t&aacute;rsaimnak, &eacute;s nem is tettem k&ouml;zz&eacute;. Az E&ouml;tv&ouml;s Lor&aacute;nd Tudom&aacute;nyegyetem Hallgat&oacute;i K&ouml;vetelm&eacute;nyrendszere (ELTE szervezeti &eacute;s műk&ouml;d&eacute;si szab&aacute;lyzata, II. K&ouml;tet, 74/C. &sect;) kimondja, hogy mindaddig, am&iacute;g egy hallgat&oacute; egy m&aacute;sik hallgat&oacute; munk&aacute;j&aacute;t - vagy legal&aacute;bbis annak jelentős r&eacute;sz&eacute;t - saj&aacute;t munk&aacute;jak&eacute;nt mutatja be, az fegyelmi v&eacute;ts&eacute;gnek sz&aacute;m&iacute;t. A fegyelmi v&eacute;ts&eacute;g legs&uacute;lyosabb k&ouml;vetkezm&eacute;nye a hallgat&oacute; elbocs&aacute;t&aacute;sa az egyetemről.
</code></pre>
</li>
<li>A<span>&nbsp;</span><code>README.md</code><span>&nbsp;</span>f&aacute;jlban a kijelent&eacute;s alatt egy &uuml;res sorral elv&aacute;lasztva szerepeljen az al&aacute;bbi lista. Az egyes<span>&nbsp;</span><code>[ ]</code><span>&nbsp;</span>k&ouml;z&ouml;tti sz&oacute;k&ouml;zt cser&eacute;ld le<span>&nbsp;</span><code>x</code>-re azokra a feladatokra, amit siker&uuml;lt (ak&aacute;r r&eacute;szben) megoldanod!
<pre><code>- [ ] 1. feladat
- [ ] 2. feladat
- [ ] 3. feladat
- [ ] 4. feladat
</code></pre>
</li>
</ul>
<div><strong>A megfelelően kit&ouml;lt&ouml;tt `README.md` f&aacute;jl n&eacute;lk&uuml;l a megold&aacute;st nem fogadjuk el!</strong></div>
<h3><strong>1. feladat</strong></h3>
<p>Feladatod egy olyan oldal k&eacute;sz&iacute;t&eacute;se, melyen a jogos&iacute;tv&aacute;ny lej&aacute;rat&aacute;nak ellenőrz&eacute;s&eacute;re szolg&aacute;l&oacute; űrlap szerepel. Az űrlapban 2 mező van, mind a kettő d&aacute;tum t&iacute;pus&uacute;. Az első mezőben a sz&uuml;let&eacute;si d&aacute;tumot lehet megadni, a m&aacute;sodikban jogos&iacute;tv&aacute;ny ki&aacute;ll&iacute;t&aacute;si d&aacute;tum&aacute;t lehet megadni. Az űrlap POST met&oacute;dusos elk&uuml;ld&eacute;se ut&aacute;n v&eacute;gezz ellenőrz&eacute;st a bemeneten:</p>
<ul>
<li>mind a k&eacute;t d&aacute;tum "d&aacute;tum" form&aacute;tum&uacute;<strong> (1 pont)</strong></li>
<li>a jogos&iacute;tv&aacute;ny ki&aacute;ll&iacute;t&aacute;s&aacute;nak d&aacute;tuma k&eacute;sőbb van, mint a sz&uuml;let&eacute;si d&aacute;tum<strong> (1 pont)</strong></li>
</ul>
<p>Amennyiben hiba van az ellenőrz&eacute;sn&eacute;l, az hiba&uuml;zenetek form&aacute;j&aacute;ban jelenjen meg.<strong> (1 pont)</strong></p>
<p>Ezt k&ouml;vetően sz&aacute;m&iacute;tsd ki, hogy mennyi idős volt az illető a jogos&iacute;tv&aacute;ny k&eacute;sz&iacute;t&eacute;sekor <strong>(1 pont)</strong>, majd ezut&aacute;n a jogos&iacute;tv&aacute;ny a lej&aacute;rati idej&eacute;t az al&aacute;bbiak szerint:</p>
<ul>
<li>Ha a jogos&iacute;tv&aacute;ny ki&aacute;ll&iacute;t&aacute;sakor az illető 60 &eacute;vn&eacute;l fiatalabb volt, akkor a jogos&iacute;tv&aacute;ny 10 &eacute;vig &eacute;rv&eacute;nyes<strong> (1 pont)</strong></li>
<li>Ha a jogos&iacute;tv&aacute;ny ki&aacute;ll&iacute;t&aacute;sakor az illető legal&aacute;bb 60 &eacute;ves, akkor a jogos&iacute;tv&aacute;ny 5 &eacute;vig &eacute;rv&eacute;nyes <strong>(1 pont)</strong></li>
</ul>
<p>&Iacute;rd ki a lej&aacute;rati d&aacute;tumot a felhaszn&aacute;l&oacute;nak &eacute;&eacute;&eacute;&eacute;.hh.nn form&aacute;tumban, ha pedig a jogos&iacute;tv&aacute;ny m&aacute;r lej&aacute;rt, akkor az "Lej&aacute;rt" sz&ouml;veg jelenjen meg. <strong>(1 pont)</strong></p>
<pre><span>&lt;</span><span>form</span><span>&gt;</span><br /><span> &nbsp;Sz&uuml;let&eacute;si d&aacute;tum:</span><br /><span> &nbsp;&lt;</span><span>input</span><span>&nbsp;</span><span>type</span><span>=</span><span>"date"</span><span>&gt;</span><br /><span> &nbsp;&lt;</span><span>br</span><span>&gt;</span><br /><span> &nbsp;Jogos&iacute;tv&aacute;ny ki&aacute;ll&iacute;tva:</span><br /><span> &nbsp;&lt;</span><span>input</span><span>&nbsp;</span><span>type</span><span>=</span><span>"date"</span><span>&gt;</span><br /><span> &nbsp;&lt;</span><span>button</span><span>&nbsp;</span><span>type</span><span>=</span><span>"submit"</span><span>&gt;Send&lt;/</span><span>button</span><span>&gt;</span><br /><span>&lt;/</span><span>form</span><span>&gt;</span></pre>
<h3><strong>2. feladat</strong></h3>
<p>A mell&eacute;kelt adatf&aacute;jlban SVG form&aacute;k adatai vannak t&aacute;rolva JSON form&aacute;tumban. Jelen&iacute;tsd meg az adatf&aacute;jlban t&aacute;rolt form&aacute;kat az al&aacute;bbiak szerint:&nbsp;</p>
<ol>
<li>Ha a forma soksz&ouml;g, (polyline) akkor jelenik csak meg, ha legal&aacute;bb 5 pontb&oacute;l &aacute;ll <strong>(1+2 pont)</strong></li>
<li>Minden m&aacute;s forma megjelenik
<ul>
<li>k&ouml;r <strong>(1 pont)</strong></li>
<li>ellipszis<strong> (1 pont)</strong></li>
</ul>
</li>
</ol>
<p>A form&aacute;k 3 f&eacute;l&eacute;k lehetnek:</p>
<ol>
<li>k&ouml;r:
<ul>
<li>"<strong>type": "circle"</strong></li>
<li><strong>"x": </strong>a k&ouml;r k&ouml;z&eacute;ppontj&aacute;nak X koordin&aacute;t&aacute;i</li>
<li><strong>"y": </strong>a k&ouml;r k&ouml;z&eacute;ppontj&aacute;nak Y koordin&aacute;t&aacute;i</li>
<li><strong>"r": </strong>a k&ouml;r sugara</li>
</ul>
</li>
<li>ellipszis:
<ul>
<li>"<strong>type": "ellipszis"</strong></li>
<li><strong>"x": </strong>az ellipszis k&ouml;z&eacute;ppontj&aacute;nak X koordin&aacute;t&aacute;i</li>
<li><strong>"y": </strong>az ellipszis k&ouml;r k&ouml;z&eacute;ppontj&aacute;nak Y koordin&aacute;t&aacute;i</li>
<li><strong>"rx": </strong>az ellipszis&nbsp;k&ouml;r x ir&aacute;ny&uacute; sugara</li>
<li><strong>"ry": </strong>az ellipszis&nbsp;k&ouml;r y ir&aacute;ny&uacute; sugara</li>
</ul>
</li>
<li>soksz&ouml;g:
<ul>
<li>"<strong>type": "polyline"</strong></li>
<li><strong>"points": </strong>a soksz&ouml;g pontjainak list&aacute;ja
<ul>
<li><strong>"x": </strong>a pont x koordin&aacute;t&aacute;ja</li>
<li><strong>"y": </strong>a pont x koordin&aacute;t&aacute;ja</li>
</ul>
</li>
</ul>
</li>
</ol>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/SVG">Seg&iacute;ts&eacute;g az SVG alakzatok kezel&eacute;s&eacute;hez.</a></p>
<p>Az adatf&aacute;jl tartalma:</p>
<pre><span>{</span><br /><span> &nbsp;"1": {</span><br /><span> &nbsp;&nbsp; </span><span>"type"</span><span>:&nbsp;</span><span>"ellipse"</span><span>,</span><br /><span> &nbsp;&nbsp; </span><span>"x"</span><span>:&nbsp;</span><span>30</span><span>,</span><br /><span> &nbsp;&nbsp; </span><span>"y"</span><span>:&nbsp;</span><span>65</span><span>,</span><br /><span> &nbsp;&nbsp; </span><span>"rx"</span><span>:&nbsp;</span><span>20</span><span>,</span><br /><span> &nbsp;&nbsp; </span><span>"ry"</span><span>:&nbsp;</span><span>55</span><br /><span> &nbsp;},</span><br /><span> &nbsp;"2": {</span><br /><span> &nbsp;&nbsp; </span><span>"type"</span><span>:&nbsp;</span><span>"circle"</span><span>,</span><br /><span> &nbsp;&nbsp; </span><span>"x"</span><span>:&nbsp;</span><span>30</span><span>,</span><br /><span> &nbsp;&nbsp; </span><span>"y"</span><span>:&nbsp;</span><span>65</span><span>,</span><br /><span> &nbsp;&nbsp; </span><span>"r"</span><span>:&nbsp;</span><span>10</span><br /><span> &nbsp;},</span><br /><span> &nbsp;"3": {</span><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>"type"</span><span>:&nbsp;</span><span>"polyline"</span><span>,</span><br /><span> &nbsp;&nbsp; </span><span>"points"</span><span>:&nbsp;[</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>90</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>10</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>80</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>10</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>80</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>120</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>90</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>120</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>90</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>70</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>110</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>120</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>120</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>120</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>100</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>65</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>120</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>10</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>110</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>10</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>90</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>60</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>90</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>10</span><span>&nbsp;}</span><br /><span> &nbsp;&nbsp;&nbsp;]</span><br /><span> &nbsp;},</span><br /><span> &nbsp;"4": {</span><br /><span> &nbsp;&nbsp; </span><span>"type"</span><span>:&nbsp;</span><span>"polyline"</span><span>,</span><br /><span> &nbsp;&nbsp; </span><span>"points"</span><span>:&nbsp;[</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>5</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>60</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>120</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>60</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>120</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>70</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>5</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>70</span><span>&nbsp;},</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </span><span>"x"</span><span>:&nbsp;</span><span>5</span><span>,&nbsp;</span><span>"y"</span><span>:&nbsp;</span><span>60</span><span>&nbsp;}</span><br /><span> &nbsp;&nbsp;&nbsp;]</span><br /><span> &nbsp;}</span><br /><span>}</span></pre>
<h3><strong>3. feladat</strong></h3>
<p>Egy adatf&aacute;jlban listabejegyz&eacute;seket t&aacute;rolunk, illetve az ezekhez tartoz&oacute; c&iacute;mk&eacute;ket. Jelen&iacute;tsd meg ezeket a bejegyz&eacute;seket egy felsorol&aacute;slist&aacute;ban, valamint minden elemhez a hozz&aacute; tartoz&oacute; c&iacute;mk&eacute;ket. <strong>(1 + 1 pont)</strong></p>
<ul>
<li>Legyen lehetős&eacute;g c&iacute;mk&eacute;ket t&ouml;r&ouml;lni &uacute;gy, hogy r&aacute;juk kattintunk. <strong>(3 pont)</strong></li>
<li>Minden bejegyz&eacute;s neve jelenjen meg beviteli mezők&eacute;nt. A beviteli mező alap&eacute;rtelmezetten tartalmazza a listabejegyz&eacute;s nev&eacute;t. Mellette jelenjen meg egy gomb. Ha a gombra kattintunk akkor a bejegyz&eacute;s neve m&oacute;dosuljon az űrlapmezőben szereplő &eacute;rt&eacute;kre. <strong>(3 pont)</strong></li>
</ul>
<p>Az adatf&aacute;jl tartalma:</p>
<pre><span>{</span><br /><span> &nbsp;&nbsp; </span><span>"1"</span><span>:&nbsp;{</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"name"</span><span>:&nbsp;</span><span>"Item&nbsp;1"</span><span>,</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"tags"</span><span>: [</span><span>"tag1"</span><span>, </span><span>"tag2"</span><span>, </span><span>"tag3"</span><span>]</span><br /><span> &nbsp;&nbsp;&nbsp;},</span><br /><span> &nbsp;&nbsp; </span><span>"2"</span><span>:&nbsp;{</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"name"</span><span>:&nbsp;</span><span>"Item&nbsp;2"</span><span>,</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"tags"</span><span>: [</span><span>"tag2"</span><span>, </span><span>"tag3"]</span><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;},</span><br /><span> &nbsp;&nbsp; </span><span>"3"</span><span>:&nbsp;{</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"name"</span><span>:&nbsp;</span><span>"Item&nbsp;3"</span><span>,</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"tags"</span><span>:&nbsp;[]</span><br /><span> &nbsp;&nbsp;&nbsp;},</span><br /><span> &nbsp;&nbsp; </span><span>"4"</span><span>:&nbsp;{</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"name"</span><span>:&nbsp;</span><span>"Item&nbsp;4"</span><span>,</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"tags"</span><span>: [</span><span>"tag1"</span><span>, </span><span>"tag2"</span><span>, </span><span>"tag3"</span><span>, </span><span>"tag5"</span><span>]</span><br /><span> &nbsp;&nbsp;&nbsp;},</span><br /><span> &nbsp;&nbsp; </span><span>"5"</span><span>:&nbsp;{</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"name"</span><span>:&nbsp;</span><span>"Item&nbsp;5"</span><span>,</span><br /><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>"tags"</span><span>: [</span><span>"tag3"</span><span>]</span><br /><span> &nbsp;&nbsp;&nbsp;}</span><br /><span>}</span></pre>
<h3><strong>4. feladat</strong></h3>
<p>Jelenjen meg az oldalon h&aacute;rom gomb: egy 1-es, egy 0-s, &eacute;s egy vissza&aacute;ll&iacute;t&oacute; gomb.</p>
<p>Az 1-es &eacute;s a 0-s gomb műk&ouml;d&eacute;se: r&aacute;juk kattintva egy ajax/fetch k&eacute;r&eacute;st k&uuml;ld&uuml;nk egy PHP szkriptnek. Ezekkel a gombokkal jobbr&oacute;l balra lehet bin&aacute;ris sz&aacute;mokat &eacute;p&iacute;teni. Az eddig &ouml;ssze&aacute;ll&iacute;tott bin&aacute;ris sz&aacute;mot munkamenetben t&aacute;rold! Minden k&eacute;r&eacute;s ut&aacute;n az ajax/fetch k&eacute;r&eacute;sre v&aacute;laszul a PHP script visszak&uuml;ldi az eddig &ouml;ssze&aacute;ll&iacute;tott bin&aacute;ris sz&aacute;mot &eacute;s annak decim&aacute;lis form&aacute;j&aacute;t. Ezeket a v&aacute;laszban &eacute;rkező adatokat a k&uuml;ldő oldal jelen&iacute;tse meg az <strong>&lt;output&gt;</strong> elemben.</p>
<p>A k&uuml;ldő oldal alapszerkezete:</p>
<pre><span>&lt;</span><span>div</span><span>&gt;</span><br /><span> &nbsp;&lt;</span><span>button</span><span>&nbsp;</span><span>id</span><span>=</span><span>"b1"</span><span>&gt;1&lt;/</span><span>button</span><span>&gt;</span><br /><span> &nbsp;&lt;</span><span>button</span><span>&nbsp;</span><span>id</span><span>=</span><span>"b0"</span><span>&gt;0&lt;/</span><span>button</span><span>&gt;</span><br /><span>  &lt;</span><span>button</span><span>&nbsp;</span><span>id</span><span>=</span><span>"br"</span><span>&gt;reset&lt;/</span><span>button</span><span>&gt;</span><br /><span>&lt;/div&gt;</span><br /><span>&lt;</span><span>output</span><span>&gt;&lt;/</span><span>output</span><span>&gt;</span></pre>