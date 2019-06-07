//http://localhost:3000/
import React from 'react';
import ReactDOM from 'react-dom';

const now = new Date()
const a = 10
const b = 20

const Hello = (props) => {
    return(
        <div>
            <p>
            Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}


const App = () => {
    const name = 'Peter'
    const age = 10
  
    return (
      <div>
          <h1>Greetings</h1>
          <Hello name="sarrah" age={a+b}/>
          <Hello name={name} age={age}/>
          <Hello />
          <Hello />
        <p>Hello world, it is {now.toString()}</p>
      </div>
    )
  }
  
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can changed 
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
