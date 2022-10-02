const onBut = document.querySelector(".onButton");

const turnOnOff = () => {

    const bottone = document.querySelector(".onButton")
    const isOn = document.querySelector(".power");

    if (isOn == null) {
        bottone.classList.add("power");
        const display1 = document.querySelector(".result");
        display1.innerText="0";

    } else {
        bottone.classList.remove("power");
        const display1 = document.querySelector(".result");
        const display2 = document.querySelector(".tempDisplay");
        display1.innerText="";
        display2.innerText="";
    }
}

onBut.addEventListener("click", turnOnOff);