<?php require_once 'functions.php' ?>

<?php function page_language_selector(){ ?>
    <?php
        if(get_exists('lang')){
            $lan = $_GET['lang'];
            $languages = (object)[
                "ENG" => "english",
                "HUN" => "hungarian"
            ];
            $_SESSION['language'] = $languages->$lan ?? 'english';
        }
    ?>
    <form>
        <input type="hidden" name="lang" value="ENG">
        <input type="submit" value="🇬🇧">
    </form>
    <form>
        <input type="hidden" name="lang" value="HUN">
        <input type="submit" value="🇭🇺">
    </form>
<?php } ?>