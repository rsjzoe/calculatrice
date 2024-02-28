const buttons = document.querySelectorAll(".btn");
const answerSreen = document.querySelector(".answer");
const equal = document.querySelector(".egal");
let val1 = "";
let val2 = "";
let operator = "";

function clearScreen() {
    answerSreen.textContent = "";
    val1 = "";
    val2 = "";
    operator = "";
}
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        answerSreen.textContent += e.target.value;
        // val1 = e.target.value
        if (
            e.target.value == "+" ||
            e.target.value == "-" ||
            e.target.value == "*" ||
            e.target.value == "/"
        ) {
            operator = e.target.value;
        }
        if (operator != "") {
            /*------ raha nombre de tsy miditra ao amin val2---*/
            if (isNaN(e.target.value)) {
            } else {
                val2 += e.target.value;
            }
        } else {
            val1 += e.target.value;
        }
    });
});

equal.addEventListener("click", () => {
    if (operator == "+") {
        answerSreen.textContent = parseInt(val1)+ parseInt(val2);
    }
    if (operator == "-") {
        answerSreen.textContent = val1 - val2;
    }
    if (operator == "*") {
        answerSreen.textContent = val1 * val2;
    }
    if (operator == "/") {
        answerSreen.textContent = val1 / val2;
    }
66
});
