var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = document.querySelectorAll("img")[0].setAttribute("src" ,"images/dice" + randomNumber1 + ".png" ); //sets a random dice image

// for second image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = document. querySelectorAll("img")[1].setAttribute("src" , "images/dice" + randomNumber2 + ".png"); //sets a random die for player2

//display if player wins or draws
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 WINS ❗❗";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "🚩 Player 2 WINS ❗❗";
}else   document.querySelector("h1").textContent = "DRAW";
