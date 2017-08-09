"use strict";

function TitleTag(props) {
  if (props.subtitle) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        props.title
      ),
      React.createElement(
        "p",
        null,
        props.subtitle
      )
    );
  } else {
    return React.createElement(
      "h2",
      null,
      props.title
    );
  }
}

function Checkbox(props) {
  if (props.checked) {
    return React.createElement(
      "div",
      null,
      " ",
      props.label,
      React.createElement("input", { type: props.type, id: props.id, name: props.name, value: props.value, checked: true })
    );
  } else {
    return React.createElement(
      "div",
      null,
      " ",
      props.label,
      React.createElement("input", { type: props.type, id: props.id, name: props.name, value: props.value })
    );
  }
}

function DropdownMenu(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      " ",
      props.label,
      React.createElement(
        "select",
        null,
        React.createElement(
          "option",
          { value: props.value[0] },
          props.value[0]
        ),
        React.createElement(
          "option",
          { value: props.value[1] },
          props.value[1]
        ),
        React.createElement(
          "option",
          { value: props.value[2] },
          props.value[2]
        ),
        React.createElement(
          "option",
          { value: props.value[3] },
          props.value[3]
        )
      )
    )
  );
}

function TransportationType(props) {
  return React.createElement(
    "ul",
    null,
    React.createElement(
      "table",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Year"
        ),
        React.createElement(
          "th",
          null,
          "Model"
        ),
        React.createElement(
          "th",
          null,
          "Price"
        ),
        React.createElement(
          "th",
          null,
          "Buy"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          props.year
        ),
        React.createElement(
          "td",
          null,
          props.model
        ),
        React.createElement(
          "td",
          null,
          '$' + props.price
        ),
        React.createElement(
          "td",
          null,
          React.createElement(
            "button",
            null,
            "Buy Now"
          )
        )
      )
    )
  );
}

function ReactTransportation(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(TitleTag, { title: "Welcome to React Transportation", subtitle: "The best place to buy vehicles online" }),
    React.createElement(TitleTag, { title: "Choose Options" }),
    React.createElement(Checkbox, { label: "New Only", type: "checkbox", id: "coding", name: "interest", value: "coding", checked: true }),
    React.createElement(DropdownMenu, { label: "Select Type", value: ["All", "Cars", "Trucks", "Convertibles"] }),
    React.createElement(
      "div",
      null,
      React.createElement(TitleTag, { title: "Cars" }),
      React.createElement(TransportationType, { year: "2013", model: "A", price: "32000" }),
      React.createElement(TransportationType, { year: "2011", model: "B", price: "4400" }),
      React.createElement(TransportationType, { year: "2016", model: "B", price: "15500" }),
      React.createElement(TitleTag, { title: "Trucks" }),
      React.createElement(TransportationType, { year: "2014", model: "D", price: "18000" }),
      React.createElement(TransportationType, { year: "2013", model: "E", price: "5200" }),
      React.createElement(TitleTag, { title: "Convertibles" }),
      React.createElement(TransportationType, { year: "2009", model: "F", price: "2000" }),
      React.createElement(TransportationType, { year: "2010", model: "G", price: "6000" }),
      React.createElement(TransportationType, { year: "2012", model: "H", price: "12500" }),
      React.createElement(TransportationType, { year: "2017", model: "M", price: "50000" })
    )
  );
}

ReactDOM.render(

// <div>Hello World</div>,
React.createElement(ReactTransportation, null), document.getElementById("root"));