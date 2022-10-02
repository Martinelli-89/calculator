//getting the element that hold the negativve number button

let negative = document.querySelector(".negative");
if (negative == null) {
    negative = document.querySelector(".negativeNew");
}

//function to add a number to the screen when clicked

const toggleNumber = (event) => {

    //Check if calculator is on. If not button is not working
    if(isCalcOn()!=true) {
        return;
    }
    
    //getting screen and saving it into variable
    let screen = document.querySelector(".result");
    if (screen == null) {
        screen = document.querySelector(".resultNew");
    }

    const numberOnScreen = screen.innerText;
    
    //if screen is empty just add a minus to it or remove it if it is the only item on screen
    if (numberOnScreen =="") {
        screen.innerText= "-";
    } else if (numberOnScreen =="-") {
        screen.innerText= "";
    } else {
    
        const isNumberNegative = numberOnScreen.includes("-");
        const numberToString = numberOnScreen.split('');

        //If check to toggle number
        if (isNumberNegative == true) {
            numberToString.splice(0, 1);
        } else {
            numberToString.splice(0,0, "-");
        }

        screen.innerText = numberToString.join('');
    }
}

//Add event listener to negative button

negative.addEventListener("click", toggleNumber);