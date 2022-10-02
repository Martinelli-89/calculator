//getting the element tha hold the zero

let dot = document.querySelector(".dot");
if(dot ==null) {
    dot = document.querySelector(".dotNew");
}

//function to add a number to the screen when clicked

const addDot = (event) => {

    //Check if calculator is on. If not button is not working
    if(isCalcOn()!=true) {
        return;
    }
    
    //getting screen and saving it into variable
    let screen = document.querySelector(".result");
    if(screen == null) {
        screen = document.querySelector(".resultNew");
    }


    const hasDotAlready = screen.innerText.includes(".");

    //If check to be sure users can't add more than one dot or can add a dot if no number are on the screen
    if (screen.innerText == "" || hasDotAlready == true) {
        return;
    } else {
        screen.innerText+=event.target.innerText;
    }
}


//Add event listener to zero button

dot.addEventListener("click", addDot);