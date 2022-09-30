//function to addCommas
/*
const addCommas = (event) => {

    let currentNumber = event.target.innerText;
console.log("ciao");
    const dotIndex = currentNumber.indexOf("."); //No need to iterate over digits that follow the dot. This number also represent how maby numbers there are before the dott, so with it we can work our how many commas we need to add

    if(dotIndex == -1) {
        return;
    }

    const commasToAdd = dotIndex % 4;

    const stringToArray = currentNumber.split("");//converting stirng to array because it is easier to change it

    //Iterating over array before converting to string to add commas
    for(let i=dotIndex-3; i < commasToAdd; i=i-3) {
        stringToArray[i].push(",");
    }

    const numberWithCommas = stringToArray.join('');

    event.target.innerText = numberWithCommas;
    alert("ciao");
}*/

//Getting screen element to inspect number and add commas if needed

const observer = new MutationObserver ((mutations, observer) => {
    
    let numb = mutations[0].addedNodes[0].data;

    let indexToStartCommas;
    const stringToArray = numb.split('');
    const numbAfterDot = [];
    const numbBeforeDot = [];
    let reachedDot = false;
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
  

    const numberWithCommas = numbBeforeDot.concat(numbAfterDot).join('');
    
    observer.disconnect();

    const display=document.getElementById("display");
    display.innerText=numberWithCommas;

    observer.observe(document.getElementById("display"), { childList:true});
});

observer.observe(document.getElementById("display"), { childList:true});