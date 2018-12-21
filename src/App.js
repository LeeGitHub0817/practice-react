import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

import MyCom from "./components/CompontentTest";
import MyCart from "./components/MyCartTest";
import MyProps from "./components/PropsTest";
import ComCom from "./components/ComponentCommunication";
import PropChild from "./components/PropsChildren";
import RefTest from "./components/RefTest";
import StateTest from "./components/StateTest";
import PropsAndRef from "./components/PropsRefCommuniction";
import LifeCycle from "./components/LifecycleFunc";
import JudgeCircle from "./components/JudgeAndCircle";

// let name = "Hello React";

class App extends Component {
  constructor(){
    super();
    this.name = "Hello React";
  }
  render() {
    return (
      <div className="App">
        <h1>{ this.name }</h1>
        <MyCom></MyCom>
        <MyCart></MyCart>
        <MyProps></MyProps>
        <ComCom></ComCom>
        <PropChild></PropChild>
        <RefTest></RefTest>
        <StateTest></StateTest>
        <PropsAndRef></PropsAndRef>
        <LifeCycle></LifeCycle>
        <JudgeCircle></JudgeCircle>
      </div>
    );
  }
}

export default App;
