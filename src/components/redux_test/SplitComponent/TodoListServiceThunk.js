import React, { Component } from 'react';

import axios from 'axios';
import '../../../mock/mock';

import store from '../../../store/index';
import { changeInputAction, addNewItemAction,
  deleteItemAction, getListAction, getTodoList} from '../../../store/actionCreatores';

import TodoListUIThunk from './TodoListUIThunk';

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
    // 未把业务逻辑写在reducer里面时
    // axios.get('http://api.test.com/v1/list').then((res) => {
    //   console.log(res);
    //   const action = getListAction(res.data);
    //   store.dispatch(action);
    // });

    const action = getTodoList();
    store.dispatch(action);
  }

  render() {
    return (
      <TodoListUIThunk
        inputValue={ this.state.inputValue }
        list={ this.state.list }
        handleChange={ this.handleChange }
        handleAdd={ this.handleAdd }
        handleDelete={ this.handleDelete }
      >       
      </TodoListUIThunk>
    )
  }
}

export default TodoListService;