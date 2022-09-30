//Takes reset element so we can attache and event listener to it
const reset = document.querySelector(".reset");

//Function to reset the screen
const clearScreen = () => {

    //Takes screen element to reset
    const screen = document.querySelector(".result");

    screen.innerText = "";
}

//Assigning eventListener to reset button so function can run when needed

reset.addEventListener("click",clearScreen);