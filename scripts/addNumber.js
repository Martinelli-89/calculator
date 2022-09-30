//getting all numbers element, other than zero which will be handled separately, to attach event listener

const numbers = document.querySelectorAll(".numbers");


//function to add a number to the screen when clicked

const addNumber = (event) => {
    
    //getting screen and saving it into variable
    const screen = document.querySelector(".result");

    //If - else : either the screen is empty or with a zero and I can just print the number, or something else is already on screen and number pressed needs to follow it
    if (screen.innerText == "" || screen.innerText == 0) {
        screen.innerText=event.target.innerText;
    } else {
        screen.innerText+=event.target.innerText;
    }
}


//For loop to attach event listener to each number
for (let i=0; i<numbers.length; i++) {
    numbers[i].addEventListener("click", addNumber);
}