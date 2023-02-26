import React from 'react';
import { connect } from 'react-redux'
import './App.css';

function App(props) {

const handleInc = (evt) => {
  props.dispatch({
    type: 'INCREMENT'
  })
}

const handleDec = (evt) => {
  props.dispatch({
    type: 'DECREMENT'
  })
}


console.log(props.dispatch)
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <p>
      {props.count}
      </p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}


export default connect(mapStateToProps)(App);