//computer randomly chooses a name from a list (an array?) of 10 artists

var computerChoice = Math.floor(Math.random() * 10) + 1
console.log(computerChoice)

var artist = ["Leonardo da Vinci", "Michelangelo", "Raphael", "Titian", "Giorgione", "Giovanni Bellini","Botticelli", "Perugino", "Verrocchio", "Ghirlandaio" ]







//user clicks on a button (listener)
$(".btn-choice").click(function() {

  //get the value of said button and convert to a number
  var userChoice = parseInt($(this).val());

  //compare that to the computer choice
  if(userChoice === computerChoice) {
      //update results
      $("#result").text("You Win!!");
      //start a new game
      computerChoice = Math.floor(Math.random() * 10) + 1;
      console.log(computerChoice);
  } else {
      //update results
      $("#result").text("You Lose!!");
      //start a new game
      computerChoice = Math.floor(Math.random() * 10) + 1;
      console.log(computerChoice);
  }
})


