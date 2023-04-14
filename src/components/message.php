<?php

$sql = 'SELECT * message';
$result = mysqli_query($conn, $mysql);
$message = mysqli_fetch_all($result, MYSQLI_ASSOC);
?>
