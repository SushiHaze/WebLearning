<?php
$servername = "77.222.58.149";
$username = "sushi";
$password = "SquadronDB";
$dbname = "squadrondb";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "DB connection error: " . $e->getMessage();
    die();
}

$search_query = isset($_GET['q']) ? $_GET['q'] : '';

$stmt = $conn->prepare("SELECT * FROM cards WHERE title LIKE :search_query OR description LIKE :search_query OR designer LIKE :search_query");
$stmt->execute(array(':search_query' => '%' . $search_query . '%'));


$cards = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
  $cards[] = array(
    'id' => $row['id'],
    'title' => $row['title'],
    'image' => $row['image'],
    'info' => $row['description'],
    'designer' => $row['designer'],
    'link' => $row['link']
  );
}
header('Content-Type: text/javascript');
echo json_encode($cards);
?>