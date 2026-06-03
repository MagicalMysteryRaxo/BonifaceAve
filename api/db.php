<?php

$host = "localhost";
$user = "root";
$password = "99!T6ad99#";
$database = "boniface_analytics";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    http_response_code(500);
    die("Database connection failed: " . $conn->connect_error);
}

?>