# PHP Telepítés és futtatás
## Telepítés
Windows:
- Menj fel [Tóta Dávid GitHubjára](https://github.com/totadavid95/PhpComposerInstaller/blob/master/README_hu.md), ahonnan egybe le tudod tölteni a PHP+Composer telepítő csomagot.
- A legegyszerűbb Windowsra a zöld letöltés gombot megnyomni, majd kicsomagolni és futtatni a telepítőt (ehhez kell, hogy legyen [.NET](https://dotnet.microsoft.com/en-us/download) a gépre telepítve)

Mac:
- Telepíts [Homebrew](https://brew.sh/)-t a gépedre, ha eddig nem tetted.
- Futtasd a `brew install php` parancsot

## Futtatás
Először is megnézzük, hogy sikerült-e a telepítés. Nyiss egy command line-t és futtasd a `php -v` parancsot. Ha kiírja a PHP verziót, sikerült a telepítés.

Az első PHP programunk nagyon egyszerű lesz. Csinálj egy `index.php` nevű file-t egy üres mappába, és írd bele a következőt:
```php
<?=5+7?>
```
Lépj a mappába a command line-ból és futtasd a `php -S localhost:3000` parancsot.
Menj böngészőből a `http://localhost:3000` címre, és ha azt látod, hogy 12, működik a PHP.