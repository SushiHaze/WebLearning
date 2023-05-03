const loginButton = document.getElementById("loginButton");
const registrationButton = document.getElementById("registrationButton");
const usernameInput = document.getElementsByName("uname")[0];
const passwordInput = document.getElementsByName("psw")[0];

loginButton.addEventListener("click", loginUser);
registrationButton.addEventListener("click", registerUser);

function loginUser() {
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:5000/auth/login";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
<<<<<<< HEAD
        const username = localStorage.getItem("username");
=======
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
        localStorage.setItem("token", response.token);
        localStorage.setItem("roles", response.roles);
        localStorage.setItem("username", response.username);
        document.getElementById("accountButton").style.display = "none";
        document.getElementById("accountInfo").style.display = "flex";
        document.getElementById(
          "userIcon"
<<<<<<< HEAD
        ).src = `../sources/${response.roles}.png`;
=======
        ).src = `sources/${response.roles}.png`;
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
        const usernameElement = document.getElementById("username");
        const rolesElement = document.getElementById("roles");
        rolesElement.style.fontSize = "8px";
        usernameElement.textContent = `${response.username}`;
        rolesElement.textContent = `(${response.roles})`;
        if (response.username.length > 15) {
          usernameElement.style.fontSize = "12px";
        } else {
          usernameElement.style.fontSize = "14px";
        }
      } else {
        const response = JSON.parse(xhr.responseText);
        window.alert(response.message);
      }
    }
  };
  const data = JSON.stringify({
    username: usernameInput.value,
    password: passwordInput.value,
  });
  xhr.send(data);
}

window.onload = function () {
  const token = localStorage.getItem("token");
  const roles = localStorage.getItem("roles");
<<<<<<< HEAD

  if (token) {
    document.getElementById("accountButton").style.display = "none";
    document.getElementById("accountInfo").style.display = "flex";
    document.getElementById("userIcon").src = `../sources/${roles}.png`;
=======
  if (token) {
    document.getElementById("accountButton").style.display = "none";
    document.getElementById("accountInfo").style.display = "flex";
    document.getElementById("userIcon").src = `sources/${roles}.png`;
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
    document.getElementById("username").textContent =
      localStorage.getItem("username");
    document.getElementById("roles").textContent = `(${localStorage.getItem(
      "roles"
    )})`;
  }
};

function logoutUser() {
  localStorage.removeItem("token");
  localStorage.removeItem("roles");
  localStorage.removeItem("username");
  document.getElementById("accountButton").style.display = "block";
  document.getElementById("accountInfo").style.display = "none";
  document.getElementById("userIcon").src = "";
  document.getElementById("userInfo").textContent = "";
}

function registerUser() {
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:5000/auth/registration";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        const response = JSON.parse(xhr.responseText);
        window.alert(response.message);
      }
    }
  };
  const data = JSON.stringify({
    username: usernameInput.value,
    password: passwordInput.value,
  });
  xhr.send(data);
}

function setAuthHeader(xhr) {
  const token = sessionStorage.getItem("token");
  if (token) {
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
  }
}
<<<<<<< HEAD

document.getElementById("loginButton").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000/auth/login");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("id01").style.display = "none";
    } else {
      console.log(xhr.responseText);
    }
  };
  xhr.onerror = function () {
    console.log("Error: XHR request failed.");
  };
  var data = JSON.stringify({
    username: document.getElementsByName("uname")[0].value,
    password: document.getElementsByName("psw")[0].value,
  });
  xhr.send(data);
});
=======
// function getData() {
//   const xhr = new XMLHttpRequest();
//   const url = "http://localhost:5000/data";
//   xhr.open("GET", url, true);
//   setAuthHeader(xhr); // добавляем заголовок авторизации
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         // обработка данных
//       } else {
//         const response = JSON.parse(xhr.responseText);
//         window.alert(response.message);
//       }
//     }
//   };
//   xhr.send();
// }
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
