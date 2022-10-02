const buttons = document.querySelectorAll(".button");

const addAnimation = () => {

    isIphoneOn = document.querySelector(".iPhone");
    if(isIphoneOn != null) {
        for(let i=0; i<buttons.length; i++) {
            buttons[i].classList.add("on");
        }
    }
}

const onOff = document.querySelector(".onButton");
onOff.addEventListener("click", addAnimation);