import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props){
    super(props);
    this.state = {val: ""};
  }

  componentWillMount(){
    console.log("组件装备挂载到DOM");
    console.log(this.refs.myInput);
  }
  componentDidMount(){
    console.log("组件已经挂载到DOM");
    console.log(this.refs.myInput.value);
  }
  componentWillUpdate(){
    console.log("组件装备更新DOM");
    console.log(this.refs.myInput.value);
  }
  componentDidUpdate(){
    console.log("组件装备已经更新到DOM");
    console.log(this.refs.myInput.value);
  }
  handleClick(){
    console.log("点我哟！");
  }
  render(){
    return (
      <div>
        <h1>生命周期</h1>
        <input type="text" ref="myInput" />
        <button onClick={this.handleClick}>点击我</button>
      </div>
    )
  }
}

export default LifeCycle;