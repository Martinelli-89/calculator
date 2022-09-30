//getting the element tha hold the zero

const zero = document.getElementById("Zero");

//function to add a number to the screen when clicked

const addZero = (event) => {
    
    //getting screen and saving it into variable
    const screen = document.querySelector(".result");
    console.log(screen);

    //If checl to be sure users can't add more than one zero to screen
    if (screen.innerText == "") {
        screen.innerText=event.target.innerText;
    } else if (screen.innerText != 0) {
        screen.innerText+=event.target.innerText;
    }
}


//Add event listener to zero button

zero.addEventListener("click", addZero);
