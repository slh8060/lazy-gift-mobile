import React from 'react';
import {Route, Switch, Redirect, routerRedux} from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './routes/app';



const {ConnectedRouter} = routerRedux;

function RouterConfig({history, app}) {
  const routes = [
    {
      path: '/',
      component: () => import('./routes/IndexPage'),
    },
    {
      path: '/login',
      component: () => import('./routes/login'),
    },
    {
      path: '/test',
      component: () => import('./routes/RegistPage'),
    },
  ];
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route
                key={key} exact path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;

