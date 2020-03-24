import React from 'react';
import { Redirect } from 'react-router-dom'; // 使用这个一定要引入上面那句话import React from 'react';

// import Index from '../components/Index';
// import LifeCircleFunction from '../components/LifeCircleFunction';
// import FunctionComponentTest from '../components/components_test/FuncComponentTest';
// import PureComponentTest from '../components/components_test/PureComponentTest';

const Index = React.lazy(() => import('../components/Index'));
const LifeCircleFunction = React.lazy(() => import('../components/LifeCircleFunction'));
const FunctionComponentTest = React.lazy(() => import('../components/components_test/FuncComponentTest'));
const PureComponentTest = React.lazy(() => import('../components/components_test/PureComponentTest'));

const CompCommunication = React.lazy(() => import('../components/old_test_comp/ComponentCommunication'));
const JudgeAndCircle = React.lazy(() => import('../components/old_test_comp/JudgeAndCircle'));
const PropsChildren = React.lazy(() => import('../components/old_test_comp/PropsChildren'));

const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to={"/index"}></Redirect>
    }
  },
  {
    path: '/index',
    exact: true,
    component: Index
  },
  {
    path: '/lifecirclefunction',
    exact: true,
    component: LifeCircleFunction
  },
  {
    path: '/functomponenttest/:id',
    exact: true,
    component: FunctionComponentTest
  },
  {
    path: '/purecomponenttest',
    exact: true,
    component: PureComponentTest
  },
  // 组件通讯
  {
    path: '/compcommunication',
    exact: true,
    component: CompCommunication
  },
  // 条件判断和循环
  {
    path: '/judgeandcircle',
    exact: true,
    component: JudgeAndCircle
  },
  // props和children测试
  {
    path: '/propschildren',
    exact: true,
    component: PropsChildren
  }
]

export default routes;