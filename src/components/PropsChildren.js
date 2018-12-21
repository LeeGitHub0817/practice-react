import React, { Component } from 'react';

class ChildrenTest extends Component {
  display(){
    return React.Children.map(
      this.props.children, (val, idx)=>{
        return <li>{ val }</li>
      }
    )
  }

  render(){
    return <ul>
      {this.display()}
    </ul>
  }
}

class PropsChildren extends Component {
  render(){
    return <ChildrenTest>
      <p>child-one</p>
      <p>child-two</p>
      <p>child-three</p>
    </ChildrenTest>
  }
}

export default PropsChildren;