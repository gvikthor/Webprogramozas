<?php
require_once 'data.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--

    <ul>
        <li><a href="candidate.php?id=1">Peti</a></li>
    </ul>

    <ul>
        FOREACH
        <li><a href="candidate.php?id=CANDIDATEID">CANDIDATENAME</a></li>
        ENDFOREACH
    </ul>


    -->

    <ul>
        <?php foreach($candidates as $candidate): ?>
            <li>
                <a href="candidate.php?id=<?= $candidate->id ?>">
                    <?= $candidate->name ?>
                </a>
            </li>
        <?php endforeach ?>
    </ul>
</body>
</html>