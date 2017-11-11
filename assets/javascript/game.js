// Create an array of words
    var teams = ["cubs", "red sox", "blue jays", "mets", "angels", "giants", "rangers", "royals", "twins", "tigers", "rockies", "pirates", "braves", "marlins", "white sox", "reds", "padres",];

// Choose word randomly from array
    var randNum = Math.floor(Math.random() * teams.length);
    var chosenWord = teams[randNum];
    var rightWord = [];
    var wrongWord = [];
    var underScore = [];

    console.log(chosenWord);

// Create underscores based on length of chosen word
    var generateUnderscore = () => {
        for(var i = 0; i < chosenWord.length; i++) {
            underScore.push("_");
        }
        return underScore;
    }
    console.log(generateUnderscore());
// Display Underscores on page
function placeScore() {
    document.getElementsByClassName("underscore").innerHTML = "working";
} 


// Get the users guess
    document.addEventListener("keypress", (event) => {
        var keyCode = event.keyCode;
        var keyWord = String.fromCharCode(keyCode);
// if guess is right
        if (chosenWord.indexOf(keyWord) > -1) {
            rightWord.push(keyWord);
            underScore[chosenWord.indexOf(keyWord)] = keyWord;
            console.log(underScore);
            if (underScore.join("") == chosenWord) {
                alert("You are the champ!");
            }
        } else {
            wrongWord.push(keyWord);
            console.log(wrongWord);
            
        }
    });
// Display underscores based on length of chosenWord
   
  

    

     
     
    
