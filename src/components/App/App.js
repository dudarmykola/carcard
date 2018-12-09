import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from '../Menu/index';
import CarCardGroup from '../../containers/CardGroup';
import SignUp from '../../components/Auth/SignUp';
import SignIn from '../../components/Auth/SignIn';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <Route path='/SignIn' component={SignIn} />
                    <Route path='/SignUp' component={SignUp} />
                    <Route path='/cars' component={CarCardGroup} />
                </Switch>
            </div>

        </BrowserRouter>
    );
  }
}

export default connect()(App);
