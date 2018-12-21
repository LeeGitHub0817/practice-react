import React, { Component } from 'react';

class MyCart extends Component {
  render(){
    return (
      <div>
        <MyHeader></MyHeader>
        <MyFooter></MyFooter>
      </div>
    );
  }
}

class MyHeader extends Component {
  render(){
    return <div>
      <div style={{"backgroundColor": "#1cdefe"}}>这是Header</div>
    </div>
  }
}

class MyFooter extends Component {
  render(){
    return (
      <div>
        <ul>
          <li>关于我们</li>
          <li>联系我们</li>
          <li>相关信息</li>
        </ul>
      </div>
    )
  }
}

export default MyCart;