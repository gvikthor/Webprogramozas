<?php include_once 'functions.php' ?>

<?php function page_errors($errors){ ?>
    <?php if(count($errors) == 0) return ?>

    <?php
    $errors_dict = json_read('localization/'.get_language().'/errors.json');
    ?>

    <h2>Error!</h2>
    <ul>
        <?php foreach($errors as $error): ?>
            <li><?=$errors_dict->$error?></li>
        <?php endforeach ?>
    </ul>
<?php } ?>