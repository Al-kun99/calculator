const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number
};

const history = document.querySelector(".history");
const updateHistory = (number) => {
    history.value = number
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
    });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "";
const inputNumber = (number) => {
    if (currentNumber === 0){
        currentNumber = number
    } else {
    currentNumber += number 
    
    }
}

numbers.forEach((number) =>{
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        let cekHistory = `${prevNumber} ${calculationOperator}`;
        updateHistory(cekHistory);
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculationOperator = operators;
    currentNumber = "";

    if (calculationOperator === '='){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "";
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})

const percens = document.querySelector(".percentage");
percens.addEventListener("click", () => {
    console.log("tekan");

})

const calculate = () => {
    let result = "";
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result
    calculationOperator = ""
}

const clearAll = () =>{
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "";
}

const clearButton = document.querySelector(".all-clear");
clearButton.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
    updateHistory(currentNumber);
})

inputDecimal = (decimal) => {
    if (currentNumber.includes(".")){
        return
    } else {
        currentNumber += decimal
    }
}

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    inputDecimal(".")
    updateScreen(currentNumber)
})