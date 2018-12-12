import { connect } from 'react-redux';
import SignIn from '../components/Auth/SignIn';
import { signIn } from '../actions/authActions';

const mapStateToProps = state => {
  return {
    authError: state.authReducer.authError,
    auth: state.firebaseReducer.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
