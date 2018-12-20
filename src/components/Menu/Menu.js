import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';
import { Menu, Icon, Image, Segment, Header } from 'semantic-ui-react';
import './Menu.scss';

const square = { width: 25, height: 25 };

const MenuComponent = props => (
  <Menu className='main-header'>
    <Menu.Item name='home' className='main-header__logo'>
      <Image src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} />
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item name='user' className='main-header__user'>
        <Segment className='user-circle' circular style={square} color='teal' inverted>
          <Header className='user-circle__title'>{props.profile.initials}</Header>
        </Segment>
      </Menu.Item>
      <Menu.Item name='signup' className='main-header__sign-out'>
        <Icon name='log out' className='icon' color='grey' onClick={props.signOut} />
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

