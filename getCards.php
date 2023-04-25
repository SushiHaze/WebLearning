<?php
try {

    $db = new mysqli('77.222.58.149', 'sushi', 'SquadronDB', 'squadrondb');
  
    $result = $db->query('SELECT * FROM cards');
  
    $cards = array();
  
    while ($row = $result->fetch_assoc()) {
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

  } catch (Exception $e) {
    echo json_encode(array("error" => $e->getMessage()));
  }
?>
