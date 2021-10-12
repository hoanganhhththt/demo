import React from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import * as page from './pages';
import history from './history'
import localStorage from './localStorage';
import ProtectedLogin from './ProtectedLogin';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
    const user = localStorage.getToken();
  return (
  <div className="content">
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={()=>{
          if(!user){
            return (
              <Redirect to='/login' />
            )
          }else {
            return (
              <Redirect to='/homepage' />
            )
          }
        }} />
        <ProtectedLogin 
          isAuth={user? true:false}
          path="/login"
          component={page.LoginPage}
        />
        <ProtectedRoute 
          isAuth={user?true:false}
          path="/homepage"
          component={page.HomePage}
        />
      </Switch>
    </Router>
  </div>
)};

export default Routes;
