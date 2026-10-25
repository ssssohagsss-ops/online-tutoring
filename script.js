function validate() {
    if (document.getElementById("passcode").value.length >= 8) {
 alert("Your password is valid")
    }
    else {
        alert("Please enter a password with at least 8 characters.");
    }
}
document.getElementById("answers").style.opacity = "0";
function showAnswers() {
    document.getElementById("answers").style.opacity = "1";
}
function checkAnswers() {
    var answer1 = document.getElementById("answer1").value;
    var answer2 = document.getElementById("answer2").value;
    var answer3 = document.getElementById("answer3").value;
    var answer4 = document.getElementById("answer4").value;
    if (answer1 === "225"){
        alert("Question 1 is correct!");
    }
    else{
        alert("Question 1 is incorrect. Please try again.");
    }
    if (answer2 === "push, pull" || answer2 === "pull, push"){
        alert("Question 2 is correct!");
    }
    else{
        alert("Question 2 is incorrect. Please try again.");
    }
    if (answer3 === "false"){
        alert("Question 3 is correct!");
    }
    else{
        alert("Question 3 is incorrect. Please try again.");
    }
    if (answer4 === "45"){
        alert("Question 4 is correct!");
    }
    else{
        alert("Question 4 is incorrect. Please try again.");
    }
}
function hideAnswers() {
    document.getElementById("answers").style.opacity = "0";
}