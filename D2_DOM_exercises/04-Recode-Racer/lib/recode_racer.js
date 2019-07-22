// TODO: write your code here
function logKey(x){
  if (x.keyCode === 81) {
    var playerOnePos = document.querySelector("#player1_race .active");
    if (playerOnePos.nextElementSibling === null){
      alert("Player-1 WIN!");
      document.location.reload(); 
    }
    else {
      playerOnePos.classList.remove("active");
      playerOnePos.nextElementSibling.classList.add("active");
    }
  }
  if (x.keyCode === 80) {
    var playerTwoPos = document.querySelector("#player2_race .active");
    if (playerTwoPos.nextElementSibling === null){ 
      alert("Player-2 WIN!");
      document.location.reload(); 
    }
    else {
      playerTwoPos.classList.remove("active");
      playerTwoPos.nextElementSibling.classList.add("active");
    }
  }
}

document.addEventListener("keyup", logKey);
