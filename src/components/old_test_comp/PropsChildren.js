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
    console.log(this.props)
    return <ul>
      {this.display()}
    </ul>
  }
}

class TestPPP extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        hahahahahah
      </div>
    )
  }
}

class PropsChildren extends Component {
  render(){
    console.log(this.props)
    return (
      <div>
        <TestPPP></TestPPP>
        <ChildrenTest>
          <p>child-one</p>
          <p>child-two</p>
          <p>child-three</p>
        </ChildrenTest>
      </div>
      
    )
  }
}

export default PropsChildren;