import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render () {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          this.props.auth.uid ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};

export default connect(mapStateToProps)(PrivateRoute);
