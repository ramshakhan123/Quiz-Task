let que1 = document.querySelector("#que-part-1");
let que2 = document.querySelector("#que-part-2");
let que3 = document.querySelector("#que-part-3");
let que4 = document.querySelector("#que-part-4");
let que5 = document.querySelector("#que-part-5");
let resultBtn = document.querySelector(".result-btn");
let congratulations = document.querySelector("h2");
let useBrain = document.querySelector("h1");
let score = 0;
function showFirst() {
    que2.style.display = "none";
    que3.style.display = "none";
    que4.style.display = "none";
    que5.style.display = "none";
    resultBtn.style.display = "none";
    congratulations.style.display = "none";

}

function showNext2() {
    que2.style.display = "block";
    document.querySelector("#que-part-1").style.display = "none";
}

function showNext3() {
    que3.style.display = "block";
    que2.style.display = "none";
}

function showNext4() {
    que4.style.display = "block";
    que3.style.display = "none";
}

function showNext5() {
    que5.style.display = "block";
    que4.style.display = "none";
    resultBtn.style.display = "block";
}

function result() {
    congratulations.style.display = "block";
    document.querySelector("#quiz").style.display = "none";
    useBrain.style.display = "none";


    let question1 = document.querySelector("#myques1").checked;
    let question2 = document.querySelector("#myques2").checked;
    let question3 = document.querySelector("#myques3").checked;
    let question4 = document.querySelector("#myques4").checked;
    let question5 = document.querySelector("#myques5").checked;




    if (question1) {
        score++;
    }
    if (question2) {
        score++;
    }
    if (question3) {
        score++;
    }
    if (question4) {
        score++;
    }
    if (question5) {
        score++;
    }
    document.querySelector("#total-score").innerHTML = "Your total score is " + score;
}