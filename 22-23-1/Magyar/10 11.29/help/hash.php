<?= $a = password_hash('Almafa123?', PASSWORD_DEFAULT) ?><br>
<?= password_hash('Almafa123?', PASSWORD_DEFAULT) ?><br>
<?= password_verify('Almafa123?', $a)?>