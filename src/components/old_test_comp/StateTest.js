import React, { Component } from 'react';

class StateTest extends Component {

  constructor(props){
    super(props);
    this.state = {
      switchVal: false
    }
  }

  
  handleClick=()=>{
    var flag = this.state.switchVal;
    this.setState({
      switchVal: !flag
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>{ this.state.switchVal ? "开" : "关" }</button>
        <hr/>
        <AddReduce></AddReduce>
      </div>
    )
  }
}

//知识点约束性组件和非约束性组件
class AddReduce extends Component {
  constructor(){
    super();
    this.state = {
      count: 1
    }

    //改变this的指向，不然会报错
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickReduce = this.handleClickReduce.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickAdd(){
    let nowCount = this.state.count;
    nowCount++;
    this.setState({count: nowCount});
  }

  handleClickReduce(){
    let nowCount = this.state.count;
    nowCount--;
    if(nowCount <= 0){
      nowCount = 1;
    }
    this.setState({count: nowCount});
  }

  handleChange(event){
    this.setState({
      count: event.target.value
    })
  }
  render(){
    return <div>
      <button onClick={this.handleClickReduce}>-</button>
      {/* <span>{ this.state.count }</span> */}
      <input type="text" onChange={this.handleChange} value={ this.state.count }/>
      <button onClick={this.handleClickAdd}>+</button>
      <hr/>
      <input type="checkbox" defaultChecked />
    </div>
  }
}

export default StateTest;