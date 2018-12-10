import { connect } from 'react-redux';
import SignIn from '../components/Auth/SignIn';
import { signIn } from '../actions/authActions';

const mapStateToProps = state => {
  return {
    authError: state.authReducer.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creads => dispatch(signIn(creads))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
