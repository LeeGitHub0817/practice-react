import React, { Component } from 'react';

import store from '../../../store/index';
import { changeInputAction, addNewItemAction,
  deleteItemAction, getSagaListAction} from '../../../store/actionCreatores';

import TodoListUISaga from './TodoListUISaga';

class TodoListService extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    // 订阅变化
    // this.storeChange = this.storeChange.bind(this); // 这里必须bind，不然提示没有this，而且必须写在下面这句之前
    // 或者使用下面的箭头函数的写法也可以
    store.subscribe(this.storeChange);

    // this指向
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    // 通知redux
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  handleAdd = () => {
    const action = addNewItemAction();
    store.dispatch(action);
  }
  handleDelete = (index) => () => {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }

  storeChange = () => {
    this.setState(store.getState());
  }

  componentDidMount() {
    const action = getSagaListAction();
    store.dispatch(action);
    console.log(action);
  }

  render() {
    return (
      <TodoListUISaga
        inputValue={ this.state.inputValue }
        list={ this.state.list }
        handleChange={ this.handleChange }
        handleAdd={ this.handleAdd }
        handleDelete={ this.handleDelete }
      >       
      </TodoListUISaga>
    )
  }
}

export default TodoListService;