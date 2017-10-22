var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");

var p1Score = 0;
var p2Score = 0;

// Player One Button - Increases score by one and displays on screen.
p1Button.addEventListener("click", function(){
  p1Score++;
  p1Display.textContent = p1Score;
});

// Player Two Button - Increases score by one and displays on screen.
p2Button.addEventListener("click", function(){
  p2Score++;
  p2Display.textContent = p2Score;
});

// Reset Button - Resets both scores to 0.
resetButton.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
});