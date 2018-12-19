import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';
import { Menu } from 'semantic-ui-react';

const MenuComponent = props => (
  <Menu>
    <Menu.Item name='home'>
      Logo
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item name='user'>
        {props.profile.initials}
      </Menu.Item>
      <Menu.Item name='signup' onClick={props.signOut}>
        Sign Out
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

MenuComponent.propTypes = {
  signOut: PropTypes.func,
  profile: PropTypes.object
};
const mapStateToProps = state => {
  return {
    profile: state.firebaseReducer.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);

