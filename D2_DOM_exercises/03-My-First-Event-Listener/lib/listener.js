// TODO: React to a click on the button!
function myPlay(){
  document.querySelector("#clickme").innerHTML = "Bingo!";
  document.querySelector("#clickme").classList.add("disabled");
  var audio = new Audio("sound.mp3");
  audio.play();
}
document.getElementById("clickme").addEventListener("click", myPlay);