<<<<<<< HEAD
//uiUx//
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btnFind");
  button.innerHTML = '<img src="../sources/searchIcn.png">';
=======
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("btnFind");
  button.innerHTML = '<img src="sources/searchIcn.png">';
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
});
const gridItems = document.querySelectorAll("#card1");
gridItems.forEach((item) => {
  let maxHeight = 0;
  gridItems.forEach((item) => {
    const itemHeight = item.offsetHeight;
    if (itemHeight > maxHeight) {
      maxHeight = itemHeight;
    }
  });
  item.addEventListener("click", (event) => {
    if (!event.target.closest(".button") && event.target.tagName !== "IMG") {
      window.location.href = "aircrafts/";
    }
  });
});

<<<<<<< HEAD
//search//
=======
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
function search() {
  var searchText = document.getElementById("search").value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const result = document.getElementById("result");

      result.innerHTML = "";

      for (var i = 0; i < response.length; i++) {
        var card = response[i];
        var searchFields = [card.title, card.info, card.designer];

        for (var j = 0; j < searchFields.length; j++) {
          if (
            searchFields[j].toLowerCase().indexOf(searchText.toLowerCase()) !==
            -1
          ) {
            var link = card.link;
            if (link) {
              window.location.href = link;
            } else {
              console.log("Error: " + xhr.status);
            }
            return;
          }
        }
      }

      result.innerHTML = "<p>Not found</p>";
    }
  };
  xhr.open("POST", "search.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("search=" + searchText);
}
//getCards//
let isDataLoaded = false;

function checkDataLoaded() {
  if (isDataLoaded) {
    return;
  }

  xhr.open("GET", "getCards.php", true);
  xhr.send();

  setTimeout(checkDataLoaded, 1500);
}

if (window.location.pathname === "/index.html") {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "getCards.php", true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          let cardsData = JSON.parse(xhr.responseText);
          let gridBody = document.querySelector(".gridBody");

          cardsData.forEach(function (card) {
            let cardHTML = `
              <div id="${card.id}" class="gridItem">
                <a href="${card.link}" class="card-link">
                  <img class="cardImg" src="${card.image}" alt="aircraftImg" />
                  <h3>${card.title}</h3>
                  <p class="mainInfoCard">${card.info}</p>
                  <p class="designedBy">${card.designer}<button class="button">Add</button></p>
                </a>
              </div>
            `;
            gridBody.insertAdjacentHTML("beforeend", cardHTML);
          });

          isDataLoaded = true;
        } catch (e) {
          console.error("Error parsing JSON response: ", e);
        }
      } else {
        console.error(
          "Error getting data from server. Status code: ",
          xhr.status
        );
      }
    }
  };

  setTimeout(checkDataLoaded, 1500);
}

//chat//
function checkRolesAndDisplayButton() {
  const openChatBtn = document.getElementById("openChat");
  if (
    localStorage.getItem("roles") === "user" ||
    localStorage.getItem("roles") === "admin"
  ) {
    openChatBtn.style.display = "block";
  } else {
    openChatBtn.style.display = "none";
  }
}

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  checkRolesAndDisplayButton();
});

window.addEventListener("storage", function () {
  checkRolesAndDisplayButton();
});

window.addEventListener("load", function () {
  checkRolesAndDisplayButton();
});
window.addEventListener("resize", function () {
  checkRolesAndDisplayButton();
});
document.addEventListener("DOMContentLoaded", function () {
  const openChatBtn = document.getElementById("openChat");
  const popup = document.getElementById("chatPopup");
  const closeChatBtn = document.getElementById("closeChat");

  if (
    localStorage.getItem("roles") === "user" ||
    localStorage.getItem("roles") === "admin"
  ) {
    openChatBtn.style.display = "block";
  }

  closeChatBtn.addEventListener("click", function () {
    popup.style.display = "none";
    openChatBtn.style.display = "block";
  });

  openChatBtn.addEventListener("click", function () {
    popup.style.display = "block";
    openChatBtn.style.display = "none";
  });
});
=======
let xhr = new XMLHttpRequest();

xhr.open("GET", "getCards.php", true);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      try {
        let cardsData = JSON.parse(xhr.responseText);

        let gridBody = document.querySelector(".gridBody");

        cardsData.forEach(function (card) {
          let cardHTML = `
            <div id="${card.id}" class="gridItem">
              <a href="${card.link}" class="card-link">
                <img class="cardImg" src="${card.image}" alt="aircraftImg" />
                <h3>${card.title}</h3>
                <p class="mainInfoCard">${card.info}</p>
                <p class="designedBy">${card.designer}<button class="button">Add</button></p>
              </a>
            </div>
          `;
          gridBody.insertAdjacentHTML("beforeend", cardHTML);
        });
      } catch (e) {
        console.error("Error parsing JSON response: ", e);
      }
    } else {
      console.error(
        "Error getting data from server. Status code: ",
        xhr.status
      );
    }
  }
};

// // НЕ РАБОТАЕТ Я ХЗ
// var input = document.getElementById("search");
// input.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     search();
//   }
// });
>>>>>>> 1c00ac41673642614db6d3ba76c87c99b732780f
