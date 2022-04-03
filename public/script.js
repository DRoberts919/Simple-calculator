// variables
const view = document.getElementById("screen");
const equals = document.getElementById("equals");
const keys = document.querySelector(".middle");

const one = document.getElementById("one").addEventListener("click", (evt) => {
  //   return evt.target.innerHTML
  appendNumber(evt.target.innerHTML);
});
const two = document.getElementById("two").addEventListener("click", (evt) => {
  //   return evt.target.innerHTML
  appendNumber(evt.target.innerHTML);
});

const calculator = {
  view: "0",
  firstOperation: null,
  secondOperation: null,
  operator: null,
};

// all button operationsz
const clear = () => {};

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
  }
  setDisplay();
};

const operation = (operation) => {};

const calculate = () => {};

const setDisplay = () => {
  view.innerHTML = calculator.firstOperation;
};

setDisplay();
