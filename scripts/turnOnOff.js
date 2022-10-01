const onBut = document.querySelector(".onButton");

const turnOnOff = () => {

    const bottone = document.querySelector(".onButton")
    const isOn = document.querySelector(".power");

    console.log(isOn);

    if (isOn == null) {
        bottone.classList.add("power");
    } else {
        bottone.classList.remove("power");
    }
}

onBut.addEventListener("click", turnOnOff);