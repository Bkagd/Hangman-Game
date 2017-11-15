// Create an array of words
    var teams = ["cubs", "red sox", "blue jays", "mets", "angels", "giants", "rangers", "royals", "twins", "tigers", "rockies", "pirates", "braves", "marlins", "white sox", "reds", "padres",];

    var randNum = Math.floor(Math.random() * teams.length);
    var chosenWord = teams[randNum];
    var rightWord = [];
    var wrongWord = [];
    var underScore = [];
    var win = 0;
    var loss = 0;

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
            $(".rightGuess").append(rightWord.join(""));
            underScore[chosenWord.indexOf(keyWord)] = keyWord;
            console.log(underScore);
            $(".underscore").text(underScore.join(" "));
// if user Wins        
        if (underScore.join("") == chosenWord) {
                alert("You are the champ!");
                win++
                $(".win").text("Wins: " + win);
            }
        } else {
            wrongWord.push(keyWord);
            $(".wrongGuess").append(wrongWord.join(""));
            
            console.log(wrongWord);
            
        }

        function reset() {
            var randNum = Math.floor(Math.random() * teams.length);
            var chosenWord = teams[randNum];
            var rightWord = [];
            var wrongWord = [];
            var underScore = [];
        }
        $("#reset").click(reset());
    });
// Reset Button
       
   
  

    

     
     
    
