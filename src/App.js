import React, { Component } from 'react';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      previousValue: '',
      currentValue: '0',
      formula: '0'     
      
    }
    
    this.numberHandler = this.numberHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.operatorHandler = this.operatorHandler.bind(this);
    this.decimalHandler = this.decimalHandler.bind(this);
    this.equalsHandler = this.equalsHandler.bind(this);
    this.replaceLast = this.replaceLast.bind(this);
  }
  
 replaceLast(find, replace, string) {
    var lastIndex = string.lastIndexOf(find);
    
    if (lastIndex === -1) {
        return string;
    }
    
    var beginString = string.substring(0, lastIndex);
    var endString = string.substring(lastIndex + find.length);
    
    return beginString + replace + endString;
}

  
  clearHandler(e) {
    this.setState({
      currentValue: '0',
      previousValue: '',
      formula: '0'
    })
  }
  numberHandler(e) {
    this.setState({
      currentValue: this.state.currentValue += e.target.value,
      previousValue: e.target.value,
      formula: this.state.formula == '0' ? e.target.value : this.state.formula += e.target.value
    })
   
 }

    
  operatorHandler(e) {
    
  
      if(!this.state.previousValue.match(/[+|\-|*|\/]/)) {
      this.setState({
       currentValue: '0',
      formula: this.state.formula += e.target.value,
        previousValue: e.target.value
    })
    
    
  }
  else{
   
    this.setState({
       previousValue: e.target.value,
       formula: this.replaceLast(this.state.previousValue, e.target.value, this.state.formula)
    })
   
  }
  }
  
    
 decimalHandler(e) {
   
   if(!this.state.currentValue.includes('.'))
    {
     this.setState({
      currentValue: e.target.value,
      formula: this.state.formula += e.target.value })
      
    }
   
 }
 
  equalsHandler() {
    const formula = this.state.formula;
    const result = eval(formula);
    
    this.setState({
      formula: result
    })
  }
  render() {
    return (
      <div id="main"><div className="calculator">
        <Display previousValue={this.state.previousValue}
                 currentValue={this.state.currentValue}
          formula={this.state.formula}/>
        
        <Buttons 
                 clearHandler={this.clearHandler}
                 numberHandler={this.numberHandler} 
                 operatorHandler={this.operatorHandler}
                 decimalHandler={this.decimalHandler}
                 equalsHandler={this.equalsHandler}/>
        </div>
      </div>);
  }
}

class Buttons extends React.Component {
  render() {
    return(
      <div className="grid-container">
        <button id="clear" className="grid-item clear" value="AC" onClick={this.props.clearHandler}>AC</button>
        <button id="divide" className="grid-item operatorStyle" onClick={this.props.operatorHandler} value="/">/</button>
        <button id="multiply" className="grid-item operatorStyle" onClick={this.props.operatorHandler} value="*" >X</button>
        <button id="seven" className="grid-item numberStyle" onClick={this.props.numberHandler} value="7">7</button>
        <button id="eight" className="grid-item numberStyle" onClick={this.props.numberHandler} value="8">8</button>
        <button id="nine" className="grid-item numberStyle" onClick={this.props.numberHandler} value="9">9</button>
        <button id="subtract" className="grid-item operatorStyle" onClick={this.props.operatorHandler} value="-">-</button>
        <button id="four" className="grid-item numberStyle" onClick={this.props.numberHandler} value="4">4</button>
        <button id="five" className="grid-item numberStyle" onClick={this.props.numberHandler} value="5">5</button>
        <button id="six" className="grid-item numberStyle" onClick={this.props.numberHandler} value="6">6</button>
        <button id="add" className="grid-item operatorStyle" onClick={this.props.operatorHandler} value="+">+</button>
        <button id="one" className="grid-item numberStyle" onClick={this.props.numberHandler} value="1">1</button>
        <button id="two" className="grid-item numberStyle" onClick={this.props.numberHandler} value="2">2</button>
        <button id="three" className="grid-item numberStyle" onClick={this.props.numberHandler} value="3">3</button>
        <button id="equals" className="grid-item equals" onClick={this.props.equalsHandler} value="=">=</button>
        <button id="zero" className="grid-item numberStyle zero" onClick={this.props.numberHandler} value="0">0</button>
        <button id="decimal" className="grid-item numberStyle" onClick={this.props.decimalHandler} value=".">.</button>
      </div>
    
    )
  }
}

class Display extends React.Component {
  render() {
    return (<div id="display">{this.props.formula}</div>);
  }
}

export default Calculator;
