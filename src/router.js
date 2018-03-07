import React from 'react';
import {Route, Switch, Redirect, routerRedux} from 'dva/router';
import dynamic from 'dva/dynamic';
import App from 'routes/app';

const {ConnectedRouter} = routerRedux;


function RouterConfig({history, app}) {
  const routes = [
    {
      path: '/main',
      component: () => import('./routes/main'),
    },
    {
      path: '/login',
      component: () => import('./routes/login'),
    },
    {
      path: '/star',
      component: () => import('./routes/star'),
    },
    {
      path: '/message',
      component: () => import('./routes/message'),
    },
    {
      path: '/myinfo',
      component: () => import('./routes/myinfo'),
    },
    {
      path: '/detail',
      component: () => import('./routes/detail'),
    },

  ];
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
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

