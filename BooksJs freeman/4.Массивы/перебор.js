var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


    
function printAndGetHighScore(scores) {

    var highScore = 0;
    var output;

    for (var i = 0; i < scores.length; i++){
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if(scores[i] > highScore) {
            highScore = scores[i];

        }
    }

    return highScore;

}

function getBestResults(scores, highScore) {
    var bestSolution = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolution.push(i);
        }
    }
    return bestSolution;
}

var highScore = printAndGetHighScore(scores);
console.log("Bubbles test: " + scores.length);
console.log("Highest bubble score: " + highScore);


var bestSolution = getBestResults(scores, highScore);
console.log("Solution with the highest score: " + bestSolution);


