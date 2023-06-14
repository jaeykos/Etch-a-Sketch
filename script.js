document.addEventListener("click", buttonClicked);

var slider = document.getElementById("pixelSliderRange");
var outpixelButtonput = document.getElementById("rangeValueText");

slider.oninput = function() {
    pixelButton.innerHTML = "Pixel Size: " + this.value + "px";
  }

colorPickerDiv.style.display = "none"
colorpicker.value = colorButton.style.backgroundColor 

var isColorPickerOn = false

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

