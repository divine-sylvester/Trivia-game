let questions = Array("What is the nearest planet to the sun?", "What is the largest mountain?", "When is Nigeria independence?", "The outer part of bread is called?, The smallest animal is called?")
let answers = Array("Mercury", "Mount everest", "1st October 1960", "Crust", "Myxozoans")
let score = 0;
let totalScore = 5;

function checkResponse(){
    for(i = 0; i < 5; i++){
        response = prompt(questions[i])

        if(response.length === 0){
            alert("Please Input Answer!")
            checkResponse()
        }

        else if(response.length > 0){
            if(response === answers[i]){
                score += 1
                alert("Correct!")
            }
            else{
                alert("Incorrect!")
            }
        }
    }
    alert("You have completed the test")
    alert("You scored" +score+ "/" + totalScore)
}
checkResponse();