// Function to create h1

const creatH1 = (h1ClassName, h1Content) => {
  const newH1 = document.createElement("h1");
  newH1.classList = h1ClassName;
  newH1.textContent = h1Content;
  return newH1;
};

// Function to create div
const createDiv = (className) => {
  const newDiv = document.createElement("div");
  newDiv.classList = className;
  return newDiv;
};

// Function to create paragraph
const createP = (className, content) => {
  const newP = document.createElement("p");
  newP.classList = className;
  newP.textContent = content;
  return newP;
};

// Function to create input
const createInput = (inputClassName, inputType, placeHolder) => {
  const newInput = document.createElement("input");
  newInput.classList = inputClassName;
  newInput.type = inputType;
  newInput.placeholder = placeHolder;
  return newInput;
};

// Function to create image
const createImg = (imgClassName, imgSrc) => {
  const newImg = document.createElement("img");
  newImg.classList = imgClassName;
  newImg.src = imgSrc;
  return newImg;
};

export { creatH1, createDiv, createP, createInput, createImg };
