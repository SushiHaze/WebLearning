document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.querySelector("#id01 form");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.querySelector("input[name=uname]").value;
    var password = document.querySelector("input[name=psw]").value;

    var data = {
      username: username,
      password: password,
    };

    var url = "http://localhost:3000/auth";

    fetch(url + "?" + new URLSearchParams(data), { method: "GET" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          alert("Logged in successfully");
        } else {
          var error = document.querySelector(".error-message");
          error.style.display = "block";
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  });
});
