document.addEventListener("click", buttonClicked);

var slider = document.getElementById("pixelSliderRange");
var outpixelButtonput = document.getElementById("rangeValueText");

document.addEventListener("mousedown", MouseLeftDown);

function MouseLeftDown(e){};


slider.oninput = function() {
    
    dwgBlockSize = this.value;

    pixelButton.innerHTML = "Pixel Size: " + dwgBlockSize+ "px";

    dwgBoard.innerHTML = '';

    a = window.innerWidth - 300;
    b = window.innerHeight;

    dwgBoard.style.width = a.toString();

    numColumns = a / dwgBlockSize;
    numRows = b /dwgBlockSize; 

    for (let i = 0; i < (numColumns); i++){
        const dwgRow = document.createElement("span");
        dwgRow.id = "Row" + i;
        dwgRow.classList.add("dwgRow");
        document.getElementById('dwgBoard').appendChild(dwgRow);  
        for(let j = 0; j< numRows; j++){
            const element = document.createElement("div");
            element.style.backgroundColor = "orange";
            element.style.width = (dwgBlockSize +"px");
            element.style.height = (dwgBlockSize +"px");
            element.classList.add("dwgBlock");
            document.getElementById(dwgRow.id).appendChild(element);
            }  
    }
    
  }



colorPickerDiv.style.display = "none"
colorpicker.value = colorButton.style.backgroundColor 

var isColorPickerOn = false



dwgBlockSize = 50;
a = window.innerWidth - 300;
b = window.innerHeight;

dwgBoard.style.width = a.toString();

numColumns = a / dwgBlockSize;
numRows = b /dwgBlockSize; 

for (let i = 0; i < (numColumns); i++){
    const dwgRow = document.createElement("span");
    dwgRow.id = "Row" + i;
    dwgRow.classList.add("dwgRow");
    document.getElementById('dwgBoard').appendChild(dwgRow);  
    for(let j = 0; j< numRows; j++){
        const element = document.createElement("div");
        element.style.backgroundColor = "orange";
        element.style.width = (dwgBlockSize +"px");
        element.style.height = (dwgBlockSize +"px");
        element.classList.add("dwgBlock");
        document.getElementById(dwgRow.id).appendChild(element);
        }  
}




// Update the current slider value (each time you drag the slider handle)


function buttonClicked(e){
    
    if (isColorPickerOn == true){
        
        palette.click();
        colorPickerDiv.style.display = "none";
        isColorPickerOn = false
        return;
    }

    if (e.srcElement.id == "pixelButton"){clickPixelButton(e); return;}
    if (e.srcElement.id == "colorButton"){
        clickColorButton(e);
        return;}
    if (e.srcElement.id == "rgbButton"){clickRgbButton(e);return;}
    if (e.srcElement.id == "eraserButton"){clickEraserButtonon(e);return;}
    if (e.srcElement.id == "clearButton"){clickClearButton(e);return;}
    
}

function clickPixelButton(e) {
    var x = document.getElementById("pixelSlider");
    if (x.style.display == "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}

colorpicker.oninput = function() {
    colorButton.style.backgroundColor = this.value;
  }

function clickColorButton(e){
    var x = document.getElementById("colorPickerDiv");
    var colorpicker = document.getElementById("colorpicker")
    
    x.style.display = "block";
    colorpicker.focus();
    colorpicker.click();
    isColorPickerOn = true
}

