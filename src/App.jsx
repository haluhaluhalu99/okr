import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './scss/styles.scss';
import PrivateRoute from 'components/PrivateRoute';
import { RouteBase } from 'constants/routeUrl';
import { authActions } from 'redux/modules/auth';
import LoginPage from 'views/Login';
import DefaultLayout from 'layout/DefaultLayout';
import useSagaCreators from 'hooks/useSagaCreators';

const App = () => {
  const { dispatch } = useSagaCreators();

  useEffect(() => {
    dispatch(authActions.checkAuth);
  }, [dispatch]);

  //! Render
  return (
    <Router>
      <Switch>
        <Route path={RouteBase.Login} exact component={LoginPage} />
        <PrivateRoute path={RouteBase.Home} component={DefaultLayout} />
      </Switch>
    </Router>
  );
};

export default App;
