import React, { Component } from 'react';

import store from '../../store/test_react_redux/store.js';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '展示点东西！'
    }
  }

  showState() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div>
          <input onChange={ this.props.inputChange } 
            value={ this.props.inputValue } 
            type="text"
            placeholder={ this.props.inputValue }
          />
          <button onClick={ this.props.addNewTodo }>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index, arrSelf) => {
              return (
                <li key={ index }>{ index + 1 }、{ item }</li>
              )
            })
          }
        </ul>
        <hr/>

        <p>{ this.state.msg }</p>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: 'changeInput',
        value: e.target.value
      };

      dispatch(action);
    },
    addNewTodo() {
      let action = {
        type: 'addNewItem'
      }
      dispatch(action);
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList);