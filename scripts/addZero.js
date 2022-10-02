//getting the element tha hold the zero

let zero = document.querySelector(".zero");
if ( zero == null ) {
    zero = document.querySelector(".zeroNew");
}

//function to add a number to the screen when clicked

const addZero = () => {

    //Check if calculator is on. If not button is not working
    if(isCalcOn()!=true) {
        return;
    }
    
    //getting screen and saving it into variable
    let screen = document.querySelector(".result");
    if (screen == null) {
        screen = document.querySelector(".resultNew");
    }

    //If checl to be sure users can't add more than one zero to screen
    if (screen.innerText != "0") {
        screen.innerText = screen.innerText + "0";
    }
}


//Add event listener to zero button

zero.addEventListener("click", addZero);
