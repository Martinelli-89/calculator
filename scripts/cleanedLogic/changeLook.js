//Function that changfes classNames to apply correct style
const changeStyle = (value) => {

    if(value=="new") {  //change all classes name to load correct style

        const calculator = document.querySelector(".calculator");
        calculator.classList.add("calculatorNew");
        calculator.classList.remove("calculator");

        const percentage = document.getElementById("percentage");
        percentage.removeAttribute('id');
        percentage.setAttribute("id", "percentageNew");

        const calculatorGrid = document.querySelector(".CalculatorGrid");
        calculatorGrid.classList.add("CalculatorGridNew");
        calculatorGrid.classList.remove("CalculatorGrid");

        const zero = document.querySelector(".zero");
        zero.classList.add("zeroNew");
        zero.classList.remove("zero");

        const reset = document.querySelector(".reset");
        reset.classList.add("resetNew");
        reset.classList.remove("reset");

        const dot= document.querySelector(".dot");
        dot.classList.add("dotNew");
        dot.classList.remove("dot");

        const negative = document.querySelector(".negative");
        negative.classList.add("negativeNew");
        negative.classList.remove("negative");


        const onButton = document.querySelector(".onButton");
        onButton.classList.add("onButtonNew");
        onButton.classList.remove("onButton");

        const result = document.querySelector(".result");
        result.classList.add("resultNew");
        result.classList.remove("result");

        const tempDisplay = document.querySelector(".tempDisplay");
        tempDisplay.classList.add("tempDisplayNew");
        tempDisplay.classList.remove("tempDisplay");

        const button = document.querySelectorAll(".button");
        for (let i=0; i<button.length; i++) {
            button[i].classList.add("buttonNew");
            button[i].classList.remove("button");
        }   

        const numbers = document.querySelectorAll(".numbers");
        for (let i=0; i<numbers.length; i++) {
            numbers[i].classList.add("numbersNew");
            numbers[i].classList.remove("numbers");
        } 

        const operator = document.querySelectorAll(".operator");
        for (let i=0; i<operator.length; i++) {
            operator[i].classList.add("operatorNew");
            operator[i].classList.remove("operator");
        } 
    } else {

        const calculator = document.querySelector(".calculatorNew");
        calculator.classList.add("calculator");
        calculator.classList.remove("caculatorNew");

        const percentage = document.getElementById("percentageNew");
        percentage.removeAttribute('id');
        percentage.setAttribute("id", "percentage");

        const calculatorGrid = document.querySelector(".CalculatorGridNew");
        calculatorGrid.classList.add("CalculatorGrid");
        calculatorGrid.classList.remove("CalculatorGridNew");


        const zero = document.querySelector(".zeroNew");
        zero.classList.add("zero");
        zero.classList.remove("zeroNew");

        const reset = document.querySelector(".resetNew");
        reset.classList.add("reset");
        reset.classList.remove("resetNew");

        const dot= document.querySelector(".dotNew");
        dot.classList.add("dot");
        dot.classList.remove("dotNew");

        const negative = document.querySelector(".negativeNew");
        negative.classList.add("negative");
        negative.classList.remove("negativeNew");


        const onButton = document.querySelector(".onButtonNew");
        onButton.classList.add("onButton");
        onButton.classList.remove("onButtonNew");

        const result = document.querySelector(".resultNew");
        result.classList.add("result");
        result.classList.remove("resultNew");

        const tempDisplay = document.querySelector(".tempDisplayNew");
        tempDisplay.classList.add("tempDisplay");
        tempDisplay.classList.remove("tempDisplayNew");

        const button = document.querySelectorAll(".buttonNew");
        for (let i=0; i<button.length; i++) {
            button[i].classList.add("button");
            button[i].classList.remove("buttonNew");
        }   

        const numbers = document.querySelectorAll(".numbersNew");
        for (let i=0; i<numbers.length; i++) {
            numbers[i].classList.add("numbers");
            numbers[i].classList.remove("numbersNew");
        } 

        const operator = document.querySelectorAll(".operatorNew");
        for (let i=0; i<operator.length; i++) {
            operator[i].classList.add("operator");
            operator[i].classList.remove("operatorNew");
        } 

    }

}


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