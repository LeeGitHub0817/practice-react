import React from 'react';
import { Route, Redirect} from 'react-router-dom';

import LifeCircleFunc from '../components/LifeCircleFunction';
import Index from '../components/Index';
import FuncComponentTest from '../components/components_test/FuncComponentTest';
import PureComponentTest from '../components/components_test/PureComponentTest';

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Route path="/">
          <Redirect to="/index"></Redirect>
        </Route>
        <Route path="/index" exact component={ Index } ></Route>
        <Route path="/lifecircle" exact component={ LifeCircleFunc }></Route>
        <Route path="/functomponenttest" exact component={ FuncComponentTest }></Route>
        <Route path="/purecomponenttest" exact component={ PureComponentTest }></Route>
      </div>
    );
  }
}

export default AppRouter;