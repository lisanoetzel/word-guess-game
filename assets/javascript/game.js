//Test to see if JS is properly linked ~~ it works !!
// alert("Test"); //works !

//******************* */Global Variables***************************************

var artistOptions = ["Leonardo", "Raffaello", "Michelangelo", "Tiziano", "Giorgione", "Bellini", "Botticelli", "Perugino", "Verrocchio", "Ghirlandaio", "Donatello"];

//Temporarily giving up on the object model to go with the above name array

//var artistOptions = [{
//  name:"Leonardo",
//  image: src="assets/images/Leonardo.jpg" 
//}, {
//  name: "Raffaello",
//  image: src="assets/images/Raffaello.jpg"
//}, {
//  name: "Michelangelo",
//  image: src="assets/images/Michelangelo.jpg"
//}, {
//  name: "Tiziano",
//  image: src="assets/images/Tiziano.jpg"
//}, {
//  name: "Giorgione",
//  image: src="assets/images/Giorgione.jpg"
//}, {
//  name: "Bellini",
//  image: src="assets/images/Bellini.jpg"
//}, {
//  name: "Botticelli",
//  image: src="assets/images/Botticelli.jpg"
//}, {
//  name: "Perugino",
//  image: src="assets/images/Perugino.jpg"
//}, {
//  name: "Verrocchio",
//  image: src="assets/images/Verrocchio.jpg"
//}, {
//  name: "Ghirlandaio",
//  image: src="assets/images/Ghirlandaio.jpg"
//}, {
//  name: "Donatello",
//  image: src="assets/images/Donatello.jpg"
//}];

var computerChoice = "";
var lettersinName = [];
var numBlanks = 0;
var rightGuesses = [];
var wrongGuesses = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 5;

//**************************  FUNCTIONS   **********************

// in this 1st function, the computer randomly chooses an artist from the options array 

function startGame (){ 
  computerChoice = artistOptions[Math.floor(Math.random() * artistOptions.length)];
  // this splits the artist's name into individual letters
        lettersinName = computerChoice.split("");
  // this counts the number of blanks needed for each letter in a name
        numBlanks = lettersinName.length; 

  // this part resets the game
        guessesLeft = 5;
        wrongGuesses = [];
        rightGuesses = [];

  // this replaces the letters in a name and poulates them with blanks 
      for (var i=0; i<numBlanks; i++){
        rightGuesses.push("_");
      } //ln 73

  // this changes HTML to reflect the conditions
      document.getElementById("blanks").innerHTML = rightGuesses.join(" ");
      document.getElementById("numGuesses").innerHTML = guessesLeft;
      document.getElementById("winCounter").innerHTML = winCount;
      document.getElementById("lossCounter").innerHTML = lossCount;

  // Testing
      console.log(computerChoice); //works - spits out random names !
      console.log(lettersinName); // works - "L", "e", "o", etc.
      console.log(numBlanks); // works - "Bellini" 7
      console.log(rightGuesses); // works -  "_", "_", "_", etc.
} // ln 60
      
// this 2nd function compares the letters chosen by user + the letters in the artist's name
 // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function checkLetters(letter) {
  // testing for letter in word
  console.log(letter); // PROBLEMS PROBLEMS ~~ cf. console.log"Letter Found" in PROCESSING
  var isLetterinWord = false;
  for (var i=0; i<numBlanks; i++){
    if(computerChoice[i] == letter){
      isLetterinWord = true;
    } //ln 97
  } // ln 96

  // this checks where letters appear in names + populates them in rightGuesses ~~ PROBLEMS HERE ~~
    if(isLetterinWord) {
      for (var i=0; i<numBlanks; i++) {
        if(computerChoice[i] == letter){
          rightGuesses[i] = letter;
          } //ln 105
        } //ln 104
    } //ln 103  
    else {  // letter is not found
      wrongGuesses.push(letter);
      guessesLeft--;
    } //ln 110
  // Testing
    console.log(rightGuesses); //~~~~~~~~~~~~~~~~~~~~~~~~~
} // ln 92

//*******************  Processing ***************************

  // this runs the code for the first time
      startGame(); 
  
  // this registers the user's keyclicks i.e. this is a listener
      document.onkeyup = function(event) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        // test for user's keyclick
            console.log(letterGuessed); // works  
            console.log("Letter found"); 

  //this runs the 2nd function - comparing user's letters to those in name
      checkLetters(letterGuessed);// PROBLEM!!! says all letters chosen by user are in artist's name - 
      } //ln 122
