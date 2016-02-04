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
   
      

//create the buildThumbnail function
function buildThumbnails()
{
  //hook onto the thumbs div
  var thumbsDiv =     document.getElementById("thumbs");
 
  var output = "";
  for(var i=0; i < 10; i++)
  {
    output += '<img src="' + imageList[i] + '" />'; 
    //concatenation assignment operator 
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






