const express = require("express");
const mysql = require("mysql");

// Создаем подключение к базе данных
const db = mysql.createConnection({
  host: "77.222.58.149",
  user: "sushi",
  password: "SquadronDB",
  database: "squadrondb",
  port: "3306",
});

// Проверяем, что мы успешно подключились к базе данных
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

// Создаем экземпляр Express.js приложения
const app = express();

// Разрешаем использование статических файлов из папки public
app.use(express.static("public"));

// Обработчик GET-запроса на /auth
app.get("/auth", (req, res) => {
  const url = `${req.protocol}://${req.hostname}:${app.get("port")}`;
  console.log(`Server running at ${url}`);
  const { uname, psw } = req.query;
  console.log(`Login: ${uname}, Password: ${psw}`); // Выводим в консоль отладки
  // Выполняем запрос к базе данных, чтобы найти пользователя с таким логином и паролем
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(sql, [uname, psw], (err, results) => {
    if (err) {
      throw err;
    }
    if (results.length > 0) {
      // Если пользователь найден, отправляем статус 200 (OK) и сообщение об успешной аутентификации
      res.status(200).send("Authenticated");
    } else {
      // Если пользователь не найден, отправляем статус 401 (Unauthorized) и сообщение об ошибке
      res.status(401).send("Invalid username or password");
    }
  });
});

// Запускаем сервер на порте 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
