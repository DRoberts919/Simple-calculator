// variables
const view = document.getElementById("screen");
const equals = document.getElementById("equals");
const keys = document.querySelector(".middle");

// all operations
const clearbtn = document
  .getElementById("clear")
  .addEventListener("click", (evt) => {
    clear();
  });

const add = document.getElementById("add").addEventListener("click", (evt) => {
  operation("+");
});

const sub = document.getElementById("sub").addEventListener("click", (evt) => {
  operation("-");
});

const mult = document
  .getElementById("mult")
  .addEventListener("click", (evt) => {
    operation("X");
  });

const divide = document
  .getElementById("divide")
  .addEventListener("click", (evt) => {
    operation("/");
  });

const equalsBtn = document
  .getElementById("equals")
  .addEventListener("click", (evt) => {
    calculate();
  });

//all numbers
const one = document.getElementById("one").addEventListener("click", (evt) => {
  appendNumber(evt.target.innerHTML);
});
const two = document.getElementById("two").addEventListener("click", (evt) => {
  appendNumber(evt.target.innerHTML);
});
const three = document
  .getElementById("three")
  .addEventListener("click", (evt) => {
    appendNumber(evt.target.innerHTML);
  });
const four = document
  .getElementById("four")
  .addEventListener("click", (evt) => {
    appendNumber(evt.target.innerHTML);
  });
const five = document
  .getElementById("five")
  .addEventListener("click", (evt) => {
    appendNumber(evt.target.innerHTML);
  });
const six = document.getElementById("six").addEventListener("click", (evt) => {
  appendNumber(evt.target.innerHTML);
});
const seven = document
  .getElementById("seven")
  .addEventListener("click", (evt) => {
    appendNumber(evt.target.innerHTML);
  });
const eight = document
  .getElementById("eight")
  .addEventListener("click", (evt) => {
    appendNumber(evt.target.innerHTML);
  });

const nine = document
  .getElementById("nine")
  .addEventListener("click", (evt) => {
    appendNumber(evt.target.innerHTML);
  });
const zero = document
  .getElementById("zero")
  .addEventListener("click", (evt) => {
    appendNumber(evt.target.innerHTML);
  });

const dot = document.getElementById("dot").addEventListener("click", (evt) => {
  appendNumber(evt.target.innerHTML);
});

const calculator = {
  view: "0",
  firstOperation: null,
  secondOperation: null,
  operator: null,
  calculated: false,
};

// all button operationsz
const clear = () => {
  calculator.view = "0";
  calculator.firstOperation = null;
  calculator.secondOperation = null;
  calculator.operator = null;
  calculator.calculated = false;
  setDisplay();
};

const deleteNum = () => {};

const appendNumber = (number) => {
  console.log(number);

  if (calculator.operator == null) {
    if (calculator.firstOperation == null) {
      calculator.firstOperation = number;
    } else if (calculator.firstOperation != null) {
      let num = calculator.firstOperation;
      calculator.firstOperation = `${num}${number}`;
    }
  } else {
    //   set second operation
    if (calculator.secondOperation == null) {
      calculator.secondOperation = number;
    } else if (calculator.secondOperation != null) {
      let num = calculator.secondOperation;
      calculator.secondOperation = `${num}${number}`;
    }
  }
  setDisplay();
};

const operation = (operation) => {
  console.log(operation);
  calculator.operator = operation;
  setDisplay();
};

const calculate = () => {
  let numOne = parseFloat(calculator.firstOperation);
  let numTwo = parseFloat(calculator.secondOperation);
  let answer = 0;

  calculator.calculated = true;

  switch (calculator.operator) {
    case "+":
      answer = numOne + numTwo;
      calculator.view = answer.toString();
      setDisplay();

      break;
    case "-":
      answer = numOne - numTwo;
      console.log(answer);
      calculator.view = answer.toString();
      console.log(calculator.view);
      setDisplay();
      break;
    case "X":
      answer = numOne * numTwo;
      calculator.view = answer.toString();
      setDisplay();
      break;
    case "/":
      answer = numOne / numTwo;
      calculator.view = answer.toString();
      setDisplay();
      break;

    default:
      break;
  }
};

const setDisplay = () => {
  if (calculator.calculated == false) {
    calculator.view = `${calculator.firstOperation} ${calculator.operator} ${calculator.secondOperation}`;
    view.innerHTML = calculator.view;
  } else {
    console.log(calculator.view);
    view.innerHTML = calculator.view;
  }
};
