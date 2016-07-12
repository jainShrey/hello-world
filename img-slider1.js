// JavaScript Document


var i = 0;
var path = new Array();
 
// LIST OF IMAGES
path[9] = "Images/Home/pic_2.JPG";
path[8] = "Images/Home/1.JPG";
path[7] = "Images/Home/pic_1.JPG";
path[6] = "Images/Home/gst2_3.JPG";
path[5] = "Images/Home/gst2_2.JPG";
path[4] = "Images/Home/DSC_0048.JPG";
path[1] = "Images/Home/DSC_0069.JPG";
path[2] = "Images/Home/DSC_0090.JPG";
path[3] = "Images/Home/gst2_5.JPG";
path[0] = "Images/Home/gst2_6.JPG";
function swapImage1()
{
   document.slide.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("swapImage1()",2800);
}
window.onload=swapImage1;

