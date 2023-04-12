const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser"); // Добавляем body-parser

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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// Разрешаем использование статических файлов из папки public
app.use(express.static("public"));

// Добавляем обработчик body-parser для данных в формате x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Обработчик POST-запроса на /auth
app.post("/auth", (req, res) => {
  const { username, password } = req.body;
  // Выполняем запрос к базе данных, чтобы найти пользователя с таким логином и паролем
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      throw err;
    }
    if (results.length > 0) {
      // Если пользователь найден, отправляем статус 200 (OK) и сообщение об успешной аутентификации
      res.status(200).json({ success: true });
    } else {
      // Если пользователь не найден, отправляем статус 401 (Unauthorized) и сообщение об ошибке
      res.status(401).json({ success: false });
    }
  });
});

// Запускаем сервер на порте 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
