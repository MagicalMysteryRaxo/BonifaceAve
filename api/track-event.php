<?php

header("Content-Type: application/json");

require_once "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$visitorId = $data["visitorId"] ?? "";
$eventType = $data["eventType"] ?? "";
$comicName = $data["comicName"] ?? "";
$pageName = $data["pageName"] ?? "";
$durationSeconds = $data["durationSeconds"] ?? 0;
$extraData = json_encode($data["extraData"] ?? []);

$stmt = $conn->prepare("
    INSERT INTO events 
    (visitorId, eventType, comicName, pageName, durationSeconds, extraData)
    VALUES (?, ?, ?, ?, ?, ?)
");

$stmt->bind_param(
    "ssssis",
    $visitorId,
    $eventType,
    $comicName,
    $pageName,
    $durationSeconds,
    $extraData
);

$stmt->execute();

echo json_encode(["success" => true]);

$stmt->close();
$conn->close();

?>