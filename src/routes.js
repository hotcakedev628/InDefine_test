import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import HomeView from 'src/views/home/HomeView';

export const renderRoutes = (routes = []) => (
  <Switch>
    {routes.map((route, i) => {
      const Component = route.component;

      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Component {...props} />
          )}
        />
      );
    })}
  </Switch>
);

const routes = [
  {
    exact: true,
    path: '/',
    component: HomeView
  }
];

export default routes;
