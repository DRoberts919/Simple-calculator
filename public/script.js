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

const calculator = {
  view: "0",
  firstOperation: null,
  secondOperation: null,
  operator: null,
};

// all button operationsz
const clear = () => {
  calculator.view = "0";
  calculator.firstOperation = null;
  calculator.secondOperation = null;
  calculator.operator = null;
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
};

const calculate = () => {};

const setDisplay = () => {
  calculator.view = `${calculator.firstOperation} ${calculator.operator} ${calculator.secondOperation}`;
  view.innerHTML = calculator.view;
};

setDisplay();
