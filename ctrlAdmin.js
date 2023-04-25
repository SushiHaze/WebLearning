if (localStorage.roles === "admin") {
  const gridBody = document.getElementById("gridBody");
  const gridItem = document.createElement("div");
  gridItem.classList.add("gridItem");

  const inputId = document.createElement("input");
  inputId.type = "text";
  inputId.id = "id";
  inputId.placeholder = "ID";
  gridItem.appendChild(inputId);

  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.id = "title";
  inputTitle.placeholder = "Title";
  gridItem.appendChild(inputTitle);

  const inputImage = document.createElement("input");
  inputImage.type = "text";
  inputImage.id = "image";
  inputImage.placeholder = "Image URL";
  gridItem.appendChild(inputImage);

  const inputDescription = document.createElement("input");
  inputDescription.type = "text";
  inputDescription.id = "description";
  inputDescription.placeholder = "Description";
  gridItem.appendChild(inputDescription);

  const inputDesigner = document.createElement("input");
  inputDesigner.type = "text";
  inputDesigner.id = "designer";
  inputDesigner.placeholder = "Designer";
  gridItem.appendChild(inputDesigner);

  const inputLink = document.createElement("input");
  inputLink.type = "text";
  inputLink.id = "link";
  inputLink.placeholder = "Link";
  gridItem.appendChild(inputLink);

  const buttonAddItem = document.createElement("button");
  buttonAddItem.id = "add-item";
  buttonAddItem.textContent = "+";
  gridItem.appendChild(buttonAddItem);

  buttonAddItem.addEventListener("click", function () {
    const id = inputId.value;
    const title = inputTitle.value;
    const image = inputImage.value;
    const description = inputDescription.value;
    const designer = inputDesigner.value;
    const link = inputLink.value;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Данные успешно добавлены в базу данных
          console.log("Данные успешно добавлены в базу данных");
        } else {
          // Произошла ошибка при добавлении данных в базу данных
          console.log("Произошла ошибка при добавлении данных в базу данных");
        }
      }
    };
    xhr.open("POST", "addCards.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(
      "id=" +
        encodeURIComponent(id) +
        "&title=" +
        encodeURIComponent(title) +
        "&image=" +
        encodeURIComponent(image) +
        "&description=" +
        encodeURIComponent(description) +
        "&designer=" +
        encodeURIComponent(designer) +
        "&link=" +
        encodeURIComponent(link)
    );
  });

  gridBody.appendChild(gridItem);
}
