//Getting on/off button to attach event listener
let onBut = document.querySelector(".onButton");

//Function that update on/off button class so other elements works if the power is on, or don't if it is off.
const turnOnOff = () => {

    const bottone = document.querySelector(".onOff") // Same element as onBut but different class name since onButton updates to onButtonNew when style change to Iphone
    const isOn = document.querySelector(".power"); // Check if any element has the class power, which is applied only when the on button is pressed

    if (isOn == null) { //If is on it means calculator is off. If statement turn power on if needed or switch it off
        bottone.classList.add("power");
        let display1 = document.querySelector(".result");
            if(display1==null) {
                display1 = document.querySelector(".resultNew");
                return;
            }
        display1.innerText="0"; //If calculator is the old one and power is turn on a zero is added on screen

    } else { //else statement that turn off calculator and clear all content from screen and turn any active button inactive
        bottone.classList.remove("power");
        let display1 = document.querySelector(".result");
        let display2 = document.querySelector(".tempDisplay");
        if(display1 == null) {
            display1 = document.querySelector(".resultNew");
            display2 = document.querySelector(".tempDisplayNew");
        }
        const activeBut = document.querySelector(".active");
        activeBut.classList.remove("active");

        display1.innerText="";
        display2.innerText="";
    }
}

//Added event listener to on/off button
onBut.addEventListener("click", turnOnOff);