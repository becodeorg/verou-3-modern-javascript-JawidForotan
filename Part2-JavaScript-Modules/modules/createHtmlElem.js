// Function to create div
function createDiv(className) {
  const newDiv = document.createElement("div");
  newDiv.classList = className;
  return newDiv;
}

// Function to create paragraph
function createP(className, content) {
  const newP = document.createElement("p");
  newP.classList = className;
  newP.textContent = content;
  return newP;
}

export { createDiv, createP };
