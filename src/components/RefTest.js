import React, { Component } from 'react';

class RefTest extends Component {
  handleClick=()=>{
    console.log(this.refs.myInput.value);
  }

  render(){
    return <div>
      <TestChildCom ref="li"></TestChildCom>
      <input type="text" ref="myInput"/>
      <button onClick={this.handleClick}>点击我</button>
    </div>
  }
}

class TestChildCom extends Component {
  constructor(){
    super();
    this.count = 1;
  }
  render() {
    return <h1>这是ref测试</h1>;
  }
}

export default RefTest;
