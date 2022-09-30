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

const observer = new MutationObserver ((mutations) => {
    
    let numb = mutations[0].addedNodes[0].data;
    let indexToStartCommas;
    let dotIndex = numb.indexOf(".");
    const stringToArray = numb.split('');
    for (let i=0; i<stringToArray.length; i++) {
          if(stringToArray[i]==',') {
              stringToArray.splice(i, 1);
              i--;
          }
      }
   
    if (dotIndex < 4 && dotIndex != -1) {
        return;
    }

    if (dotIndex ==-1 && numb.length < 4) {
        return;
    }

    if(dotIndex==-1) {
        indexToStartCommas = numb.length - 3;
    } else {
        indexToStartCommas = dotIndex - 3;
    }
  
    while (indexToStartCommas > 0) {
        stringToArray.splice(indexToStartCommas, 0, ",");
        indexToStartCommas -=3;
    }
  
    const numberWithCommas = stringToArray.join('');
    
   
    console.log(numberWithCommas);
    //const display=document.getElementById("display");
    //display.innerText=numberWithCommas;
});

observer.observe(document.getElementById("display"), { childList:true});