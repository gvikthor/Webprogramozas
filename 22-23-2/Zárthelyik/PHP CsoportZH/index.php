<?php
require_once 'data.php'; // Ez bemásolja ide az adatokat, de ha szeretnéd, kézzel is megteheted.

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - CsoportZH</title>
</head>
<style>
    body{
        width: 60%;
        margin: auto;
        border: 1px solid black;
        padding: 50px;
    }
    h2 .task-desc {
        font-weight: lighter;
    }
    .task-img {
        min-height: 500px;
    }
    table {
        width: 70%;
        margin-left: 30%;
    }
    table, tr, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    td {
        height: 50px;
    }
    .max-pts, .got-pts {
        width: 20%;
        background-color: rgb(192, 192, 192);
        text-align: center;
    }
    .task input {
        width: 95%;
        height: 100%;
        border: none;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
    input[type=submit] {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        background-color: rgb(192, 192, 192);
        border: none;
        font-size: 20px;
        font-weight: bold;
    }
    input[type=submit]:hover {
        background-color: rgb(128, 128, 128);
    }
</style>
<body>
    <form>
        <div class="task">
            <h2>
                <span class="task-num">4.</span>
                <span class="task-desc">Válassza ki az alábbiak közül a valós számok halmazán értelmezett x -> (x - 2)² függvény grafikonját!</span>
            </h2>
            <div class="task-img">
                <img src="task4.png">
            </div>
            <table>
                <tr>
                    <td class="task-answer"><input name="4"></td>
                    <td class="max-pts">2 pont</td>
                    <td class="got-pts"></td>
                </tr>
            </table>
        </div>
    <input type="submit">
    </form>
</body>
</html>