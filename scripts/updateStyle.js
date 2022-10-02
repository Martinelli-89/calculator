
const updateSliderClass = document.querySelector(".slider");

const updateStyle = () => {

    const style = document.querySelector(".old");

    if(style!=null) {
        updateSliderClass.classList.add("new","slideRight");
        updateSliderClass.classList.remove("old","slideLeft");
        changeStyle("new");
    } else {
        updateSliderClass.classList.add("old", "slideLeft");
        updateSliderClass.classList.remove("new","slideRight");
        changeStyle("old");
    }
}

updateSliderClass.addEventListener("click", updateStyle);