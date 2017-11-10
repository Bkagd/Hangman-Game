// Create an array of words
    var teams = ["yankees", "cubs", "dodgers", "red sox", "indians", "blue jays", "astros", "mets", "angels", "cardinals", "giants", "orioles", "rangers", "royals", "brewers", "diamondbacks", "twins", "nationals", "tigers", "phillies", "rockies", "pirates", "mariners", "braves", "marlins", "white sox", "reds", "padres", "athletics"];

// Choose word randomly from array
    var randNum = Math.floor(Math.random() * teams.length);
    var chosenWord = teams[randNum];
    var underScore = [];
    var rightWord = [];
    var wrongWord = [];
    console.log(chosenWord);

// Create underscores based on length of chosen word
    var generateUnderscore = () => {
        for(var i = 0; i < chosenWord.length; i++) {
            underScore.push("_");
        }
        return underScore;
    }
    console.log(generateUnderscore());

// Get the users guess
    document.addEventListener("keypress", (event) => {
        var keyCode = event.keyCode;
        var keyWord = String.fromCharCode(keyCode);
        console.log(keyWord);
    })
    

// Correct Guess       
     
    
// Check to see if guess is correct
// If right: push to right array
// If wrong: push to wrong array