let onBut = document.querySelector(".onButton");

const turnOnOff = () => {

    const bottone = document.querySelector(".onOff")
    const isOn = document.querySelector(".power");

    if (isOn == null) {
        bottone.classList.add("power");
        let display1 = document.querySelector(".result");
            if(display1==null) {
                display1 = document.querySelector(".resultNew");
                return;
            }
        display1.innerText="0";

    } else {
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

onBut.addEventListener("click", turnOnOff);