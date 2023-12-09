<?php
$servername = "localhost"; 
$username = "ahmed101";
$password = "20032004";
$dbname = "verified accounts";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
