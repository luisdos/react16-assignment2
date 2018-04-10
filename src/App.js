import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/Validation'
import CharComponent from './Char/Char'

class App extends Component {

  state = { 
    text: '', 
    textLength: 0,
    textArray: []

  }

  textLengthHandler = (event) => {
    const newText = event.target.value;
    const newTextLength = newText.length;
    const newTextArray = newText.split("");
    this.setState({text: newText, textLength: newTextLength, textArray:newTextArray});
  }

  deleteCharHandler = (index) => {
    const newTextArray = this.state.textArray;
    newTextArray.splice(index, 1);
    
    const newText = newTextArray.join("");
    const newTextLength = newText.length;
    this.setState({text: newText, textLength: newTextLength, textArray:newTextArray})
  }

  render() {
    const style = {
      display: 'inline-block', 
      padding: '16px', 
      textAlign: 'center', 
      margin: '16px', 
      border: '1px solid black'
    }

    let chars = this.state.textArray.map( (char, index) => {
      return <CharComponent click={ ()=>this.deleteCharHandler(index) } char={ char } style={ style } />
    })


    return (
      <div className="App">
        <ol>
          <li>DONE Create an input field (in App compxonent) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>DONE Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>DONE Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>DONE Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>DONDE Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>DONE When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      
        <input type='text' value={ this.state.text } onChange={ this.textLengthHandler }  />
        <p>{ this.state.textLength }</p>
        <ValidationComponent length={ this.state.textLength } />
        { chars }
      </div>
    );
  }
}

export default App;
