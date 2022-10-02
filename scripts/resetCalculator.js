//Takes reset element so we can attache and event listener to it
let reset = document.querySelector(".reset");
if (reset == null) {
    reset = document.querySelector(".resetNew");
}


//Function to reset the screen
const clearScreen = () => {

    //Check if calculator is on. If not button is not working
    if(isCalcOn()!=true) {
        return;
    }

    //Takes both screen element to reset
    let screen = document.querySelector(".result");
    let screen2 = document.querySelector(".tempDisplay");
        if (screen == null) {
            screen = document.querySelector(".resultNew");
            screen2 = document.querySelector(".tempDisplayNew");
        }
    screen.innerText = "";
    screen2.innerText = "";

    //Takes active operators and reset them

    const activeOperator = document.querySelector(".active");
    activeOperator.classList.remove("active");
}

//Assigning eventListener to reset button so function can run when needed

reset.addEventListener("click",clearScreen);