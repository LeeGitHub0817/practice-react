import React from 'react';

class LifeCircleFunction extends React.Component {
  state = {
    name: 'lee'
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps')
    return null;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log(this);
    console.log(this.props);
    return (
      <div className="all-wraper">
        <p className="text">这是生命周期函数测试页面</p>
      </div>
    )
  }
}

export default LifeCircleFunction;