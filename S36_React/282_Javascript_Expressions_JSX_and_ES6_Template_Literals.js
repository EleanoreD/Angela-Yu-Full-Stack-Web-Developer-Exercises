import React from "react";
import ReactDOM from "react-dom"; //deprecated

const name = "Angela";
const luckyNum = 6;

ReactDOM.render(<h1>Hello {name}!</h1>);
ReactDOM.render(<p>Your lucky number is {luckyNum}</p>);

// Can also do this
// ReactDOM.render(<p>Your lucky number is {3 + 3}</p>);
// ReactDOM.render(<p>Your lucky number is {Math.random() * 10}</p>); // any JS expression can go in these braces but cannot do statements like if else
//sReactDOM.render(<p>Your lucky number is `${luckyNum}`</p>);//template literal try not to use as it is cofusing
