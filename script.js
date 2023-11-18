setTimeout(function () {
  window.scrollTo(0, 0);
}, 200); //scroll to top-left when page loads; timeout set to delay; othewise doesn't work

//colors for rgb mode
const colors = [
  "#ff6666",
  "#ff9966",
  "#cccc00",
  "#33ff99",
  "#80dfff",
  "#9999ff",
  "#cc99ff",
];
let colorIndex = -1;

//default on/off boolean values
let isMouseLeftDown = false;
let isPaintColorPickerOn = false;
let isBorderColorPickerOn = false;
let isBackgroundColorPickerOn = false;
let isRgbModeOn = false;
let isEraserModeOn = false;
let backgroundSelectedColor = "white";
let borderSelectedColor = "black";
let paintSelectedColor = "rgb(182, 182, 182)";

//populate drawing blocks in drawing board
let dwgBlockSize = 50;
resetDwgBoardWithPixelSize();
paintColorButton.style.backgroundColor = "rgb(182, 182, 182)";

document.addEventListener("click", (e) => {
  backgroundColorPickerDiv.style.display = "none";
  borderColorPickerDiv.style.display = "none";
  paintColorPickerDiv.style.display = "none";

  if (
    e.target.id != "pixelSlider" &&
    e.target.id != "pixelButton" &&
    e.target.id != "pixelSliderRange"
  ) {
    pixelSlider.style.display = "none";
  }

  if (e.target.id == "pixelButton") {
    clickPixelButton(e);
    return;
  }
  if (e.target.id == "backgroundColorButton") {
    clickBackgroundColorButton(e);
    return;
  }
  if (e.target.id == "borderColorButton") {
    clickBorderColorButton(e);
    return;
  }
  if (e.target.id == "paintColorButton") {
    clickPaintColorButton(e);
    return;
  }
  if (e.target.id == "rgbButton") {
    clickRgbButton(e);
    return;
  }
  if (e.target.id == "eraserButton") {
    clickEraserButton(e);
    return;
  }
  if (e.target.id == "clearButton") {
    clickClearButton(e);
    return;
  }
});

function clickEraserButton() {
  if (isEraserModeOn == false) {
    isEraserModeOn = true;
    eraserButton.style.opacity = "30%";
    return;
  } else if (isEraserModeOn == true) {
    isEraserModeOn = false;
    eraserButton.style.opacity = "100%";
    return;
  }
}

function clickClearButton(e) {
  resetDwgBoardWithPixelSize();
}

function clickRgbButton() {
  if (isRgbModeOn == false) {
    isRgbModeOn = true;
    rgbButton.style.background =
      "linear-gradient(90deg," +
      "rgba(255, 0, 0, 1) 0%," +
      "rgba(255, 154, 0, 1) 10%," +
      "rgba(208, 222, 33, 1) 20%," +
      "rgba(79, 220, 74, 1) 30%," +
      "rgba(63, 218, 216, 1) 40%," +
      "rgba(47, 201, 226, 1) 50%," +
      "rgba(28, 127, 238, 1) 60%," +
      "rgba(95, 21, 242, 1) 70%," +
      "rgba(186, 12, 248, 1) 80%," +
      "rgba(251, 7, 217, 1) 90%," +
      "rgba(255, 0, 0, 1) 100%";
    return;
  } else if (isRgbModeOn == true) {
    isRgbModeOn = false;
    rgbButton.style.background = "";
    return;
  }
}

function clickPixelButton(e) {
  if (pixelSlider.style.display == "none") {
    pixelSlider.style.display = "flex";
  } else {
    pixelSlider.style.display = "none";
  }
}

function clickPaintColorButton(e) {
  paintColorPickerDiv.style.display = "flex";
  paintColorPicker.focus();
  paintColorPicker.click();
  isPaintColorPickerOn = true;
}

function clickBackgroundColorButton(e) {
  backgroundColorPickerDiv.style.display = "flex";
  backgroundColorPicker.focus();
  backgroundColorPicker.click();
  isBackgroundColorPickerOn = true;
}

function clickBorderColorButton(e) {
  borderColorPickerDiv.style.display = "flex";
  borderColorPicker.focus();
  borderColorPicker.click();
  isBorderColorPickerOn = true;
}

borderColorPicker.oninput = function () {
  borderSelectedColor = this.value;
  borderColorButton.style.backgroundColor = borderSelectedColor;
  resetDwgBoardWithPixelSize();
};

backgroundColorPicker.oninput = function () {
  backgroundSelectedColor = this.value;
  backgroundColorButton.style.backgroundColor = backgroundSelectedColor;
  resetDwgBoardWithPixelSize();
};

paintColorPicker.oninput = function () {
  paintSelectedColor = this.value;
  paintColorButton.style.backgroundColor = paintSelectedColor;
};

document.addEventListener("mousedown", (e) => {
  if (e.target.classList == "dwgBlock") {
    e.preventDefault();
    isMouseLeftDown = true;
    if (isEraserModeOn == true) {
      e.target.style.backgroundColor = backgroundSelectedColor;
    } else if (isRgbModeOn == true) {
      if (colorIndex >= colors.length - 1) {
        colorIndex = 0;
      } else {
        colorIndex++;
      }
      e.target.style.backgroundColor = colors[colorIndex];
    } else if (isRgbModeOn == false) {
      e.target.style.backgroundColor = paintSelectedColor;
    }
  }
});

addEventListener("mouseover", (e) => {
  if (e.target.classList == "dwgBlock" && isMouseLeftDown == true) {
    if (isEraserModeOn == true) {
      e.target.style.backgroundColor = backgroundSelectedColor;
    } else if (isRgbModeOn == true) {
      if (colorIndex >= colors.length - 1) {
        colorIndex = 0;
      } else {
        colorIndex++;
      }
      e.target.style.backgroundColor = colors[colorIndex];
    } else if (isRgbModeOn == false) {
      e.target.style.backgroundColor = paintSelectedColor;
    }
  }
});

document.addEventListener("mouseup", (event) => {
  isMouseLeftDown = false;
});

pixelSliderRange.oninput = function () {
  dwgBlockSize = this.value;
  resetDwgBoardWithPixelSize();
};

function resetDwgBoardWithPixelSize() {
  pixelButton.innerHTML = "Pixel Size: " + dwgBlockSize + "px";

  dwgBoard.innerHTML = "";
  dwgBoardWidth = body.clientWidth - 300;
  dwgBoardHeight = window.innerHeight;

  dwgBoard.style.width = dwgBoardWidth.toString() + "px";

  numColumns = dwgBoardWidth / dwgBlockSize;
  numRows = dwgBoardHeight / dwgBlockSize;

  for (let i = 0; i < numColumns; i++) {
    const dwgRow = document.createElement("span");
    dwgRow.id = "Row" + i;
    dwgRow.classList.add("dwgRow");
    document.getElementById("dwgBoard").appendChild(dwgRow);

    for (let j = 0; j < numRows; j++) {
      const element = document.createElement("div");
      element.style.width = dwgBlockSize + "px";
      element.style.height = dwgBlockSize + "px";
      element.style.backgroundColor = backgroundSelectedColor;
      element.style.borderColor = borderSelectedColor;
      element.classList.add("dwgBlock");
      document.getElementById(dwgRow.id).appendChild(element);
    }
  }
}
