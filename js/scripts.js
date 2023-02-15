   var x = Math.floor((Math.random() * 6) + 1);//random number 1-6 just to show how to eliminate 0
  var y = Math.floor((Math.random() * 7));
  //random number 0-6 stored in y
//Math.floor makes it a whole number and rounds down

var randImage = new Array(); //creates a new list of image locations
randImage[0] = "images/brazzers.webp"; //stores the image location as text in the array number in the square brackets. You might put something ilke images/dog.jpg
randImage[1] = "images/brazzers.webp";
randImage[2] = "images/brazzers.webp";
randImage[3] = "images/brazzers.webp";
randImage[4] = "images/brazzers.webp";
randImage[5] = "images/brazzers.webp";
randImage[6] = "images/brazzers.webp";
randImage[7] = "images/brazzers.webp";

//tells the document to to show the array with the same number the random number generator created. I gave it a width too to try and keep them semi consitant 
document.getElementById("pic").src = randImage[x];
//this does the same thing but references the id number, which gives you the chance to make a couple with different set locations. I used x so the images would be different most of the time, but it will not include the first item on the list

