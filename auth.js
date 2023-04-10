//// КЛИЕНТСКАЯ ЧАСТЬ////

// Обработчик события submit для формы авторизации
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Отменяем перезагрузку страницы
  const username = document.querySelector('input[name="uname"]').value;
  const password = document.querySelector('input[name="psw"]').value;
  // Отправляем запрос на сервер для аутентификации пользователя
  fetch(`http://localhost:8080/auth?uname=${username}&psw=${password}`)
    .then((response) => {
      if (response.ok) {
        // Если пользователь аутентифицирован, перенаправляем его на главную страницу
        window.location.replace("/about.html");
      } else {
        // Если пользователь не аутентифицирован, выводим сообщение об ошибке
        const errorMessage = document.querySelector(".error-message");
        errorMessage.textContent = "Invalid username or password";
        errorMessage.style.display = "block";
      }
    })
    .catch((error) => {
      console.error("Error authenticating user:", error);
    });
});

// Обработчик события click для кнопки "Cancel"
document.querySelector(".cancelbtn").addEventListener("click", () => {
  // Закрываем попап
  document.getElementById("id01").style.display = "none";
});
