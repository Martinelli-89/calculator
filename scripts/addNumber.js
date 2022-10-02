//getting all numbers element, other than zero which will be handled separately, to attach event listener

let numbers = document.querySelectorAll(".numbers");
if(numbers==null) {
    numbers = document.querySelectorAll(".numbersNew");
}


//function to add a number to the screen when clicked

const addNumber = (event) => {

    //Check if calculator is on. If not button is not working
    if(isCalcOn()!=true) {
        return;
    }
    
    //getting screen and saving it into variable
    let screen = document.querySelector(".result");
    let topscreen = document.querySelector(".tempDisplay");
    const active = document.querySelector(".active");
    if (screen==null) {
        screen = document.querySelector(".resultNew");
        topscreen = document.querySelector(".tempDisplayNew");
    }
    
    //Checking top screen and if any operator is active. If none is active new operation is startin and top screen can be cleared
    if (topscreen.innerText != "" && active==null) {
        topscreen.innerText = "";
    }

    //If - else : either the screen is empty or with a zero and I can just print the number, or something else is already on screen and number pressed needs to follow it
    if (screen.innerText == "" || screen.innerText == "0") {
        screen.innerText=event.target.innerText;
    } else {
        screen.innerText+=event.target.innerText;
    }
}


//For loop to attach event listener to each number
for (let i=0; i<numbers.length; i++) {
    numbers[i].addEventListener("click", addNumber);
}