<?php
header('Access-Control-Allow-Origin: http://localhost: 8080');
$user = $_POST['username'];
echo ('Hello $user');

// create a component to export
