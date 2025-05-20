function changeContent() {
  const textElement = document.getElementById("dynamic-text");
  const box = document.getElementById("dynamic-box");

  textElement.textContent = "This is a new text message";

  box.style.backgroundColor = "tomato";
  box.style.border = "2px solid black";
  box.style.width = "150px";
}

function toggleElement() {
  const existing = document.getElementById("new-element");

  if (existing) {
    existing.remove();
  } else {
    const newEl = document.createElement("p");
    newEl.id = "new-element";
    newEl.textContent = "This is a new text message";
    document.body.appendChild(newEl);
  }
}
