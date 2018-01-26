// figure out the height the user typed
var heightInput = document.getElementById("height");
var brickSelect = document.getElementById("brick");
heightInput.oninput = startDraw;
brickSelect.onchange = startDraw;

function startDraw() {

    // convert the string to an int
    var heightStr = heightInput.value;
    var height = parseInt(heightStr);
    var brickStr = brickSelect.value;

    // draw pyramid with that height
    drawPyramid(height, brickStr);
}

 function drawPyramid(height, brick) {

     // first, clear the old content
     document.getElementById("pyramid").innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += " ";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += brick;
         }

        // create a text element with the string of characters
        var textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        var rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
