<?php

//sleep(5);

//ha a kérés application/json típusú
//$_POST = json_decode(file_get_contents('php://input', true));

$vadaszatok = [
    [
        'vadasz'=> 'Regő',
        'allat'=> 'őz',
        'suly' => 15
    ],
    [
        'vadasz'=> 'Vilmos',
        'allat'=> 'vadkan',
        'suly' => 12
    ],
    [
        'vadasz'=> 'Regő',
        'allat'=> 'kecske',
        'suly' => 7
    ],
    [
        'vadasz'=> 'Regő',
        'allat'=> 'nyúl',
        'suly' => 2
    ],
    [
        'vadasz'=> 'Vilmos',
        'allat'=> 'sárkány',
        'suly' => 480
    ],
    [
        'vadasz'=> 'Regő',
        'allat'=> 'teknős',
        'suly' => 4
    ],
    [
        'vadasz'=> 'Regő',
        'allat'=> 'póni',
        'suly' => 12
    ]
];

?>

<?php if(isset($_GET['tablazat'])): ?>
    <table>
        <tr>
            <th>Név</th>
            <th>Állat</th>
            <th>Súly</th>
        </tr>
        <?php foreach($vadaszatok as $vadaszat): ?>
            <tr>
                <td><?=$vadaszat['vadasz']?></td>
                <td><?=$vadaszat['allat']?></td>
                <td><?=$vadaszat['suly']?></td>
            </tr>
        <?php endforeach ?>
    </table>
<?php else:

    echo json_encode($vadaszatok);

endif ?>