<?php

require_once "db.php";

$sql = "
CREATE TABLE IF NOT EXISTS events (
    eventId INT AUTO_INCREMENT PRIMARY KEY,
    visitorId VARCHAR(100),
    eventType VARCHAR(100),
    comicName VARCHAR(100),
    pageName VARCHAR(255),
    durationSeconds INT DEFAULT 0,
    extraData TEXT,
    eventTime DATETIME DEFAULT CURRENT_TIMESTAMP
);
";

if ($conn->query($sql) === TRUE) {
    echo "Database and tables created successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();

?>