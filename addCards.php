<?php
    $servername = "77.222.58.149";
    $username = "sushi";
    $password = "SquadronDB";
    $dbname = "squadrondb";

  // Создаем соединение с базой данных
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Получаем значения из POST-запроса
$id = $_POST['id'];
$title = $_POST['title'];
$image = $_POST['image'];
$description = $_POST['description'];
$designer = $_POST['designer'];
$link = $_POST['link'];

// Формируем запрос на добавление данных в таблицу
$sql = "INSERT INTO cards (id, title, image, description, designer, link)
VALUES ('$id', '$title', '$image', '$description', '$designer', '$link')";

// Проверяем успешность выполнения запроса
if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Закрываем соединение с базой данных
mysqli_close($conn);
?>