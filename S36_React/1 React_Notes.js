// Section 38: React
// A front end framework. Rerenders only changed things.
// JSX - allows us to use html along with Babel to be used directly inside React using:
// (&lt;html here&gt;)
// JSX using html with javaScript inside: ({{ javaScript can go here }})

render:(
<div>
<h1 className='Whatever' contenteditable='true'>
  My favourite foods
</h1>
</div>
)

// We change the src to be jsx so it knows what to use.
// Inline styling for React elements: use camelcase and use commas as we are in JSX. 
// The key value pairs for styling have to be a string
// ReactDOM. render is no longer supported in React 18. Use createRoot instead.

reactDOM render (<h1 style={{ color: 'red' }}> Hello World </h1>);
document.getElementByRoot('root');

// React Components:
// Often/always the div items are housed in App.js is imported into the index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import List from './List';

ReactDOM render(
    <div>
        <heading />
        <List />
    </div>

)
// List component and the export

import React from 'react';

function list(){
return ( <ul>
        <li> sausage </li>
        <li> beans </li>
        <li> chips </li>
    </ul>
    );
}

export default list;


// Import and Export in ES6 (multiple functions from a component

import Pi, {doublePi, triplePi} from './math.js';
// from the component`
export default pi;
export { doublePi, triplePi};

/* We have to add the () to the variable to get the value from the imported function component.
can also do this to import all, not best practice
import * as pi from './math.js';
Then we change the functions to use pi.default, pi.doublePi(), pi.triplePi()
Why use require rather than import and export? */

// Props

//index.js is used for putting the placeholder in
<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>React App</title>
    <link rel='stylesheet' href='styles.css' />
  </head>

  <body>
    <div id='root'></div>
    <input id='fName'/ placeholder='Enter your first name.' value='Eleanore'>
    <!-- document.get.element.byid.('fName)') can access above piece of data
       acts a little like an object -->
    <script src='../src/index.js' type='text/jsx'></script>
  </body>
</html>

// detail.js sets up to function for the props
import React from 'react';
function Detail(props) {
  return <p className='info'>{props.detailInfo}</p>;
}

export default Detail;

{/* contact.js holds the indexed objects to be passed in */}
const contacts = [
  {
    id: 1,
    name: 'Beyonce',
    imgURL:
      'https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg',
    phone: '+123 456 789',
    email: 'b@beyonce.com',
  },
  {
    id: 2,
    name: 'Jack Bauer',
    imgURL:
      'https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg',
    phone: '+987 654 321',
    email: 'jack@nowhere.com',
  },
  {
    id: 3,
    name: 'Chuck Norris',
    imgURL:
      'https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png',
    phone: '+918 372 574',
    email: 'gmail@chucknorris.com',
  },
];

export default contacts;

// card.js is the component that displays the data like a surface

import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

function Card(props) {
  return (
    <div className='card'>
      <div className='top'>
        <p>{props.id}</p>
        <h2 className='name'>{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className='bottom'>
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;

{/* App.js holding the app data which may be routed to other pages. We define the properties here. */}

import React from 'react';
import Card from './Card';
import contacts from '../contacts';

function createCard(contact) {
  return (
    // needs a key use an id can be a string or a number but it must be unique
    <Card
      id={contact.id} //key ahs properties so we cannot tap in through props, we must mak an id atribute to use
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className='heading'>My Contacts</h1>
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;

{/* That app.js defines the properties.
The card element passes the props along to app through props the data is held in the props file

### React Dev Tools
Shows react DOM tree. Shows the props being passed down. Can install on Chrome or Firefox. React Developer Tools

### Mapping Data to Components tap into the array array.map. wrap in curly braces. create a function and
 return something, pass in some props eg. name, pass this function into the map function, see App.js 
 above.

Use a key prop with a unique integer or string to id the the data. */}

{/* Map, Filter, Reduce */}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

ReactDOM.render(<App />, document.getElementById('root'));

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map((x, y) => {
return (x * y);
});
{/* or can do */}
const newNumbers = numbers.map(x => x * x);
console.log(newNumbers);

var numbers = [3, 56, 2, 48, 5];

{/* Map -Create a new array by doing something with each item in an array. */}
const newNumbers = numbers.map(function (x) {
return x * 2;
});

{/* Filter - Create a new array by keeping the items that return true. */}
const newNumbers = numbers.filter(function(num) {
return num < 10;
});

{/* Reduce - Accumulate a value by doing something to each item in an array. */}
var newNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
});

{/* Find - find the first item that matches from an array. */}
const newNumber = numbers.find(function (num) {
    return num > 10;
});

{/* FindIndex - find the index of the first item that matches. */}
const newNumber = numbers.findIndex(function (num) {
    return num > 10;
});

{/* FAT ARROW */}
=>
{/* instead of */}
const newNumbers =  numbers.map(function(x){
return x * 2;
});

{/* do */}

const newNumbers =  numbers.map (x => x * 2);

{/* Put the fat arrow before the return. Keep the brackets for multiple inputs. */}

{/* Terniary */}

{/* instead of if else use terniary */}

isLoggedIn === true ? <h1> Hello</h1> : <Login />;
{/* true is default so could be shortened further to */}
isLoggedIn ? <h1> Hello</h1> : <Login />;
{/* condition ? render h1 : else do this null */}
{/* (expression && expression)`React often uses
Condition&& Expression
true && EXPRESSION
false && no Expression
current time < 12 && Why you still working
rendering only when the left hand side is true */}

{/* State */}

index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

{/* Challenge:
1. Given that you can get the current time using: let time = new Date().toLocaleTimeString(); */}
let time = new Date().toLocaleTimeString();
console.log(time);
{/* Show the latest time in the <h1> when the Get Time button is pressed.
2. Given that you can get code to be called every second using the setInterval method.
Can you get the time in your <h1> to update every second? e.g. uncomment the code below to see 
Hey printed every second. */}

function sayHi() {
  console.log('Hey');
}
setInterval(sayHi, 1000);

App.js
import React, { useState } from 'react';

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className='container'>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
};

export default App;

useState

import React, { useState } from “react”;
function App() {
const [count, setCount] = useState(0);

function increase() {
setCount(count + 1);
    };

function decrease() {
setCount(count - 1);
    };

return (
<div classname='container'>
{count}
</div>
);
};

export default App;

{/* You have to use a hook inside a function eg. useState needs a function to work.
import useState(or the hook), initialise the state in a function
first value is the current state and the second is the alternate
lastly set the state to empty (' ') or the starting state. You can use an onClick to update the button
`onClick={() => setColor('blue')}`
useState can use strings numbers booleans arrays objects or any combo of these. To do this we can use multiple hoos or use one hook with an object in it. */}

{/* Destructuring */}

{/* data */}

const animals = [
  {
    name: 'cat',
    sound: 'meow',
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: 'dog', sound: 'woof' }
];

function useAnimals(animal) {
  return [
    animal.name,
    function() {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };

index.js

import animals, { useAnimals } from './data';

{/* Destructuring Arrays */}
console.log(animals);
const [cat, dog] = animals;
console.log(cat);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

{/* Destructuring Objects */}
const { name, sound} = cat;
const { name: catName, sound: catSound } = cat;
const { name = 'Fluffy', sound = 'Purr' } = cat;
const {feedingRequirements: {food, water} } = cat;
console.log(food);

{/* CHALLENGE: uncomment the code below and see the car stats rendered */}
import React from 'react';
import ReactDOM from 'react-dom';
import cars from './practice';

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById('root')
);

{/* exercise */}

const cars = [
  {
    model: 'Honda Civic',
    coloursByPopularity: ['black', 'silver'],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: 'Tesla Model 3',
    coloursByPopularity: ['red', 'white'],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];
export default cars;

{/* Destructured names need to be unique. We can access the value of the object by:
console.log(sound); destructuring by object, the name has to match the property
destructureing can be useful to rename the variables thus: */}

const (sound: catSound, name: catName) = cat;
{/* can assign a value */}
const (name = “fluffy”, sound = “mew”) = cat;
{/* if name is undefined use these values instead.Useful with public apis to discourage crashing. */}

{/* Nested Objects */}
const animals = [
      ( name: 'cat, sound 'meow', feedingRequirements:{
    feed,
    water,
    }),
    (name: 'dog', sound: 'woof')
    ],
    
export animals

const {name, sound, feedingRequirements: {food, water} = cat
console.log (food);

{/* You can destructure as few or as many of the values as you want. this demos the nested value access method.
console.log useAnimals(cat)); */}

{/* Event Handling */}

import React, { useState } from 'react';

function App() {
  const [headingText, setHeadingText] = useState('Hello');
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText('Submitted');
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className='container'>
      <h1>{headingText}</h1>
      <input type='text' placeholder='What's your name?' />
      <button
        style={{ backgroundColor: isMouseOver ? 'black' : 'white' }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
};
export default App;

// attributes in JSX are in camelcase

// To Use the User Inputs with State

// `onChange ={pass in the handleChange function here};`
// This will trigger with every letter entered
// We can console log some things:
console log(event.target.value);
// this is what is entered
console log(event.target.placeholder);
console log(event.target.type);

import React, {useState} from 'react';

function App(){
    const [name, setName] = useState('');
    const [headingText, setHeading] = useState('');
    
    function handleChange(event){
      console log(event.target.value);
      setName(event.target.value);
      }

    function handleClick(){
      setHeading(name);// adding curly braces will give the JS object rather than the value.
      }
      
return (
    <div className='container'>
    <h1>Hello {headingText}</h1>
    <input
      onChange={handleChange}
      type='text'
      placeholder='What's your name?'
      value = {name}; // this is a controlled component set the value so it is one single source of truth, html handles state itself
      />
      <button onClick =(handleClick)> Submit</button>
    </div>
       ):

{/* we can use submit to handle the submit info */}

{/* Functional v Hooks

You can create react components using class. */}

class App extend
render() {
} the class needs to extend something

{/* Look at the React hooks page. */}

{/* Complex State */}

{/* Where you may need to access or manage the previous state of the component
The long way to manage complex state with much repetition */}

import React, { useState } from 'react';

function App() {

  const [fName, setfName] = useState(''); 
  const [lName, setlName] = useState(''); 

  function updatefName(event){
    const firstName = event.target.value;
    setfName(firstName)
  }

  function updatelName(event){
    const lastName = event.target.value;
    setlName(lastName)
  }

  return (
    <div className='container'>
      <h1>
      Hello {fName} {lName}
      </h1>
      <form>
        <input name='fName' onChange={updatefName} placeholder='First Name' value={fName} />
        <input name='lName' onChange={updatelName} placeholder='Last Name' value={lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

{/* The shorter way */}

import React, { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: '' 
    }); 

function handleChange(event){
const newValue = event.target.value;
const inputName = event.target.name;

setFullName((prevValue) => {
  if (inputName === 'fName'){
    return{
      fName: newValue,
      lName: prevValue.lName
    } 
  } else if (inputName ==='lName'){
    return{
      fName: prevValue.fName,
      lName: newValue
    }
  }
})
}

  return (
    <div className='container'>
      <h1>
      Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input 
        name='fName' 
        onChange={handleChange} 
        placeholder='First Name' 
        value={fullName.fName} />
        <input name='lName' 
        onChange={handleChange} 
        placeholder='Last Name' 
        value={fullName.lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

{/* Can be shortened to: */}

import React, { useState } from 'react';

function App() {

  const [fullName, setFullName] = useState({
    fName: '',
    lName: '' 
    }); 

function handleChange(event){
const {value, name} = event.target;

setFullName((prevValue) => {
  if (name === 'fName'){
    return{
      fName: newValue,
      lName: prevValue.lName
    } 
  } else if (name ==='lName'){
    return{
      fName: prevValue.fName,
      lName: value
    }
  }
})
}

  return (
    <div className='container'>
      <h1>
      Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input 
        name='fName' 
        onChange={handleChange} 
        placeholder='First Name' 
        value={fullName.fName} />
        <input name='lName' 
        onChange={handleChange} 
        placeholder='Last Name' 
        value={fullName.lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

{/* Don't try to access the event inside the stateful setter. It will error about synthetic events being 
reused. When inputs pass events through event liteneers it uses synthetic events. Use destructureing 
to access the inputs.

Spread Operator

The JavaScript spread operator (`...`) allows us to quickly copy all or part of an existing array or object into another array or object. */}

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

{/* The spread operator avoids nesting the inserted object. */}
[\key variable\]: array

{/* Props are read only

458: Managing a Component Tree */}