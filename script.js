document.addEventListener("click", buttonClicked);

function buttonClicked(e){
    if (e.srcElement.id == "pixelButton"){clickPixelButton(e);}
    if (e.srcElement.id == "colorButton"){clickColorButton(e);}
    if (e.srcElement.id == "rgbButton"){clickRgbButton(e);}
    if (e.srcElement.id == "eraserButtonon"){clickEraserButtonon(e);}
    if (e.srcElement.id == "clearButton"){clickClearButton(e);}
}

function clickPixelButton(e) {
    
}