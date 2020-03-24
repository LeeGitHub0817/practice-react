import React, { Component } from 'react';

class MyButton extends Component {
  render(){
    return (
      <div>
        <button>{ this.props.btnName }</button>
      </div>
    );
  }
}

class MyInput extends Component {
  render(){
    return (
      <div>
        <label>{ this.props.lab_val }</label>
        <input type="text" />
      </div>
    );
  }
}

class MyProps extends Component {
  render(){
    return (
      <div>
        <MyButton btnName="登录"></MyButton>
        <MyInput lab_val="用户名" place="prprpr"></MyInput>
      </div>
    );
  }
}

export default MyProps;