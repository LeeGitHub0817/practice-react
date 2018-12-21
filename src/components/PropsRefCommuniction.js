import React, { Component } from 'react';

class AComponent extends Component {
  constructor(){
    super();
    this.state = {defaultVal: "prpr"}
  }

  handleChange=(e)=>{
    this.setState({defaultVal: e.target.value})
    let val = this.refs.myInput.value;
    this.props.getData(val);
  }

  render(){
    return (
      <div>
        <input ref="myInput" type="text" onChange={this.handleChange} value={ this.state.defaultVal }/>
      </div>
    )
  }
}

class BComponent extends Component {
  handleClick=()=>{
    console.log("B接收到的数据是：" + this.props.dataInfo)
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>点击获取数据</button>
      </div>
    )
  }
}

class MainComponent extends Component {
  constructor(){
    super();
    this.state = {myVal: ""}
  }
  receiveMsg=(val)=>{
    console.log("Main接收到的数据是：" + val);
    this.setState({myVal: val});
  }
  render(){
    return (
      <div>
        <h1>Props和Ref测试</h1>
        <AComponent getData={this.receiveMsg}></AComponent>
        <BComponent dataInfo={this.state.myVal}></BComponent>
      </div>
    )
  }
}

export default MainComponent;