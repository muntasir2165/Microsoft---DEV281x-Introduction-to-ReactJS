"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlledInput = function (_React$Component) {
  _inherits(ControlledInput, _React$Component);

  function ControlledInput() {
    _classCallCheck(this, ControlledInput);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ControlledInput.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      this.props.label,
      React.createElement("br", null),
      React.createElement("input", { type: "text", name: this.props.name, value: this.props.value, onChange: this.props.handleChange })
    );
  };

  return ControlledInput;
}(React.Component);

/*
  "If you want to only trigger validation when the input looses focus you can use onBlur"
  source: stackoverflow [https://stackoverflow.com/questions/37609049/how-to-correctly-catch-change-focus-out-event-on-text-input-in-react-js]
*/

var ControlledSelect = function (_React$Component2) {
  _inherits(ControlledSelect, _React$Component2);

  function ControlledSelect() {
    _classCallCheck(this, ControlledSelect);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  ControlledSelect.prototype.render = function render() {
    // console.log("select: " + this.props.value)
    var options = this.props.options.map(function (option) {
      return React.createElement(
        "option",
        { value: option },
        option
      );
    });
    return React.createElement(
      "div",
      null,
      this.props.label,
      React.createElement("br", null),
      React.createElement(
        "select",
        { name: this.props.name, value: this.props.value, onChange: this.props.handleChange },
        React.createElement(
          "option",
          { value: this.props.defaultValue },
          this.props.defaultValue
        ),
        options
      )
    );
  };

  return ControlledSelect;
}(React.Component);

var ControlledCheck = function (_React$Component3) {
  _inherits(ControlledCheck, _React$Component3);

  function ControlledCheck() {
    _classCallCheck(this, ControlledCheck);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  ControlledCheck.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "checkbox", name: this.props.name, value: this.props.value, checked: this.props.checked, onChange: this.props.handleChangeChecked }),
      this.props.label,
      React.createElement("br", null)
    );
  };

  return ControlledCheck;
}(React.Component);

/*
please note that the use of firstName, lastName, activity and restrictions attributes of record to populate the table row data indicates that the GenerateTable class is tightly coupled to the App class. Further work is required to investigate this and remove the coupling from these two classes
*/

var GenerateTable = function (_React$Component4) {
  _inherits(GenerateTable, _React$Component4);

  function GenerateTable() {
    _classCallCheck(this, GenerateTable);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  GenerateTable.prototype.render = function render() {
    var _this5 = this;

    //if there is not data passed in, just return an empty div instead of returning headers in an empty table
    if (this.props.data.length == 0) {
      return React.createElement("div", null);
    }

    var formattedHeader = this.props.header.map(function (headerTitle) {
      return React.createElement(
        "th",
        null,
        headerTitle
      );
    });
    var formattedData = this.props.data.map(function (record, index) {
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement(
            "button",
            { onClick: function onClick() {
                return _this5.props.dataFunction(index);
              } },
            _this5.props.dataFunctionSymbol
          )
        ),
        React.createElement(
          "td",
          null,
          record.firstName
        ),
        React.createElement(
          "td",
          null,
          record.lastName
        ),
        React.createElement(
          "td",
          null,
          record.activity
        ),
        React.createElement(
          "td",
          null,
          record.restrictions
        )
      );
    });
    return React.createElement(
      "table",
      { style: this.props.style },
      React.createElement(
        "tr",
        null,
        formattedHeader
      ),
      formattedData
    );
  };

  return GenerateTable;
}(React.Component);

var Registration = function (_React$Component5) {
  _inherits(Registration, _React$Component5);

  function Registration(props) {
    _classCallCheck(this, Registration);

    /*
    the restrictionX property is set to false so that when this property is passed to the checked property of a button, the button is unchecked
    */

    var _this6 = _possibleConstructorReturn(this, _React$Component5.call(this, props));

    _this6.state = { firstName: "", lastName: "", activity: "", restriction1: false, restriction2: false, restriction3: false, registrationInfo: [] };
    _this6.handleChange = _this6.handleChange.bind(_this6);
    //the handleChangeChecked method is bound in a different way as seen on lines 143, 144, and 145
    // this.handleChangeChecked = this.handleChangeChecked.bind(this)
    _this6.registerStudent = _this6.registerStudent.bind(_this6);
    //the unRegisterStudent method is bound in a different way as seen on line 148
    // this.unRegisterStudent = this.unRegisterStudent.bind(this)
    return _this6;
  }

  Registration.prototype.handleChange = function handleChange(event) {
    var _setState;

    this.setState((_setState = {}, _setState[event.target.name] = event.target.value, _setState), function () {
      console.log("handleChange event changes are now updated!");
    });
  };

  Registration.prototype.handleChangeChecked = function handleChangeChecked(event) {
    var _setState2;

    // if (event.target.name === "check1") {
    //   console.log(event.target.name)
    // }
    // console.log(event.target.name + "---" + event.target.value + "---" + event.target.checked)
    //     this.setState({[event.target.name]: event.target.checked}, () => {
    // console.log("checked: " + event.target.checked)

    //     this.setState({[event.target.name]: event.target.value}, (event) => {
    // console.log("checked: " + event.target.checked)
    //     })
    this.setState((_setState2 = {}, _setState2[event.target.name] = event.target.checked, _setState2), function () {
      console.log("handleChangeChecked event changes are now updated!");
    });
  };

  Registration.prototype.registerStudent = function registerStudent() {
    // console.log("before activity: " + this.state.activity)
    var studentName = this.state.firstName.charAt(0).toUpperCase() + this.state.firstName.slice(1).toLowerCase() + " " + this.state.lastName.charAt(0).toUpperCase() + this.state.lastName.slice(1).toLowerCase();
    var registrationInfoCopy = this.state.registrationInfo.slice();
    var restrictions = (this.state.restriction1 ? "a" : "") + (this.state.restriction2 ? "b" : "") + (this.state.restriction3 ? "c" : "");
    registrationInfoCopy.push({ firstName: this.state.firstName.charAt(0).toUpperCase() + this.state.firstName.slice(1).toLowerCase(), lastName: this.state.lastName.charAt(0).toUpperCase() + this.state.lastName.slice(1).toLowerCase(), activity: this.state.activity, restrictions: restrictions });
    this.setState({ firstName: "", lastName: "", activity: "", restriction1: false, restriction2: false, restriction3: false, registrationInfo: registrationInfoCopy }, function () {
      // console.log("after activity: " + this.state.activity)
      console.log("Registered student " + studentName);
    });
  };

  Registration.prototype.unRegisterStudent = function unRegisterStudent(index) {
    // console.log("splicing: " + index)
    var studentName = this.state.registrationInfo[index].firstName + " " + this.state.registrationInfo[index].lastName;
    var registrationInfoCopy = this.state.registrationInfo.slice();
    registrationInfoCopy.splice(index, 1);
    this.setState({ registrationInfo: registrationInfoCopy }, function () {
      console.log("Unregistered student " + studentName);
    });
  };

  Registration.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ControlledInput, { label: "First Name", name: "firstName", value: this.state.firstName, handleChange: this.handleChange }),
      React.createElement(ControlledInput, { label: "Last Name", name: "lastName", value: this.state.lastName, handleChange: this.handleChange }),
      React.createElement(ControlledSelect, { label: "Select Activity", name: "activity", defaultValue: "", value: this.state.activity, options: ["Science Lab", "Swimming", "Cooking", "Painting"], handleChange: this.handleChange }),
      "Check all that apply:",
      React.createElement("br", null),
      React.createElement(ControlledCheck, { label: "Dietary Restrictions", name: "restriction1", value: "a", checked: this.state.restriction1, handleChangeChecked: this.handleChangeChecked.bind(this) }),
      React.createElement(ControlledCheck, { label: "Physical Disabilities", name: "restriction2", value: "b", checked: this.state.restriction2, handleChangeChecked: this.handleChangeChecked.bind(this) }),
      React.createElement(ControlledCheck, { label: "Medical Needs", name: "restriction3", value: "c", checked: this.state.restriction3, handleChangeChecked: this.handleChangeChecked.bind(this) }),
      React.createElement(
        "button",
        { onClick: this.registerStudent },
        "Submit"
      ),
      React.createElement("br", null),
      React.createElement(GenerateTable, { style: { margin: "0px auto", textAlign: "center" }, header: ["Remove", "First Name", "Last Name", "Activity", "Restrictions"], data: this.state.registrationInfo, dataFunction: this.unRegisterStudent.bind(this), dataFunctionSymbol: "X" })
    );
  };

  return Registration;
}(React.Component);

ReactDOM.render(React.createElement(Registration, null), document.getElementById("root"));