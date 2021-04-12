<tbody>
    <?php
        foreach($kepviselok as $kepviselo){
            echo '<tr><td>' . $kepviselo->nev . '</td><td>' . $kepviselo->nepszeruseg . '</td></tr>';
        }
    ?>
</tbody>


<tbody>
    <?php
        foreach($kepviselok as $kepviselo){
    ?>
        <tr>
            <td><?php echo $kepviselo->nev; ?></td>
            <td><?php echo $kepviselo->nepszeruseg; ?></td>
        </tr>
    <?php  
        }
    ?>
</tbody>

<tbody>
    <?php foreach($kepviselok as $kepviselo): ?>
        <tr <?php if($kepviselo->kormanyparti): echo 'style="background-color: #32a86f;"'; endif ?>>