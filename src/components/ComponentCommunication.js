import React, { Component } from 'react';

class ChildComponent extends Component {
  handleClick = (ds="one puch man")=>{
    this.props.myfunc();
  }
  render() {
    return (
      <div>
        <h1>组件通讯</h1>
        <button onClick={this.handleClick}>{ this.props.btnName }</button>
      </div>
    );
  }
}

class FatherComponent extends Component {
  send(){
    console.log("来自父组件的数据！")
  }

  render(){
    return (
      <div>
        <ChildComponent btnName="获取父组件数据" myfunc={this.send}></ChildComponent>
      </div>
    );
  }
}

export default FatherComponent;