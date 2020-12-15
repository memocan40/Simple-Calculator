 /*
 - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 * - Getter : History
 */

class calculator {
  constructor() {
    this._history = [];
  }

  equals(expression) {
    const evalResult = eval(expression);
    this.setHistory = evalResult.toString();
    return evalResult;
  }

  clear() {
    this.setHistory = [];
  }

  set setHistory(value) {
    this._history.push(value);
  }

  get getHistory() {
    return this._history;
  }

  // setHistory(value) {
  //   this._history.push(value);
  // }

  // getHistory() {
  //   return this._history;
  // }
}

const calculator1 = new calculator();

const myHistory = calculator1.getHistory;

const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
  calculatorScreen.innerHTML += val;
}

//this code listen to every key on the calculator and add the value on the screen
document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText !== "=") {
    key.addEventListener("click", (e) => {
      print(e.target.innerText);
      calculator1.setHistory = e.target.innerText;
    });
  } else {
    key.addEventListener("click", (e) => {
      const screenResult = calculator1.equals(calculatorScreen.innerText);
      calculatorScreen.innerHTML =screenResult;
      console.log(screenResult);
      console.log(myHistory);
    });
  }
});

document
  .querySelector("#calculator .clear")
  .addEventListener("click", () => (calculatorScreen.innerHTML = ""));

// Implement here the event when the = key is presseds
