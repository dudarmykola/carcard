import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Switch from './ConnectedSwitch';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import MenuComponent from '../../components/Menu';
import PrivateRoute from '../../components/Hoc/PrivateRoute';
import CarCardGroup from '../../containers/CardGroup';
import SignUp from '../../containers/SignUp';
import SignIn from '../../containers/SignIn';
import { history } from '../../store/store';
import Car from '../../containers/Car';
import NotFound from '../../containers/NotFound';
import './App.scss';

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
          <Fragment>
            {
              auth.uid && <MenuComponent />
            }
            <div className='app-container'>
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/SignIn' />} />
                <Route path='/SignIn' component={SignIn} />
                <Route path='/SignUp' component={SignUp} />
                <PrivateRoute exact path='/User/:id/Cars' component={CarCardGroup} />
                <PrivateRoute exact path='/User/:id/Cars/:carId/car' component={Car} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
