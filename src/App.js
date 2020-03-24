import React from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Link, Switch } from 'react-router-dom';

import { renderRoutes } from 'react-router-config';
import routes from './router/router';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <hr></hr>
          {/* 跳转按钮 */}
          {/* 使用Link标签时必须使用 HashRouter或者bowserRouter包裹*/}
          <Link to="/lifecirclefunction">
            <button>生命周期函数测试</button>
          </Link>
          <Link to="/functomponenttest/11235?name=lee">
            <button>函数式组件</button>
          </Link>
          <Link to="/purecomponenttest">
            <button>纯组件</button>
          </Link>
          <Link to="/compcommunication">
            <button>组件通讯</button>
          </Link>
          <Link to="/judgeandcircle">
            <button>条件判断和循环</button>
          </Link>
          <Link to="/propschildren">
            <button>PropsChildren</button>
          </Link>

          {/* 路由 */}
          <Switch>
            <React.Suspense fallback={ <div>Loading......</div> }>
              { renderRoutes(routes) }
            </React.Suspense>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
