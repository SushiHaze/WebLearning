window.onload = function () {
  var button = document.getElementById("btnFind");
  button.innerHTML = '<img src="sources/searchIcn.png">';
};
var modal = document.getElementById("id01");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
const gridItems = document.querySelectorAll("#card1");
gridItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (!event.target.closest(".button")) {
      window.location.href = "aircrafts/";
    }
  });
});
function search() {
  var searchTerm = document.getElementById("search").value.toLowerCase();
  if (
    searchTerm.match(/(hornet|f\/a-18 hornet|fa-18|f-18|a-18|fa18|f18|a18)/i)
  ) {
    window.location.href = "aircrafts/F18.html";
  } else if (searchTerm.match(/(tomcat|f-14 tomcat|f14|f-14)/i)) {
    window.location.href = "aircrafts/F14.html";
  } else if (searchTerm.match(/(eagle|f-15 eagle|f15)/i)) {
    window.location.href = "aircrafts/F15.html";
  } else if (searchTerm.match(/(falcon|f-16 falcon|f16)/i)) {
    window.location.href = "aircrafts/F16.html";
  } else if (searchTerm.match(/(raptor|f-22 raptor|f22)/i)) {
    window.location.href = "aircrafts/F22.html";
  } else if (searchTerm.match(/(phantom|f-4 phantom|f4)/i)) {
    window.location.href = "aircrafts/F4.html";
  } else if (searchTerm.match(/(mig|mig-29|mig29)/i)) {
    window.location.href = "aircrafts/MIG29.html";
  } else if (searchTerm.match(/(flanker|su-27|su27)/i)) {
    window.location.href = "aircrafts/SU27.html";
  } else if (searchTerm.match(/(raffale|rafale)/i)) {
    window.location.href = "aircrafts/RAFFALE.html";
  } else if (searchTerm.match(/(eurofighter)/i)) {
    window.location.href = "aircrafts/EUROFIGHTER.html";
  } else {
    alert("Sorry, the search term was not found.");
  }
}
// НЕ РАБОТАЕТ Я ХЗ
var input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    search();
  }
});
