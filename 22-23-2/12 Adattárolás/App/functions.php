<?php

function redirect($target){
    header("Location: $target");
    die;
}

function trim_post_value_or_default($post_key, $default = '') {
    return trim(post_value_or_default($post_key, $default));
}

function post_value_or_default($post_key, $default = '') {
    return $_POST[$post_key] ?? $default;
}

function add_with_id($new_data, $databasde){
    $id = $databasde->add($new_data);
    $new_data['id'] = $id;
    $databasde->update($id, $new_data);
}

function generate_error_list($errors){ ?>
    <?php if(count($errors) > 0): ?>
    <ul>
        <?php foreach($errors as $error): ?>
            <li><?=$error?></li>
        <?php endforeach ?>
    </ul>
    <?php endif ?>
<?php } ?>