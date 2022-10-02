
const updateSliderClass = document.querySelector(".slider");

const updateStyle = () => {

    const style = document.querySelector(".old");

    if(style!=null) {
        updateSliderClass.classList.add("new");
        updateSliderClass.classList.remove("old");
        changeStyle("new");
    } else {
        updateSliderClass.classList.add("old");
        updateSliderClass.classList.remove("new");
        changeStyle("old");
    }
}

updateSliderClass.addEventListener("click", updateStyle);