<?php
header('Access-Control-Allow-Origin: http://localhost: 3000');
$user = $_GET['username'];
echo ('Hello $user');

// create a component to export
