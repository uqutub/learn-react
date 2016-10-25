import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';

import { rootReducer, rootEpic } from './store/index';

import App from "./components";
import Home from "./components/home/Home";
import { Login } from "./components/login/Login";
import CounterPage from "./components/counter/Counter";


const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="login" component={Login} />
        <Route path="counter" component={CounterPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
















// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';
// import { Provider } from 'react-redux';

// import { rootReducer, rootEpic } from './store/index';

// import { App } from "./components/App";
// import { Home } from "./components/Home";
// import { Login } from "./components/Login";


// const epicMiddleware = createEpicMiddleware(rootEpic);

// const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(rootReducer)}>
//     <App compiler="TypeScript" framework="React" />
//   </Provider>,
//   document.getElementById('root')
// );