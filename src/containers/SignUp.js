import { connect } from 'react-redux';
import SignUp from '../components/Auth/SignUp';
import { signUp } from '../actions/authActions';

const mapStateToProps = state => {
  return {
    auth: state.firebaseReducer.auth,
    authError: state.authReducer.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: credentials => dispatch(signUp(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
