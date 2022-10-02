//Getting slide button which update calculator style
const updateSliderClass = document.querySelector(".slider");


//Function that check which style is currently applied to the calculator and change it in accordance.
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

//Event listener which call update style function to update calculator style
updateSliderClass.addEventListener("click", updateStyle);