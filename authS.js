const mysql = require("mysql");
const http = require("http");
const url = require("url");
const fs = require("fs");

// Создаем соединение с базой данных
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "mypass123",
  database: "SquadronDB",
});

// Функция для проверки аутентификации пользователя
function authenticateUser(username, password, callback) {
  // Выбираем пользователя из базы данных
  connection.query(
    `SELECT * FROM users WHERE username = '${username}'`,
    (error, results, fields) => {
      if (error) {
        console.error("Error selecting user: " + error.stack);
        return callback(error);
      }

      if (results.length === 0) {
        // Если пользователь не найден
        return callback(null, false, "User not found");
      }

      // Проверяем пароль пользователя
      const user = results[0];
      if (password === user.password) {
        // Если пароль верный, то аутентификация прошла успешно
        return callback(null, true, user);
      } else {
        // Если пароль неверный
        return callback(null, false, "Invalid password");
      }
    }
  );
}

// Создаем HTTP сервер
http
  .createServer((req, res) => {
    const urlObj = url.parse(req.url, true);

    // Отдаем статические файлы, если URL начинается с /public/
    if (urlObj.pathname.startsWith("/public/")) {
      fs.readFile(`.${urlObj.pathname}`, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("File not found");
        } else {
          res.writeHead(200);
          res.end(data);
        }
      });
      return;
    }

    // Проверяем URL запроса на аутентификацию пользователя
    if (urlObj.pathname === "/auth") {
      const username = urlObj.query.uname;
      const password = urlObj.query.psw;

      // Проверяем аутентификацию пользователя
      authenticateUser(username, password, (error, authenticated, user) => {
        if (error) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
          return;
        }

        // В зависимости от результата аутентификации отправляем соответствующий ответ
        if (authenticated) {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(`Welcome, ${user.name}!`);
        } else {
          res.writeHead(401, { "Content-Type": "text/plain" });
          res.end("Authentication failed: " + user);
        }
      });
      return;
    }

    // Возвращаем страницу
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  })
  .listen(8080, () => {
    console.log("Server listening on port 8080");
  });
