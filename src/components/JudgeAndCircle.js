import React, { Component } from 'react';

class JudgeTest extends Component {
  constructor(props){
    super(props);
    this.state = { statusVal: true }
  }
  check=(e)=>{
    this.setState({statusVal: e.target.checked});
  }
  render(){
    return (
      <div>
        {
          this.state.statusVal === true &&
            <div>用户同意协议</div>
        }
        {
          this.state.statusVal === false &&
          <div>用户未同意协议</div>
        }
        <input type="checkbox" checked={this.state.statusVal} onChange={this.check}/>
      </div>
    )
  }
}

class JudgeFunc extends Component {
  constructor(props){
    super(props);
    this.state = {isCheck: false}
  }
  showIt(){
    if(this.state.isCheck === true){
      return <p>用户同意协议</p>
    }else{
      return <p>用户未同意协议</p>
    }
  }
  handleClick=(e)=>{
    this.setState({isCheck: e.target.checked});
  }
  render(){
    return (
      <div>
        <div>{ this.showIt() }</div>
        <input type="checkbox" onClick={this.handleClick} />
      </div>
    
    );
  }
}

class CircleTest extends Component {
  constructor(props){
    super(props);
    this.state = {list:[100, 200, 300, 400]}
  }
  render(){
    return (
      <div>
        <ul>
          {
            this.state.list.map((item, index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

class Container extends Component {
  render(){
    return (
      <div>
        <JudgeTest></JudgeTest>
        <JudgeFunc></JudgeFunc>
        <CircleTest></CircleTest>
      </div>
    );
  }
}

export default Container;