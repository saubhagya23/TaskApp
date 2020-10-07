import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import UserPage from '../Components/UserPage';
import { getItem } from '../helper';

const Routes = () => {
  const authToken = getItem('token');

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {
            (!!authToken === false) && <Route exact path='/' component={Home} />
          }
          
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/userPage' component={UserPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;