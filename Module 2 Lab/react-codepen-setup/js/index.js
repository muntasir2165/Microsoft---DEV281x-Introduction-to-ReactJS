"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Question(props) {
  var style = {
    color: "purple"
  };
  return React.createElement(
    "h2",
    { style: style },
    "What is ",
    props.num1,
    " ",
    props.operator,
    " ",
    props.num2,
    " ?"
  );
}

function Choice(props) {
  var style = {
    color: "blue",
    height: 75,
    width: 400,
    fontSize: 30
  };
  return React.createElement(
    "button",
    { style: style, id: props.id, onClick: function onClick() {
        return props.handleClick(props.choice);
      } },
    props.choice
  );
}

function ChoiceOptions(props) {
  var style = { clear: "both" };
  return React.createElement(
    "div",
    { style: style },
    React.createElement(Choice, { choice: props.choicearray[0], handleClick: props.handleClick }),
    React.createElement("br", null),
    React.createElement(Choice, { choice: props.choicearray[1], handleClick: props.handleClick }),
    React.createElement("br", null),
    React.createElement(Choice, { choice: props.choicearray[2], handleClick: props.handleClick }),
    React.createElement("br", null),
    React.createElement(Choice, { choice: props.choicearray[3], handleClick: props.handleClick }),
    React.createElement("br", null)
  );
}

function Feedback(props) {
  return React.createElement(
    "h2",
    { style: props.style },
    props.label,
    ": ",
    props.value
  );
}

var TriviaApp = function (_React$Component) {
  _inherits(TriviaApp, _React$Component);

  function TriviaApp(props) {
    _classCallCheck(this, TriviaApp);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = _this.nextTrivia();
    //initialize the number of correct and incorrect guesses to 0
    _this.state.correct = 0;
    _this.state.incorrect = 0;
    //binding is necessary to make `this` point to the correct object
    _this.handleClick = _this.handleClick.bind(_this);
    _this.restart = _this.restart.bind(_this);
    return _this;
  }

  //a method that resets the state and ultimately starts a new game

  TriviaApp.prototype.restart = function restart() {
    var newState = this.nextTrivia();
    newState.correct = 0;
    newState.incorrect = 0;
    this.setState(newState);
  };

  //a helper method that populates the properties for the state of the Trivia App

  TriviaApp.prototype.nextTrivia = function nextTrivia() {
    var num1 = Math.floor(Math.random() * 10 + 1);
    var num2 = Math.floor(Math.random() * 10 + 1);
    var operatorArray = ["+", "-", "*", "/"];
    //choose an operator at random to do an arithmetic operation with num1 and num2
    var operator = operatorArray[Math.floor(Math.random() * operatorArray.length)];
    var result = Math.floor(eval(num1 + operator + num2));
    var choicearray = this.uniqueElementArray(num1, num2, result);
    return { num1: num1, num2: num2, operator: operator, result: result, choicearray: choicearray.sort(function () {
        return Math.random() * 2 - 1;
      }) }; //choicearray.sort(() => Math.random() * 2 - 1) => shuffles around the array elements in choicearray
  };

  //a helper method for the nextTrivia() method that returns an array containing result and 3 other unique elements

  TriviaApp.prototype.uniqueElementArray = function uniqueElementArray(num1, num2, result) {
    var array = [];
    //counter that keeps track of the number of iterations of the while loop
    var count = 0;
    do {
      array = [result, Math.floor(Math.random() * num1), Math.floor(Math.random() * num2), Math.floor(Math.random() * (num1 + num2))];
      count += 1;
    } while (count < 2500 && new Set(array).size !== array.length);
    /*
    ((new Set(array)).size === array.length) only when the array has unique elements
    */
    //if we have iterated through the while loop 2500 times and still failed to generate
    //a unique element array, we will manually create an array to avoid infinite looping
    if (count >= 2500) {
      array = [result - 1, result, result + 1, result + 2];
    }

    return array;
  };

  TriviaApp.prototype.handleClick = function handleClick(value) {
    // console.log("value: " + value)
    if (this.state.result === value) {
      this.state.correct += 1;
    } else {
      this.state.incorrect += 1;
    }
    var newState = this.nextTrivia();
    newState.correct = this.state.correct;
    newState.incorrect = this.state.incorrect;
    this.setState(newState);
  };

  TriviaApp.prototype.render = function render() {
    var style = {
      textAlign: "center"
    };
    // display:"flex"
    return React.createElement(
      "div",
      { style: style },
      React.createElement(
        "h1",
        null,
        "Trivia"
      ),
      React.createElement(Question, { num1: this.state.num1, num2: this.state.num2, operator: this.state.operator }),
      React.createElement(Feedback, { label: "Incorrect", value: this.state.incorrect, style: { float: "left", color: "red" } }),
      React.createElement(Feedback, { label: "Correct", value: this.state.correct, style: { float: "right", color: "green" } }),
      React.createElement(
        "button",
        { onClick: this.restart },
        "Restart"
      ),
      React.createElement(ChoiceOptions, { choicearray: this.state.choicearray, handleClick: this.handleClick })
    );
  };

  return TriviaApp;
}(React.Component);

ReactDOM.render(React.createElement(TriviaApp, null), document.getElementById("root"));