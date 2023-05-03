<?php
    $servername = "77.222.58.149";
    $username = "sushi";
    $password = "SquadronDB";
    $dbname = "squadrondb";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}




$id = $_POST['id'];
$title = $_POST['title'];
$image = $_POST['image'];
$description = $_POST['description'];
$designer = $_POST['designer'];
$link = $_POST['link'];

$sql = "INSERT INTO cards (id, title, image, description, designer, link)
VALUES ('$id', '$title', '$image', '$description', '$designer', '$link')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>