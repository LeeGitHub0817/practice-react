import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/* 使用react-redux时的配置
// import App from './App';
// 测试react-redux的入口
import TodoList from './components/redux_test/SplitComponent/TodoListServiceSaga';


ReactDOM.render(<TodoList />, document.getElementById('root'));
*/

/* 使用react-redux时的配置 */
import { Provider } from 'react-redux';
import store from './store/test_react_redux/store';
import TodoList from './components/react_redux/TodoList';

const App = (
  <Provider store={ store }>
    <TodoList></TodoList>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
