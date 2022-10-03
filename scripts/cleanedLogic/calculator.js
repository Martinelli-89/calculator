 //Element to find out if calc is on or off
 const bottone = document.querySelector(".onOff") // Same element as onBut but different class name since onButton updates to onButtonNew when style change to Iphone
 const isOn = document.querySelector(".power"); // Check if any element has the class power, which is applied only when the on button is pressed

 
 //Checking which version of the calculator is active
 const version = document.querySelector(".old");
 
 //Getting DOM Elements depending on which version of the calculator is active

 let dot;
 let numbers;
 let zero;
 let reset;
 let negative;
 let operators;

 if(version != null ) {

    dot = document.querySelector(".dot");
    numbers = document.querySelectorAll(".numbers");
    zero = document.querySelector(".zero");
    reset = document.querySelector(".reset");
    negative = document.querySelector(".negative");
    operators = document.querySelectorAll(".operator");

 } else {

    dot = document.querySelector(".dotNew");
    numbers = document.querySelectorAll(".numbersNew");
    zero = document.querySelector(".zeroNew");
    reset = document.querySelector(".resetNew");
    negative = document.querySelector(".negativeNew");
    operators = document.querySelectorAll(".operatorNew");

 }


 const calculate = (event) => {

     //Element to find out if calc is on or off
    const bottone = document.querySelector(".onOff") // Same element as onBut but different class name since onButton updates to onButtonNew when style change to Iphone
    const isOn = document.querySelector(".power"); // Check if any element has the class power, which is applied only when the on button is pressed
    
    //Checking which version of the calculator is active
    const version = document.querySelector(".old");
    
    //Getting DOM Elements depending on which version of the calculator is active

    let mainScreen;
    let secondScreen;
    let active;

    if(version != null) {
        mainScreen = document.querySelector(".result");
        secondScreen = document.querySelector(".tempDisplay");
        active = document.querySelector(".active");
    } else {
        mainScreen = document.querySelector(".resultNew");
        secondScreen = document.querySelector(".tempDisplayNew");
        active = document.querySelector(".active");
    }

    //Handling on-off button
    if(event.target.id == "on") {
        if (isOn == null) { //If is on it means calculator is off. If statement turn power on if needed or switch it off
            bottone.classList.add("power");
            mainScreen.innerText="0"; //If calculator is the old one and power is turn on a zero is added on screen

        } else { //else statement that turn off calculator and clear all content from screen and turn any active button inactive
            bottone.classList.remove("power");
            if(active != null) {
                active.classList.remove("active");
            }
            mainScreen.innerText="";
            secondScreen.innerText="";
            return;
        }
    }

    //Ending function if power is not on
    if(isOn == null) {
        return;
    }

    //Handling reset button 
    else if(event.target.id == "reset") { 
        if(isOn == null) { console.log("null if")
            return;
        } else {
            mainScreen.innerText = "";
            secondScreen.innerText = "";
            active.classList.remove("active");
        } 
    }

    //Handling dot button
    else if(event.target.id == "dot") {

        const hasDotAlready = mainScreen.innerText.includes(".");

        //If check to be sure users can't add more than one dot or can add a dot if no number are on the screen
        if (mainScreen.innerText == "" || hasDotAlready == true) {
            return;
        } else {
            mainScreen.innerText+=event.target.innerText;
        }
    }

    //Handling zero button
    else if(event.target.id == "Zero") {
        //If statement to be sure users can't add more than one zero to screen
        if (mainScreen.innerText != "0") {
            mainScreen.innerText = mainScreen.innerText + "0";
        }
    }


    //Handling operators
    else if(event.target.id =="percentage" || event.target.id =="division" || event.target.id =="moltiplication" || event.target.id =="minus" || event.target.id =="plus" || event.target.id =="equal" ) {

        //Check to find out if the button that fire the event listener was pressing thr equal button
        let wasEqualPressed = false;
        if(event.target.id == "equal") {
            wasEqualPressed = true;
        } //If the equal button was pressed but no values are on both screens nothing happens
        if (wasEqualPressed == true && (mainScreen.innerText == "" || secondScreen.innerText=="")) {
            return;
        }
        //Nothing happens if not values have been entered 
        if(mainScreen.innerText =="" && secondScreen.innerText=="") {
            return;
        }
        //temp display is empty and display has a value
            else if(secondScreen.innerText =="" && mainScreen.innerText!="") {
                //`Getting any other operator that is active and make it inactive
                if(active != null) {
                    active.classList.remove("active");
                }
                //Make selected operator active
                event.target.classList.add("active")
                //Get number from display and move it to temp display. Then clear main display
                secondScreen.innerText=display.innerText;
                mainScreen.innerText="";
            }
        //temp display has value but not regular displau
            else if(secondScreen.innerText !="" && mainScreen.innerText=="") {
                //`Getting any other operator that is active and make it inactive
                if(active != null) {
                    active.classList.remove("active");
                }
                //Make selected operator active
                event.target.classList.add("active");
                return;
            } 
        //both display have a value, hence computation can be done
            else {
                const operation = active.id;
                active.classList.remove("active");
                event.target.classList.add("active");
            //Getting values from both screen and eliminating commas
                let mainScreenNoCommas;
                let secondScreenNoCommas;
                mainScreenNoCommas = (mainScreen.innerText).split('');
                secondScreenNoCommas = (secondScreen.innerText).split('');

            //Looping through values to eliminate commas
                for(let i=0; i<secondScreenNoCommas.length; i++) {
                    if(secondScreenNoCommas[i]==",") {
                        secondScreenNoCommas.splice(i, 1);
                    }
                }
                for(let y=0; y<mainScreenNoCommas.length; y++) {
                    if(mainScreenNoCommas[y]==",") {
                        mainScreenNoCommas.splice(y, 1);
                    }
                }

            let result;
        
            //Converting array back to string to perform operation
            const numbOne = secondScreenNoCommas.join("");
            const numbTwo = mainScreenNoCommas.join("");

            //swtich case will handle all operation 
            switch(true) {
                case(operation == "plus"):
                    result=parseFloat(numbOne) + parseFloat(numbTwo);
                    break;
                case(operation == "minus"):
                    result=parseFloat(numbOne) - parseFloat(numbTwo);
                    break;
                case(operation == "moltiplication"):
                    result=parseFloat(numbOne) * parseFloat(numbTwo);
                    break;
                case(operation == "division"):
                    result=parseFloat(numbOne) / parseFloat(numbTwo);
                    break;
                case(operation == "percentage"):
                    result=(parseFloat(numbTwo)/100) * parseFloat(numbOne);
                    break;
            }

            result = parseFloat(result.toFixed(6));
            result = addCommas(result);

            //Clearing main display and rendering result on top screen.
            secondScreen.innerText = result;
            mainScreen.innerText = "";

             if(wasEqualPressed == true) {
                const clearActive = document.querySelector(".active");
                clearActive.classList.remove("active");
                }
            }
    }

    //Handling negative button
    else if (event.target.id == "negative") {
        
        const numberOnScreen = mainScreen.innerText;
    
        //if screen is empty just add a minus to it or remove it if it is the only item on screen
        if (numberOnScreen =="") {
            mainScreen.innerText= "-";
        } else if (numberOnScreen =="-") {
            screen.innerText= "";
        } else {
        
            const isNumberNegative = numberOnScreen.includes("-");
            const numberToString = numberOnScreen.split('');

            //If statement to toggle number
            if (isNumberNegative == true) {
                numberToString.splice(0, 1);
            } else {
                numberToString.splice(0,0, "-");
            }

            mainScreen.innerText = numberToString.join('');
        }
    }

    //Handling adding any number other than zero 
    else {
        
        //Checking top screen and if any operator is active. If none is active new operation is startin and top screen can be cleared
        if (secondScreen.innerText != "" && active==null) {
            secondScreen.innerText = "";
        }

        //If - else : either the screen is empty or with a zero and I can just print the number, or something else is already on screen and number pressed needs to follow it
        if (mainScreen.innerText == "" || mainScreen.innerText == "0") {
            mainScreen.innerText=event.target.innerText;
        } else {
            mainScreen.innerText+=event.target.innerText;
        }
    }

}

dot.addEventListener("click", calculate);
for(let i=0; i<numbers.length; i++) {
    numbers[i].addEventListener("click", calculate);
}
zero.addEventListener("click", calculate);
reset.addEventListener("click", calculate);
negative.addEventListener("click", calculate);
for(let y=0; y < operators.length; y++) {
    operators[y].addEventListener("click", calculate);
}
bottone.addEventListener("click", calculate);

