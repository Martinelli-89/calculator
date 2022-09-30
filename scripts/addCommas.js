
//Getting screen element to inspect number and add commas if needed

const observer = new MutationObserver ((mutations, observer) => {
    
    let numb = mutations[0].addedNodes[0].data;

    let indexToStartCommas;
    const stringToArray = numb.split('');
    const numbAfterDot = [];
    const numbBeforeDot = [];
    let reachedDot = false;

    //Checking if number is negative before starting anything else. If it is remove negative sign before adding commas

    const isNumbNegative = stringToArray.includes("-");
    if(isNumbNegative == true) {
        stringToArray.splice(0,1);
    }

    for (let i=0; i<stringToArray.length; i++) {
        
        if (reachedDot == true || stringToArray[i] == ".") {
            numbAfterDot.push(stringToArray[i]);
            reachedDot=true;
        } else if (stringToArray[i] != ",") {
            numbBeforeDot.push(stringToArray[i]);
        }

      }

    if (numbBeforeDot.length < 4) {
        return;
    }

    indexToStartCommas = numbBeforeDot.length - 3;
    
  
    while (indexToStartCommas > 0) {
        numbBeforeDot.splice(indexToStartCommas, 0, ",");
        indexToStartCommas -=3;
    }
  
    //If number was negative re adding the sign to the beginning
    if(isNumbNegative==true) {
        numbBeforeDot.splice(0, 0, "-");
    }

    const numberWithCommas = numbBeforeDot.concat(numbAfterDot).join('');
    
    observer.disconnect();

    const display=document.getElementById("display");
    display.innerText=numberWithCommas;

    observer.observe(document.getElementById("display"), { childList:true});
});

observer.observe(document.getElementById("display"), { childList:true});