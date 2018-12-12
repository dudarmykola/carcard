import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './ConnectedSwitch';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Menu from '../Menu/index';
import PrivateRoute from '../../components/Hoc/PrivateRoute';
import CarCardGroup from '../../containers/CardGroup';
import SignUp from '../../containers/SignUp';
import SignIn from '../../containers/SignIn';
import { history } from '../../store/store';

class App extends Component {
  static propTypes = {
    auth: PropTypes.object,
    store: PropTypes.object
  };

  render () {
    const { auth, store } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            {
              auth.uid && <Menu />
            }
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/SignIn' />} />
              <Route path='/SignIn' component={SignIn} />
              <Route path='/SignUp' component={SignUp} />
              <PrivateRoute path='/User/:id/Cars' component={CarCardGroup} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
