<?php

$host = "localhost";
$user = "u873212447_usr_92itbV08";
$password = "|5WKdKAgM";
$database = "u873212447_db_92itbV08";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    http_response_code(500);
    die("Database connection failed: " . $conn->connect_error);
}

?>