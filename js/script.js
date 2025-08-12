"use strict";

// ----------------
// 1. HTML REFS
// ----------------

const inputBinary = document.getElementById("binary")
const outputDecimal = document.getElementById ("decimal")
const buttonConv = document.getElementById ("conv")

// ----------------
// 2. Listeners
// ----------------

buttonConv.addEventListener ("click", () => {
    const inputText = inputBinary.value;

    // If its a valid binary number, the result is shown
    if (itsBinary (inputText)){
        //Calling the function
        const finalResult = converter(inputText);
        //Show the content
        outputDecimal.textContent = finalResult;
    } else {
        // If its not valid, then the code show an error message.
        outputDecimal.textContent = "Error! Only 0s and 1s."
    }

    });

// --------------
// 3. Convertion function
// --------------

// The formula is "digit*2 power position". Position always start at 0.
function converter(stringBinary){
    let decimal = 0
    let position = 0;

// We need to decrease based on the string total length to pass through all the digits. 
    for (let i = stringBinary.length -1; i >=0; i --){
        if (stringBinary[i] == "1"){
            decimal += (Math.pow (2, position)); 
        }
        position++;
    }
    return decimal; 
}

// --------------
// 4. Verification function (to just allow 0s and 1s)
// --------------

// The function will verify digit by digit (from 0 to the total length of the string)
function itsBinary(stringBinary){
    for (let i = 0; i < stringBinary.length; i++){
        // new const to check each digit
        const character = stringBinary[i];

        // if the digit is different from 0 or 1, it return false
        if (character !== "0" && character !== "1"){
            return false;
        }
    }
    return true;
}