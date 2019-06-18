//computer chooses a name from a list of 10

var computerChoice = Math.floor(Math.random() * 10) + 1

console.log(computerChoice)



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


