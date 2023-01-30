import "./styles/styles.scss";


function displayContent() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Welcome to a nice simple webpack Starter");

  newDiv.appendChild(newContent);

  const container = document.getElementById("container");

  document.body.insertBefore(newDiv, container);
}

displayContent();
