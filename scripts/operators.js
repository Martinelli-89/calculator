//Getting values from both displays
const tempDisplay = document.querySelector(".tempDisplay");
const display = document.querySelector(".result");

const handleCalcolation = (event) => {

    let wasEqualPressed = false;
    if(event.target.id == "equal") {
        wasEqualPressed = true;
    }
    if (wasEqualPressed == true && (tempDisplay.innerText == "" || display.innerText=="")) {
        return;
    }
    //Nothing happens if not values have been entered 
    if(tempDisplay.innerText =="" && display.innerText=="") {
        return;
    }
    //temp display is empty and display has a value
        else if(tempDisplay.innerText =="" && display.innerText!="") {
            //`Getting any other operator that is active and make it inactive
            const getActiveOperators = document.querySelector(".active");
            if(getActiveOperators!=null) {
                getActiveOperators.classList.remove("active");
            }
            //Make selected operator active
            event.target.classList.add("active")
            //Get number from display and move it to temp display. Then clear main display
            tempDisplay.innerText=display.innerText;
            display.innerText="";
        }
    //temp display has value but not regular displau
        else if(tempDisplay.innerText !="" && display.innerText=="") {
            //`Getting any other operator that is active and make it inactive
            const getActiveOperators = document.querySelector(".active");
            if(getActiveOperators!=null) {
                getActiveOperators.classList.remove("active");
            }
            //Make selected operator active
            event.target.classList.add("active");
            return;
        } 
    //both display have a value, hence com[putation have to be done 
        else {

            const getActiveOperators = document.querySelector(".active");
            const operation = getActiveOperators.id;
            getActiveOperators.classList.remove("active");
            event.target.classList.add("active");
        //Getting values from both screen and eliminating commas
            const tempDisplay = (document.querySelector(".tempDisplay").innerText).split('');
            const display = (document.querySelector(".result").innerText).split('');
        //Looping through values to eliminate commas
            for(let i=0; i<tempDisplay.length; i++) {
                if(tempDisplay[i]==",") {
                    tempDisplay.splice(i, 1);
                }
            }
            for(let y=0; y<display.length; y++) {
                if(display[y]==",") {
                    display.splice(i, 1);
                }
            }

        let result;
       
        //Converting array back to string to perform operation
        const numbOne = tempDisplay.join("");
        const numbTwo = display.join("");

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

        //Clearing main display and rendering result on top screen. But if button pressed was equal render opertion on main screen
            const displayToRender= document.querySelector(".tempDisplay");
            displayToRender.innerText=result;

            const displayToClear = document.querySelector(".result");
            displayToClear.innerText="";

            if(wasEqualPressed == true) {
                const clearActive = document.querySelector(".active");
                clearActive.classList.remove("active");
            }
        }
}

//Getting all operators and attaching them the event listeners
const operators = document.querySelectorAll(".operator");
for(let i=0; i<operators.length; i++) {
    operators[i].addEventListener("click", handleCalcolation);
}