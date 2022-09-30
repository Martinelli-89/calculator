//Takes reset element so we can attache and event listener to it
const reset = document.querySelector(".reset");

//Function to reset the screen
const clearScreen = () => {

    //Takes both screen element to reset
    const screen = document.querySelector(".result");
    const screen2 = document.querySelector(".tempDisplay");
    screen.innerText = "";
    screen2.innerText = "";

    //Takes active operators and reset them

    const activeOperator = document.querySelector(".active");
    activeOperator.classList.remove("active");
}

//Assigning eventListener to reset button so function can run when needed

reset.addEventListener("click",clearScreen);