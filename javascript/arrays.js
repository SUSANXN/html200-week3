//create an array 
var color = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//variables IN functions (function scope), can see global varibles)


var imageList = new Array();
imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
imageList[5] = "images/drawing/thumbs/artwork_6.jpg";
imageList[6] = "images/drawing/thumbs/artwork_7.jpg";
imageList[7] = "images/drawing/thumbs/artwork_8.jpg";
imageList[8] = "images/drawing/thumbs/artwork_9.jpg";
imageList[9] = "images/drawing/thumbs/artwork_10.jpg";
imageList[10] = "images/drawing/thumbs/artwork_11.jpg";
imageList[11] = "images/drawing/thumbs/artwork_12.jpg";
imageList[12] = "images/drawing/thumbs/artwork_13.jpg";
imageList[13] = "images/drawing/thumbs/artwork_14.jpg";
imageList[14] = "images/drawing/thumbs/artwork_15.jpg";
   
var imageListA = new Array();
imageListA[0] = "images/oil/thumbs/artwork_1.jpg";
imageListA[1] = "images/oil/thumbs/artwork_2.jpg";
imageListA[2] = "images/oil/thumbs/artwork_3.jpg";
imageListA[3] = "images/oil/thumbs/artwork_4.jpg";
imageListA[4] = "images/oil/thumbs/artwork_5.jpg";
imageListA[5] = "images/oil/thumbs/artwork_6.jpg";
imageListA[6] = "images/oil/thumbs/artwork_7.jpg";
imageListA[7] = "images/oil/thumbs/artwork_8.jpg";

var imageListB = new Array();
imageListB[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListB[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListB[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListB[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListB[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListB[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListB[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListB[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListB[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListB[9] = "images/watercolor/thumbs/artwork_10.jpg";

      

//create the buildThumbnail function
function buildThumbnails()
{
  //hook onto the thumbs div
  var thumbsDiv =     document.getElementById("thumbs");
 
  var output = "";
  for(var i=0; i < 8; i++)
  {
    output += '<img src="' + imageList[i] + '" />'; 
  }
  
    for(var j=0; j < 8; j++)
  {
    output += '<img src="' + imageListA[j] + '" />'; 
  }
  
    for(var k=0; k < 8; k++)
  {
    output += '<img src="' + imageListB[k] + '" />'; 
  }
     thumbsDiv.innerHTML = output;
  //thumbsDiv.innerHTML =
  //'<img src="' + imageList[0] + '" />' + 
  //'<img src="' + imageList[1] + '" />' +
  //'<img src="' + imageList[2] + '" />' +
  //'<img src="' + imageList[3] + '" />' +    
  //'<img src="' + imageList[4] + '" />'
   //;  

}
  
window.onload = function()
{
  buildThumbnails();
};






