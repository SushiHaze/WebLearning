<?php
    $servername = "77.222.58.149";
    $username = "sushi";
    $password = "SquadronDB";
    $dbname = "squadrondb";

<<<<<<< HEAD
$conn = mysqli_connect($servername, $username, $password, $dbname);

=======
  // Создаем соединение с базой данных
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Проверяем соединение
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

<<<<<<< HEAD
=======
// Получаем значения из POST-запроса
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
$id = $_POST['id'];
$title = $_POST['title'];
$image = $_POST['image'];
$description = $_POST['description'];
$designer = $_POST['designer'];
$link = $_POST['link'];

<<<<<<< HEAD
$sql = "INSERT INTO cards (id, title, image, description, designer, link)
VALUES ('$id', '$title', '$image', '$description', '$designer', '$link')";

=======
// Формируем запрос на добавление данных в таблицу
$sql = "INSERT INTO cards (id, title, image, description, designer, link)
VALUES ('$id', '$title', '$image', '$description', '$designer', '$link')";

// Проверяем успешность выполнения запроса
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

<<<<<<< HEAD
=======
// Закрываем соединение с базой данных
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
mysqli_close($conn);
?>